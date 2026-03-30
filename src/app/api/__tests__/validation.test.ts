import { describe, it, expect } from "vitest";

// Patterns copied from the API route handlers for isolated testing
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;
const ALLOWED_EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Traditional Ceremony",
  "Birthday / Anniversary",
  "Bridal / Baby Shower",
  "Other",
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

describe("API validation patterns", () => {
  describe("EMAIL_REGEX", () => {
    it("matches valid email addresses", () => {
      expect(EMAIL_REGEX.test("user@example.com")).toBe(true);
      expect(EMAIL_REGEX.test("name.surname@domain.co.ug")).toBe(true);
      expect(EMAIL_REGEX.test("info@moderncharmevents.com")).toBe(true);
      expect(EMAIL_REGEX.test("test+label@gmail.com")).toBe(true);
    });

    it("rejects invalid email addresses", () => {
      expect(EMAIL_REGEX.test("")).toBe(false);
      expect(EMAIL_REGEX.test("noatsign.com")).toBe(false);
      expect(EMAIL_REGEX.test("@nodomain")).toBe(false);
      expect(EMAIL_REGEX.test("user @example.com")).toBe(false);
      expect(EMAIL_REGEX.test("user@")).toBe(false);
    });
  });

  describe("PHONE_REGEX", () => {
    it("matches valid phone numbers", () => {
      expect(PHONE_REGEX.test("+256779399409")).toBe(true);
      expect(PHONE_REGEX.test("+256 779 399 409")).toBe(true);
      expect(PHONE_REGEX.test("0779399409")).toBe(true);
      expect(PHONE_REGEX.test("+1 (555) 123-4567")).toBe(true);
      expect(PHONE_REGEX.test("1234567")).toBe(true);
    });

    it("rejects invalid phone numbers", () => {
      expect(PHONE_REGEX.test("")).toBe(false);
      expect(PHONE_REGEX.test("123")).toBe(false);
      expect(PHONE_REGEX.test("abc1234567")).toBe(false);
      expect(PHONE_REGEX.test("++256779399409")).toBe(false);
    });
  });

  describe("ALLOWED_EVENT_TYPES", () => {
    it("contains all expected event types", () => {
      expect(ALLOWED_EVENT_TYPES).toContain("Wedding");
      expect(ALLOWED_EVENT_TYPES).toContain("Corporate Event");
      expect(ALLOWED_EVENT_TYPES).toContain("Traditional Ceremony");
      expect(ALLOWED_EVENT_TYPES).toContain("Birthday / Anniversary");
      expect(ALLOWED_EVENT_TYPES).toContain("Bridal / Baby Shower");
      expect(ALLOWED_EVENT_TYPES).toContain("Other");
    });

    it("has exactly 6 event types", () => {
      expect(ALLOWED_EVENT_TYPES).toHaveLength(6);
    });
  });

  describe("escapeHtml", () => {
    it("escapes ampersands", () => {
      expect(escapeHtml("Tom & Jerry")).toBe("Tom &amp; Jerry");
    });

    it("escapes angle brackets", () => {
      expect(escapeHtml("<script>alert('xss')</script>")).toBe(
        "&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;"
      );
    });

    it("escapes double quotes", () => {
      expect(escapeHtml('He said "hello"')).toBe(
        "He said &quot;hello&quot;"
      );
    });

    it("escapes single quotes", () => {
      expect(escapeHtml("it's")).toBe("it&#39;s");
    });

    it("returns empty string for empty input", () => {
      expect(escapeHtml("")).toBe("");
    });

    it("returns plain text unchanged", () => {
      expect(escapeHtml("Hello World")).toBe("Hello World");
    });
  });
});
