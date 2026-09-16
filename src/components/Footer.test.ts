import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const footerSource = readFileSync(fileURLToPath(new URL("./Footer.astro", import.meta.url)), "utf8");

describe("Footer", () => {
  it("shows the requested public footer sections and links", () => {
    for (const heading of ["Company", "Services", "Resources", "Legal"]) {
      expect(footerSource).toContain(`>${heading}</h2>`);
    }

    for (const href of [
      "/about",
      "/contact",
      "/residential",
      "/commercial",
      "/guides",
      "/faq",
      "/companies",
      "/nearme",
      "/privacy",
      "/terms"
    ]) {
      expect(footerSource).toContain(`href="${href}"`);
    }

    expect(footerSource).not.toContain("Spring Cleaning");
    expect(footerSource).not.toContain("Knowledge Base");
  });
});
