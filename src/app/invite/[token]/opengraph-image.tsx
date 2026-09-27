import { ImageResponse } from "next/og";
import { getInviteByToken } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";
import { resolveTheme } from "@/lib/invites/types";

/**
 * The share preview, and the reason the guest token lives in the path.
 *
 * Open Graph metadata resolves per route segment and cannot read a query
 * string, so a query-based invitation is forced to show every guest the same
 * card. Here the preview carries the guest's own name, which is what a
 * forwarded WhatsApp message renders before the recipient opens anything.
 *
 * WhatsApp discards previews much above 300 KB, so this stays flat colour and
 * type: no photograph, no gradient mesh, no embedded font file.
 */

export const alt = "Wedding invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const bundle =
    invitesConfigured() && isWellFormedToken(token) ? await getInviteByToken(token) : null;

  const theme = resolveTheme(bundle?.event.theme);

  const couple = bundle
    ? `${bundle.event.couple_a_name}  &  ${bundle.event.couple_b_name}`
    : "You are invited";

  const guestName = bundle?.guest.display_name ?? "";
  const seats = bundle?.guest.seats ?? 0;

  const dateLine = bundle
    ? new Date(`${bundle.event.event_date}T12:00:00Z`).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: theme.paper,
          color: theme.ink,
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `2px solid ${theme.gold}`,
            display: "flex",
          }}
        />

        {guestName ? (
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: theme.sage,
              marginBottom: 26,
              display: "flex",
            }}
          >
            An invitation for
          </div>
        ) : null}

        {guestName ? (
          <div style={{ fontSize: 52, fontStyle: "italic", marginBottom: 34, display: "flex" }}>
            {guestName}
          </div>
        ) : null}

        <div style={{ width: 150, height: 2, background: theme.gold, display: "flex" }} />

        <div
          style={{
            fontSize: 70,
            fontStyle: "italic",
            color: theme.gold,
            margin: "34px 0 22px",
            textAlign: "center",
            display: "flex",
          }}
        >
          {couple}
        </div>

        {dateLine ? (
          <div
            style={{
              fontSize: 28,
              letterSpacing: 5,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {dateLine}
          </div>
        ) : null}

        {seats > 0 ? (
          <div
            style={{
              marginTop: 30,
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: theme.sage,
              display: "flex",
            }}
          >
            Admits {seats}
          </div>
        ) : null}
      </div>
    ),
    size,
  );
}
