import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const companyDetailsSource = readFileSync(fileURLToPath(new URL("./CompanyDetails.astro", import.meta.url)), "utf8");

describe("company details", () => {
  it("renders service copy from the normalized Airtable services list", () => {
    expect(companyDetailsSource).toContain("serviceList");
    expect(companyDetailsSource).toContain("servicesDescription");
    expect(companyDetailsSource).toContain("Services available from");
    expect(companyDetailsSource).not.toContain("is listed for");
  });
});
