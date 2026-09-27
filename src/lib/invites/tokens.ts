import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Guest, board and scanner links are bearer tokens: holding the URL is the
 * only credential. The database stores a SHA-256 hash, never the token, so a
 * database disclosure cannot be replayed as a working invitation link.
 *
 * Sixteen bytes gives 128 bits of entropy in a 22-character path segment.
 * Guest lists run to a few hundred rows, so the shorter segment is worth more
 * than entropy no attacker could exhaust either way.
 */

const TOKEN_BYTES = 16;

/** A fresh token, URL-safe and free of characters WhatsApp would break across lines. */
export function createToken(): string {
  return randomBytes(TOKEN_BYTES).toString("base64url");
}

/** The stored form of a token. */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/**
 * Tokens arrive from a URL segment, so reject anything that is not the shape
 * we issue before it reaches a query. This keeps malformed input out of the
 * database and makes the lookup a single indexed equality.
 */
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{16,64}$/;

export function isWellFormedToken(token: unknown): token is string {
  return typeof token === "string" && TOKEN_PATTERN.test(token);
}

/** Constant-time comparison for secrets compared in application code. */
export function safeEquals(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
