/**
 * Seat arithmetic, kept pure so the rule that protects the headcount can be
 * tested without a database.
 *
 * A guest may bring fewer people than they were offered but never more,
 * whatever the client sends. A decline always confirms zero seats, so a guest
 * who changes from accept to decline releases the seats they had held.
 */
export function clampSeats(params: {
  attending: boolean;
  requested: unknown;
  allowed: number;
}): number {
  if (!params.attending) return 0;

  const requested = Math.trunc(Number(params.requested));
  if (!Number.isFinite(requested) || requested < 1) return 1;

  return Math.min(requested, params.allowed);
}
