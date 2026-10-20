import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const companyPageSource = readFileSync(fileURLToPath(new URL("../pages/companies/[slug].astro", import.meta.url)), "utf8");

describe("company page", () => {
  it("shows company details and related listings without a quote form", () => {
    expect(companyPageSource).not.toContain("QuoteForm");

    const servicesIndex = companyPageSource.indexOf("<CompanyDetails");
    const relatedCompaniesIndex = companyPageSource.indexOf(">More services to compare</h2>");

    expect(servicesIndex).toBeGreaterThan(-1);
    expect(relatedCompaniesIndex).toBeGreaterThan(servicesIndex);
  });
});
