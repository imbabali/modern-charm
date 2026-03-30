import { describe, it, expect } from "vitest";
import {
  portfolioEvents,
  getEventBySlug,
  getEventsByCategory,
  categoryLabels,
} from "@/data/portfolio-events";

describe("portfolio-events data", () => {
  describe("getEventBySlug", () => {
    it("returns the correct event for a valid slug", () => {
      const event = getEventBySlug("psfu-business-summit");
      expect(event).toBeDefined();
      expect(event!.title).toBe("PSFU Business Summit");
      expect(event!.category).toBe("planning");
    });

    it("returns undefined for an invalid slug", () => {
      const event = getEventBySlug("nonexistent-event");
      expect(event).toBeUndefined();
    });
  });

  describe("getEventsByCategory", () => {
    it('returns only planning events for category "planning"', () => {
      const events = getEventsByCategory("planning");
      expect(events.length).toBeGreaterThan(0);
      events.forEach((event) => {
        expect(event.category).toBe("planning");
      });
    });

    it('returns only styling events for category "styling"', () => {
      const events = getEventsByCategory("styling");
      expect(events.length).toBeGreaterThan(0);
      events.forEach((event) => {
        expect(event.category).toBe("styling");
      });
    });

    it('returns all events for category "all"', () => {
      const events = getEventsByCategory("all");
      expect(events).toHaveLength(portfolioEvents.length);
    });

    it("planning + styling counts equal total", () => {
      const planning = getEventsByCategory("planning");
      const styling = getEventsByCategory("styling");
      expect(planning.length + styling.length).toBe(portfolioEvents.length);
    });
  });

  describe("event data integrity", () => {
    it("all events have required fields", () => {
      portfolioEvents.forEach((event) => {
        expect(event.slug).toBeTruthy();
        expect(event.title).toBeTruthy();
        expect(event.category).toBeTruthy();
        expect(event.description).toBeTruthy();
        expect(event.coverImage).toBeTruthy();
        expect(event.images).toBeDefined();
        expect(event.date).toBeTruthy();
      });
    });

    it("all slugs are unique", () => {
      const slugs = portfolioEvents.map((e) => e.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it("all images arrays are non-empty", () => {
      portfolioEvents.forEach((event) => {
        expect(event.images.length).toBeGreaterThan(0);
      });
    });
  });

  describe("categoryLabels", () => {
    it('has entries for "all", "planning", and "styling"', () => {
      expect(categoryLabels.all).toBe("All Projects");
      expect(categoryLabels.planning).toBe("Event Planning & Coordination");
      expect(categoryLabels.styling).toBe("Event Styling & Decor");
    });
  });
});
