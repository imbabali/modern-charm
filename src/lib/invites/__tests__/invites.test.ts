import { describe, expect, it } from "vitest";
import { createToken, hashToken, isWellFormedToken, safeEquals } from "../tokens";
import { resolveTheme, DEFAULT_THEME } from "../types";

describe("invitation tokens", () => {
  it("issues a URL-safe token short enough to survive a WhatsApp message", () => {
    const token = createToken();
    expect(token).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(token).toHaveLength(22);
  });

  it("issues a different token every time", () => {
    const tokens = new Set(Array.from({ length: 500 }, () => createToken()));
    expect(tokens.size).toBe(500);
  });

  it("hashes deterministically so a token can be looked up", () => {
    const token = createToken();
    expect(hashToken(token)).toBe(hashToken(token));
    expect(hashToken(token)).toHaveLength(64);
  });

  it("does not leak the token through its hash", () => {
    const token = createToken();
    expect(hashToken(token)).not.toContain(token);
  });

  it("accepts tokens it issued", () => {
    expect(isWellFormedToken(createToken())).toBe(true);
  });

  it("rejects anything that is not a token before it reaches a query", () => {
    for (const bad of ["", "short", "../../etc/passwd", "a".repeat(200), null, undefined, 42, {}]) {
      expect(isWellFormedToken(bad)).toBe(false);
    }
  });

  it("rejects a token carrying SQL or path characters", () => {
    expect(isWellFormedToken("abcd'; drop table guests;--")).toBe(false);
    expect(isWellFormedToken("abcdefghijklmnop/../x")).toBe(false);
  });

  it("compares secrets without revealing length through early exit", () => {
    const token = createToken();
    expect(safeEquals(token, token)).toBe(true);
    expect(safeEquals(token, createToken())).toBe(false);
    expect(safeEquals(token, token.slice(0, 10))).toBe(false);
  });
});

describe("event theme", () => {
  it("falls back to the default palette when an event sets nothing", () => {
    expect(resolveTheme(null)).toEqual(DEFAULT_THEME);
    expect(resolveTheme(undefined)).toEqual(DEFAULT_THEME);
    expect(resolveTheme({})).toEqual(DEFAULT_THEME);
  });

  it("lets an event override one colour without losing the rest", () => {
    const theme = resolveTheme({ gold: "#FFD700" });
    expect(theme.gold).toBe("#FFD700");
    expect(theme.paper).toBe(DEFAULT_THEME.paper);
  });
});
