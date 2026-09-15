import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const headerSource = readFileSync(fileURLToPath(new URL("./Header.astro", import.meta.url)), "utf8");

describe("Header", () => {
  it("uses the Home Cleaning Services Singapore logo", () => {
    expect(headerSource).toContain('src="/Home-Cleaning-Services-Singapore-Logo.png"');
    expect(headerSource).toContain('alt="Home Cleaning Services Singapore"');
  });

  it("includes mobile drawer navigation with the quote call to action", () => {
    expect(headerSource).toContain('aria-controls="mobile-menu"');
    expect(headerSource).toContain('id="mobile-menu"');
    expect(headerSource).toContain('aria-label="Mobile navigation"');
    expect(headerSource).toContain("Request a quote");
    expect(headerSource).not.toContain(">Menu</p>");
    expect(headerSource).not.toContain("Mail");
  });

  it("links to residential and commercial service sections", () => {
    expect(headerSource).toContain('href="/residential"');
    expect(headerSource).toContain('href="/commercial"');
    expect(headerSource).not.toContain('href="/services"');
  });
});
