import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(fileURLToPath(new URL("../pages/index.astro", import.meta.url)), "utf8");

describe("home page", () => {
  it("uses the dedicated home page hero image", () => {
    expect(homePageSource).toContain('src="/images/Home-Cleaning-Services-Singapore-Hero-1.png"');
    expect(homePageSource).toContain('alt="Home Cleaning Services Singapore"');
  });

  it("includes the quote form in the hero", () => {
    expect(homePageSource).toContain("<QuoteForm");
    expect(homePageSource).toContain('formAction="https://submit-form.com/TmT9DZNtR"');
  });
});
