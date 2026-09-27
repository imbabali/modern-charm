import { inviteDb } from "./db";
import { hashToken } from "./tokens";
import { clampSeats } from "./rsvp-rules";
import type {
  EventMoment,
  Guest,
  InviteBundle,
  InviteEvent,
  Rsvp,
} from "./types";

const EVENT_COLUMNS =
  "id, slug, status, couple_a_name, couple_b_name, monogram_a, monogram_b, hashtag, " +
  "event_date, time_zone, dress_code, families_intro, personal_message, closing_note, " +
  "rsvp_deadline, rsvp_contacts, theme";

const MOMENT_COLUMNS =
  "id, sort_order, label, time_text, venue_name, venue_note, map_url";

/**
 * Resolve one guest's invitation from the token in their URL.
 *
 * The token is hashed before it touches a query, so the raw value never enters
 * a statement, a log or an error. Returns null for anything that does not match
 * a live event, which the route renders as a plain not-found rather than
 * confirming whether the token or the event was the problem.
 */
export async function getInviteByToken(token: string): Promise<InviteBundle | null> {
  const db = inviteDb();

  const { data: guest, error: guestError } = await db
    .from("guests")
    .select("id, event_id, display_name, seats, group_label")
    .eq("token_hash", hashToken(token))
    .maybeSingle<Guest>();

  if (guestError) throw guestError;
  if (!guest) return null;

  const [eventResult, momentsResult, rsvpResult] = await Promise.all([
    db.from("events").select(EVENT_COLUMNS).eq("id", guest.event_id).maybeSingle<InviteEvent>(),
    db
      .from("event_moments")
      .select(MOMENT_COLUMNS)
      .eq("event_id", guest.event_id)
      .order("sort_order", { ascending: true }),
    db
      .from("rsvps")
      .select("attending, seats_confirmed, message, responded_at")
      .eq("guest_id", guest.id)
      .maybeSingle<Rsvp>(),
  ]);

  if (eventResult.error) throw eventResult.error;
  if (momentsResult.error) throw momentsResult.error;
  if (rsvpResult.error) throw rsvpResult.error;

  const event = eventResult.data;
  if (!event || event.status === "archived") return null;

  return {
    event,
    guest,
    moments: (momentsResult.data ?? []) as EventMoment[],
    rsvp: rsvpResult.data ?? null,
  };
}

/**
 * Record a response, clamped to the seats this guest was actually given.
 *
 * The current answer is upserted so a guest who changes their mind overwrites
 * one row, while `rsvp_log` keeps every answer they have ever given. Hosts
 * reconcile numbers against the log when a count is disputed.
 */
export async function recordRsvp(params: {
  guestId: number;
  eventId: number;
  seatsAllowed: number;
  attending: boolean;
  seatsRequested: number;
  message: string | null;
}): Promise<{ seatsConfirmed: number }> {
  const db = inviteDb();

  const seatsConfirmed = clampSeats({
    attending: params.attending,
    requested: params.seatsRequested,
    allowed: params.seatsAllowed,
  });

  const { error: upsertError } = await db.from("rsvps").upsert(
    {
      guest_id: params.guestId,
      event_id: params.eventId,
      attending: params.attending,
      seats_confirmed: seatsConfirmed,
      message: params.message,
      responded_at: new Date().toISOString(),
    },
    { onConflict: "guest_id" },
  );

  if (upsertError) throw upsertError;

  const { error: logError } = await db.from("rsvp_log").insert({
    guest_id: params.guestId,
    event_id: params.eventId,
    attending: params.attending,
    seats_confirmed: seatsConfirmed,
    message: params.message,
  });

  if (logError) throw logError;

  return { seatsConfirmed };
}

export interface BoardRow {
  display_name: string;
  group_label: string | null;
  seats: number;
  attending: boolean | null;
  seats_confirmed: number | null;
  responded_at: string | null;
  checked_in_seats: number;
}

export interface BoardData {
  event: InviteEvent;
  rows: BoardRow[];
  totals: {
    invitations: number;
    seatsOffered: number;
    accepted: number;
    declined: number;
    pending: number;
    seatsConfirmed: number;
    seatsCheckedIn: number;
  };
}

/** The host's read-only view, resolved from the board token in their URL. */
export async function getBoardByToken(boardToken: string): Promise<BoardData | null> {
  const db = inviteDb();

  const { data: event, error: eventError } = await db
    .from("events")
    .select(EVENT_COLUMNS)
    .eq("board_token_hash", hashToken(boardToken))
    .maybeSingle<InviteEvent>();

  if (eventError) throw eventError;
  if (!event) return null;

  const [guestsResult, rsvpsResult, checkinsResult] = await Promise.all([
    db
      .from("guests")
      .select("id, display_name, group_label, seats")
      .eq("event_id", event.id)
      .order("display_name", { ascending: true }),
    db.from("rsvps").select("guest_id, attending, seats_confirmed, responded_at").eq("event_id", event.id),
    db.from("checkins").select("guest_id, seats_admitted").eq("event_id", event.id),
  ]);

  if (guestsResult.error) throw guestsResult.error;
  if (rsvpsResult.error) throw rsvpsResult.error;
  if (checkinsResult.error) throw checkinsResult.error;

  const rsvpByGuest = new Map(
    (rsvpsResult.data ?? []).map((r) => [r.guest_id as number, r]),
  );

  const checkedInByGuest = new Map<number, number>();
  for (const scan of checkinsResult.data ?? []) {
    const guestId = scan.guest_id as number;
    checkedInByGuest.set(
      guestId,
      (checkedInByGuest.get(guestId) ?? 0) + (scan.seats_admitted as number),
    );
  }

  const rows: BoardRow[] = (guestsResult.data ?? []).map((guest) => {
    const rsvp = rsvpByGuest.get(guest.id as number);
    return {
      display_name: guest.display_name as string,
      group_label: (guest.group_label as string | null) ?? null,
      seats: guest.seats as number,
      attending: (rsvp?.attending as boolean | undefined) ?? null,
      seats_confirmed: (rsvp?.seats_confirmed as number | undefined) ?? null,
      responded_at: (rsvp?.responded_at as string | undefined) ?? null,
      checked_in_seats: checkedInByGuest.get(guest.id as number) ?? 0,
    };
  });

  const totals = {
    invitations: rows.length,
    seatsOffered: rows.reduce((sum, r) => sum + r.seats, 0),
    accepted: rows.filter((r) => r.attending === true).length,
    declined: rows.filter((r) => r.attending === false).length,
    pending: rows.filter((r) => r.attending === null).length,
    seatsConfirmed: rows.reduce((sum, r) => sum + (r.seats_confirmed ?? 0), 0),
    seatsCheckedIn: rows.reduce((sum, r) => sum + r.checked_in_seats, 0),
  };

  return { event, rows, totals };
}

/** Resolve the event a door scanner is authorised for. */
export async function getEventByScannerToken(scannerToken: string): Promise<InviteEvent | null> {
  const db = inviteDb();

  const { data, error } = await db
    .from("events")
    .select(EVENT_COLUMNS)
    .eq("scanner_token_hash", hashToken(scannerToken))
    .maybeSingle<InviteEvent>();

  if (error) throw error;
  return data ?? null;
}

export interface CheckInResult {
  status: "admitted" | "already-admitted" | "not-attending" | "no-response" | "unknown-guest";
  guestName?: string;
  seatsAdmitted?: number;
  seatsConfirmed?: number;
  previouslyAdmitted?: number;
}

/**
 * Admit a guest at the door.
 *
 * A repeat scan does not admit a second time; it reports what was already
 * recorded, so a guest stepping out and back in cannot inflate the headcount.
 */
export async function checkInGuest(params: {
  eventId: number;
  guestToken: string;
  scannedBy: string | null;
}): Promise<CheckInResult> {
  const db = inviteDb();

  const { data: guest, error: guestError } = await db
    .from("guests")
    .select("id, event_id, display_name, seats")
    .eq("token_hash", hashToken(params.guestToken))
    .maybeSingle<Guest>();

  if (guestError) throw guestError;
  if (!guest || guest.event_id !== params.eventId) return { status: "unknown-guest" };

  const { data: rsvp, error: rsvpError } = await db
    .from("rsvps")
    .select("attending, seats_confirmed")
    .eq("guest_id", guest.id)
    .maybeSingle<Rsvp>();

  if (rsvpError) throw rsvpError;

  if (!rsvp) return { status: "no-response", guestName: guest.display_name };
  if (!rsvp.attending) return { status: "not-attending", guestName: guest.display_name };

  const { data: priorScans, error: scanError } = await db
    .from("checkins")
    .select("seats_admitted")
    .eq("guest_id", guest.id);

  if (scanError) throw scanError;

  const previouslyAdmitted = (priorScans ?? []).reduce(
    (sum, scan) => sum + (scan.seats_admitted as number),
    0,
  );

  if (previouslyAdmitted > 0) {
    return {
      status: "already-admitted",
      guestName: guest.display_name,
      seatsConfirmed: rsvp.seats_confirmed,
      previouslyAdmitted,
    };
  }

  const { error: insertError } = await db.from("checkins").insert({
    guest_id: guest.id,
    event_id: params.eventId,
    seats_admitted: rsvp.seats_confirmed,
    scanned_by: params.scannedBy,
  });

  if (insertError) throw insertError;

  return {
    status: "admitted",
    guestName: guest.display_name,
    seatsAdmitted: rsvp.seats_confirmed,
    seatsConfirmed: rsvp.seats_confirmed,
  };
}
