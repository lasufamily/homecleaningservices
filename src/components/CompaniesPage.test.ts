import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const companiesPageSource = readFileSync(
  fileURLToPath(new URL("../pages/companies/index.astro", import.meta.url)),
  "utf8"
);
const filterBarSource = readFileSync(fileURLToPath(new URL("./FilterBar.astro", import.meta.url)), "utf8");

describe("companies page", () => {
  it("uses the requested Singapore cleaning companies title and H1", () => {
    expect(companiesPageSource).toContain('title="Cleaning Companies in Singapore | Home Cleaning Services Singapore"');
    expect(companiesPageSource).toContain("Cleaning Companies in Singapore");
  });

  it("keeps filtering on the static page with client-side company data hooks", () => {
    expect(companiesPageSource).toContain("data-company-card");
    expect(companiesPageSource).toContain("data-companies-grid");
    expect(companiesPageSource).toContain("data-results-count");
    expect(companiesPageSource).toContain("URLSearchParams");
    expect(companiesPageSource).not.toContain("filterBusinesses(businesses, { town, category, search })");
  });

  it("only offers name sorting in both directions", () => {
    expect(filterBarSource).toContain('value="name"');
    expect(filterBarSource).toContain("Name A to Z");
    expect(filterBarSource).toContain('value="name-desc"');
    expect(filterBarSource).toContain("Name Z to A");
    expect(filterBarSource).not.toContain('value="town"');
  });
});
