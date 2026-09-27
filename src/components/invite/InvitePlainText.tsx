import type { InviteBundle } from "@/lib/invites/types";
import { resolveTheme } from "@/lib/invites/types";

/**
 * The invitation as a plain document, for a guest whose JavaScript never
 * arrives and for anyone who would rather read it than click through it.
 * Same content, no interaction, no envelope. RSVP falls back to the hosts'
 * telephone numbers, which is how the printed card asks for it anyway.
 */
export default function InvitePlainText({ bundle, token }: { bundle: InviteBundle; token: string }) {
  const { event, guest, moments } = bundle;
  const theme = resolveTheme(event.theme);

  const dateLine = new Date(`${event.event_date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div
      style={{
        background: theme.paper,
        color: theme.ink,
        padding: "2rem 1.25rem",
        fontFamily: "var(--invite-display), Georgia, serif",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        An invitation for {guest.display_name}
      </p>

      <h1 style={{ color: theme.gold, fontStyle: "italic", fontSize: "2rem", margin: "1rem 0" }}>
        {event.couple_a_name} &amp; {event.couple_b_name}
      </h1>

      {event.families_intro ? <p>{event.families_intro}</p> : null}
      <p>{dateLine}</p>

      {moments.map((moment) => (
        <p key={moment.id}>
          <strong>{moment.label}</strong>
          {moment.time_text ? `, ${moment.time_text}` : ""}
          {moment.venue_name ? ` — ${moment.venue_name}` : ""}
          {moment.map_url ? (
            <>
              {" "}
              <a href={moment.map_url} style={{ color: theme.gold }}>
                Directions
              </a>
            </>
          ) : null}
        </p>
      ))}

      {event.dress_code ? <p>Dress code: {event.dress_code}</p> : null}

      <p>
        This invitation admits {guest.seats} {guest.seats === 1 ? "guest" : "guests"}.
      </p>

      <p>
        <a href={`/invite/${token}/calendar`} style={{ color: theme.gold }}>
          Add to calendar
        </a>
      </p>

      {event.rsvp_contacts.length > 0 ? (
        <p>
          To reply, please call{" "}
          {event.rsvp_contacts.map((contact, i) => (
            <span key={contact.phone}>
              {i > 0 ? " or " : ""}
              {contact.name} on <a href={`tel:${contact.phone}`} style={{ color: theme.gold }}>{contact.phone}</a>
            </span>
          ))}
          .
        </p>
      ) : null}
    </div>
  );
}
