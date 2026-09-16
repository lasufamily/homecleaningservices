import { describe, expect, it } from "vitest";
import { faqItems, getFaqBySlug, getFaqSitemapPaths } from "./faq";

describe("FAQ content", () => {
  it("creates five question pages with question-based slugs", () => {
    expect(faqItems).toHaveLength(5);

    for (const item of faqItems) {
      expect(item.question).toMatch(/\?$/);
      expect(item.slug).toBe(item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
      expect(item.answer.length).toBeGreaterThan(40);
      expect(item.answer.length).toBeLessThan(360);
    }
  });

  it("finds FAQ entries and sitemap paths", () => {
    const firstItem = faqItems[0];

    expect(getFaqBySlug(firstItem.slug)?.question).toBe(firstItem.question);
    expect(getFaqSitemapPaths()).toEqual(["/FAQ", ...faqItems.map((item) => `/FAQ/${item.slug}`)]);
  });
});
