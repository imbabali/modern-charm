import { getInviteByToken } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

/**
 * An .ics file rather than a Google Calendar deep link, because it works on
 * every phone a guest might carry and needs no account.
 */

export const dynamic = "force-dynamic";

/** Fold long lines and escape the characters iCalendar treats as syntax. */
function escapeText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  if (!invitesConfigured() || !isWellFormedToken(token)) {
    return new Response("Not found", { status: 404 });
  }

  const bundle = await getInviteByToken(token);
  if (!bundle) return new Response("Not found", { status: 404 });

  const { event, moments } = bundle;
  const couple = `${event.couple_a_name} & ${event.couple_b_name}`;
  const compactDate = event.event_date.replace(/-/g, "");
  const firstMoment = moments[0];

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Modern Charm//Invitations//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${event.slug}-${bundle.guest.id}@moderncharmevents.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    `DTSTART;VALUE=DATE:${compactDate}`,
    `SUMMARY:${escapeText(`Wedding of ${couple}`)}`,
  ];

  if (firstMoment?.venue_name) {
    lines.push(`LOCATION:${escapeText(firstMoment.venue_name)}`);
  }

  const description = moments
    .map((m) => [m.label, m.time_text, m.venue_name].filter(Boolean).join(" — "))
    .join("\n");

  if (description) lines.push(`DESCRIPTION:${escapeText(description)}`);

  lines.push("END:VEVENT", "END:VCALENDAR");

  return new Response(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.slug}.ics"`,
      "Cache-Control": "no-store",
    },
  });
}
