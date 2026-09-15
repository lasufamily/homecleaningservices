import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const companyPageSource = readFileSync(fileURLToPath(new URL("../pages/companies/[slug].astro", import.meta.url)), "utf8");

describe("company page", () => {
  it("shows the shared quote form after services and before related listings", () => {
    expect(companyPageSource).toContain('import QuoteForm from "../../components/QuoteForm.astro"');
    expect(companyPageSource).toContain('title="Get a Free Quote"');

    const servicesIndex = companyPageSource.indexOf("<CompanyDetails");
    const quoteFormIndex = companyPageSource.indexOf("<QuoteForm");
    const relatedCompaniesIndex = companyPageSource.indexOf(">More services to compare</h2>");

    expect(servicesIndex).toBeGreaterThan(-1);
    expect(quoteFormIndex).toBeGreaterThan(servicesIndex);
    expect(relatedCompaniesIndex).toBeGreaterThan(quoteFormIndex);
  });
});
