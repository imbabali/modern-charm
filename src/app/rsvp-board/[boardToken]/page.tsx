import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBoardByToken } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

/**
 * The host's live RSVP view.
 *
 * Access is the unguessable link itself rather than an account. Hosts are
 * usually two people sharing the duty on their phones, and a password they
 * will lose helps nobody. The link is read-only, carries no guest telephone
 * numbers, and is excluded from indexing.
 */

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "RSVP board",
  robots: { index: false, follow: false },
};

interface BoardPageProps {
  params: Promise<{ boardToken: string }>;
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-accent/30 bg-cream px-4 py-3">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="font-heading text-2xl text-primary">{value}</p>
    </div>
  );
}

export default async function RsvpBoardPage({ params }: BoardPageProps) {
  const { boardToken } = await params;

  if (!invitesConfigured() || !isWellFormedToken(boardToken)) notFound();

  const board = await getBoardByToken(boardToken);
  if (!board) notFound();

  const { event, rows, totals } = board;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-accent-dark">
          RSVP board
        </p>
        <h1 className="mt-2 font-heading text-3xl text-dark sm:text-4xl">
          {event.couple_a_name} &amp; {event.couple_b_name}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {new Date(`${event.event_date}T12:00:00Z`).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          })}
        </p>
      </header>

      <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Invitations" value={totals.invitations} />
        <Stat label="Accepted" value={totals.accepted} />
        <Stat label="Declined" value={totals.declined} />
        <Stat label="Awaiting reply" value={totals.pending} />
        <Stat label="Seats offered" value={totals.seatsOffered} />
        <Stat label="Seats confirmed" value={totals.seatsConfirmed} />
        <Stat label="Checked in" value={totals.seatsCheckedIn} />
      </section>

      {rows.length === 0 ? (
        <p className="rounded-lg border border-dashed border-muted/40 px-4 py-8 text-center text-sm text-muted">
          No guests have been imported yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-cream-dark">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-cream-dark">
              <tr>
                <th className="px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  Guest
                </th>
                <th className="px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  Group
                </th>
                <th className="px-4 py-3 text-right font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  Seats
                </th>
                <th className="px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  Response
                </th>
                <th className="px-4 py-3 text-right font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  Confirmed
                </th>
                <th className="px-4 py-3 text-right font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  In
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.display_name}-${row.seats}`} className="border-t border-cream-dark">
                  <td className="px-4 py-3 text-dark">{row.display_name}</td>
                  <td className="px-4 py-3 text-muted">{row.group_label ?? ""}</td>
                  <td className="px-4 py-3 text-right text-muted">{row.seats}</td>
                  <td className="px-4 py-3">
                    {row.attending === true ? (
                      <span className="text-primary">Accepted</span>
                    ) : row.attending === false ? (
                      <span className="text-muted">Declined</span>
                    ) : (
                      <span className="text-accent-dark">Awaiting</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-dark">
                    {row.seats_confirmed ?? ""}
                  </td>
                  <td className="px-4 py-3 text-right text-dark">
                    {row.checked_in_seats > 0 ? row.checked_in_seats : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
