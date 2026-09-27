import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { getInviteByToken } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";
import { resolveTheme } from "@/lib/invites/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admission pass",
  robots: { index: false, follow: false },
};

interface PassPageProps {
  params: Promise<{ token: string }>;
}

export default async function PassPage({ params }: PassPageProps) {
  const { token } = await params;

  if (!invitesConfigured() || !isWellFormedToken(token)) notFound();

  const bundle = await getInviteByToken(token);
  if (!bundle) notFound();

  const { event, guest, rsvp } = bundle;
  const theme = resolveTheme(event.theme);

  // The pass only exists once a guest has accepted. Anything else sends them
  // back to the invitation rather than issuing a code the door would reject.
  if (!rsvp?.attending) {
    return (
      <main
        style={{
          minHeight: "100svh",
          display: "grid",
          placeItems: "center",
          background: theme.paper,
          color: theme.ink,
          padding: "2rem",
          textAlign: "center",
          fontFamily: "var(--invite-display), Georgia, serif",
        }}
      >
        <div>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Your admission pass appears once you have accepted.
          </p>
          <a href={`/invite/${token}`} style={{ color: theme.gold }}>
            Back to your invitation
          </a>
        </div>
      </main>
    );
  }

  // The QR carries the guest token only. The door scanner resolves it against
  // the event it is authorised for, so a code photographed from someone else's
  // phone still admits only the seats that guest was given.
  const qrSvg = await QRCode.toString(token, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    color: { dark: theme.ink, light: theme.paper },
  });

  const dateLine = new Date(`${event.event_date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        background: theme.paper,
        color: theme.ink,
        padding: "clamp(1rem, 4vw, 2rem)",
        fontFamily: "var(--invite-display), Georgia, serif",
      }}
    >
      <article
        style={{
          width: "min(92vw, 24rem)",
          border: `1px solid ${theme.gold}`,
          padding: "clamp(1.5rem, 5vw, 2rem)",
          textAlign: "center",
          background: theme.paper,
        }}
      >
        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: theme.sage,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Admission pass
        </p>

        <h1 style={{ fontSize: "1.6rem", fontStyle: "italic", color: theme.gold, margin: "0.75rem 0" }}>
          {event.couple_a_name} &amp; {event.couple_b_name}
        </h1>

        <p style={{ fontSize: "0.82rem", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          {dateLine}
        </p>

        <div
          style={{ margin: "1.5rem auto", width: "min(60vw, 13rem)" }}
          dangerouslySetInnerHTML={{ __html: qrSvg }}
        />

        <p style={{ fontSize: "1.25rem", fontStyle: "italic" }}>{guest.display_name}</p>

        <p
          style={{
            fontSize: "0.66rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: theme.gold,
            marginTop: "0.5rem",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Admits {rsvp.seats_confirmed} {rsvp.seats_confirmed === 1 ? "guest" : "guests"}
        </p>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.68rem",
            lineHeight: 1.6,
            color: theme.sage,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Please have this ready at the entrance. It works without a signal once the page has loaded.
        </p>
      </article>
    </main>
  );
}
