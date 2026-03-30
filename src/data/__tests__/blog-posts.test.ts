import { describe, it, expect } from "vitest";
import { blogPosts } from "@/data/blog-posts";

describe("blog-posts data", () => {
  describe("data integrity", () => {
    it("all posts have required fields", () => {
      blogPosts.forEach((post) => {
        expect(post.title).toBeTruthy();
        expect(post.slug).toBeTruthy();
        expect(post.excerpt).toBeTruthy();
        expect(post.content).toBeTruthy();
        expect(post.category).toBeTruthy();
        expect(post.date).toBeTruthy();
        expect(post.image).toBeTruthy();
        expect(post.heroImages).toBeDefined();
      });
    });

    it("all slugs are unique", () => {
      const slugs = blogPosts.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it("all heroImages arrays have exactly 3 images", () => {
      blogPosts.forEach((post) => {
        expect(post.heroImages).toHaveLength(3);
      });
    });

    it("exactly one post is featured", () => {
      const featured = blogPosts.filter((p) => p.featured === true);
      expect(featured).toHaveLength(1);
    });

    it("content is a non-empty HTML string", () => {
      blogPosts.forEach((post) => {
        expect(post.content.trim().length).toBeGreaterThan(0);
        expect(post.content).toContain("<");
      });
    });
  });
});
