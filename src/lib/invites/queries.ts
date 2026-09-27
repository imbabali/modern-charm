import { inviteDb } from "./db";
import type { BoardData, CheckInResult, InviteBundle } from "./types";

/**
 * Every call here is a `security definer` function, never a table read.
 *
 * The raw token is passed through and hashed inside the database, so the hash
 * never leaves it and a database disclosure cannot be replayed as a working
 * link. Seat clamping and repeat-scan handling live in those functions too,
 * because the database is the only place a rule about the headcount cannot be
 * talked out of.
 */

/** Resolve one guest's invitation. Null covers both an unknown token and a closed event. */
export async function getInviteByToken(token: string): Promise<InviteBundle | null> {
  const { data, error } = await inviteDb().rpc("invite_get", { p_token: token });
  if (error) throw error;
  return (data as InviteBundle | null) ?? null;
}

/** Record a response. Returns the seats the database actually committed to. */
export async function recordRsvp(params: {
  token: string;
  attending: boolean;
  seats: number;
  message: string | null;
}): Promise<{ ok: boolean; seatsConfirmed?: number; reason?: string }> {
  const { data, error } = await inviteDb().rpc("invite_rsvp", {
    p_token: params.token,
    p_attending: params.attending,
    p_seats: params.seats,
    p_message: params.message,
  });

  if (error) throw error;
  return data as { ok: boolean; seatsConfirmed?: number; reason?: string };
}

/** The host's read-only board. */
export async function getBoardByToken(boardToken: string): Promise<BoardData | null> {
  const { data, error } = await inviteDb().rpc("invite_board", { p_board_token: boardToken });
  if (error) throw error;
  return (data as BoardData | null) ?? null;
}

/** Admit a guest at the door, or say why not. */
export async function checkIn(params: {
  scannerToken: string;
  guestToken: string;
  scannedBy: string | null;
}): Promise<CheckInResult> {
  const { data, error } = await inviteDb().rpc("invite_checkin", {
    p_scanner_token: params.scannerToken,
    p_guest_token: params.guestToken,
    p_scanned_by: params.scannedBy,
  });

  if (error) throw error;
  return data as CheckInResult;
}

/**
 * Confirm a scanner link is valid before rendering the console, so a steward
 * finds out at setup rather than with a queue in front of them.
 */
export async function getScannerEvent(
  scannerToken: string,
): Promise<{ eventId: number; coupleLine: string } | null> {
  const { data, error } = await inviteDb().rpc("invite_scanner_event", {
    p_scanner_token: scannerToken,
  });

  if (error) throw error;
  return (data as { eventId: number; coupleLine: string } | null) ?? null;
}
