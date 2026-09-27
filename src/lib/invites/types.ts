export interface EventTheme {
  paper: string;
  ink: string;
  gold: string;
  goldLight: string;
  blush: string;
  sage: string;
}

export interface RsvpContact {
  name: string;
  phone: string;
}

export interface EventMoment {
  id: number;
  sort_order: number;
  label: string;
  time_text: string | null;
  venue_name: string | null;
  venue_note: string | null;
  map_url: string | null;
}

export interface InviteEvent {
  id: number;
  slug: string;
  status: "draft" | "live" | "archived";
  couple_a_name: string;
  couple_b_name: string;
  monogram_a: string;
  monogram_b: string;
  hashtag: string | null;
  event_date: string;
  time_zone: string;
  dress_code: string | null;
  families_intro: string | null;
  personal_message: string | null;
  closing_note: string | null;
  rsvp_deadline: string | null;
  rsvp_contacts: RsvpContact[];
  theme: Partial<EventTheme>;
}

export interface Guest {
  id: number;
  event_id: number;
  display_name: string;
  seats: number;
  group_label: string | null;
}

export interface Rsvp {
  attending: boolean;
  seats_confirmed: number;
  message: string | null;
  responded_at: string;
}

/** Everything one guest's invitation needs, resolved from a single token. */
export interface InviteBundle {
  event: InviteEvent;
  guest: Guest;
  moments: EventMoment[];
  rsvp: Rsvp | null;
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

export interface CheckInResult {
  status:
    | "admitted"
    | "already-admitted"
    | "not-attending"
    | "no-response"
    | "unknown-guest"
    | "unauthorised";
  guestName?: string;
  seatsAdmitted?: number;
  seatsConfirmed?: number;
  previouslyAdmitted?: number;
}

/** Palette used when an event has not overridden a colour. */
export const DEFAULT_THEME: EventTheme = {
  paper: "#FBF7F0",
  ink: "#3A3128",
  gold: "#B4924F",
  goldLight: "#D8BC7E",
  blush: "#E8C7C8",
  sage: "#8C9A80",
};

export function resolveTheme(theme: Partial<EventTheme> | null | undefined): EventTheme {
  return { ...DEFAULT_THEME, ...(theme ?? {}) };
}
