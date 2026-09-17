import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(fileURLToPath(new URL("../pages/index.astro", import.meta.url)), "utf8");

describe("home page", () => {
  it("uses the free quote page title", () => {
    expect(homePageSource).toContain('title="Home Cleaning Services Singapore | Free Quote"');
  });

  it("uses the dedicated home page hero image", () => {
    expect(homePageSource).toContain('src="/images/Home-Cleaning-Services-Singapore-Hero-1.png"');
    expect(homePageSource).toContain('alt="Home Cleaning Services Singapore"');
  });

  it("uses the requested hero heading copy", () => {
    expect(homePageSource).toContain("Home Cleaning Services in Singapore.");
    expect(homePageSource).toContain('class="serif text-5xl font-semibold leading-[0.9] text-white md:text-7xl"');
    expect(homePageSource).toContain("Home Cleaning Services Singapore matches you with trusted experts in home cleaning.");
    expect(homePageSource).not.toContain(">Professional cleaning</p>");
    expect(homePageSource).not.toContain("Singapore home cleaning company");
    expect(homePageSource).not.toContain("Home cleaning services in Singapore");
    expect(homePageSource).not.toContain("Get a clear quote for regular housekeeping");
  });

  it("includes the quote form in the hero", () => {
    expect(homePageSource).toContain("<QuoteForm");
    expect(homePageSource).toContain('formAction="https://submit-form.com/TmT9DZNtR"');
    expect(homePageSource).not.toContain('title="Get your free quote"');
    expect(homePageSource).not.toContain('submitLabel="Get my quote"');
  });

  it("links service content through the residential route family", () => {
    expect(homePageSource).toContain('href="/residential"');
    expect(homePageSource).toContain("residentialServices.slice(0, 6)");
    expect(homePageSource).not.toContain('href="/services"');
    expect(homePageSource).not.toContain("/services/${service.slug}");
  });
});
