import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getBusinessesByTown, getLocationContent, getLocationPath, getLocationTowns, getTownSlug } from "./locations";
import { normalizeBusiness, type AirtableRecord } from "./airtable";

const records: AirtableRecord[] = [
  {
    id: "rec_bedok",
    fields: {
      Name: "Bedok Bright Cleaning",
      Slug: "bedok-bright-cleaning",
      Town: "Bedok",
      Services: ["Home Cleaning", "Office Cleaning"]
    }
  },
  {
    id: "rec_tampines",
    fields: {
      Name: "Tampines Tidy Team",
      Slug: "tampines-tidy-team",
      Town: "Tampines",
      Services: ["Spring Cleaning"]
    }
  },
  {
    id: "rec_bedok_deep",
    fields: {
      Name: "East Coast Deep Clean",
      Slug: "east-coast-deep-clean",
      Town: "Bedok",
      Services: ["Deep Cleaning"]
    }
  },
  {
    id: "rec_missing_town",
    fields: {
      Name: "No Town Cleaner",
      Slug: "no-town-cleaner",
      Services: ["General Cleaning"]
    }
  }
];

const businesses = records.map(normalizeBusiness);
const locationPageSource = readFileSync(
  fileURLToPath(new URL("../pages/locations/[town].astro", import.meta.url)),
  "utf8"
);
const locationsIndexSource = readFileSync(
  fileURLToPath(new URL("../pages/locations/index.astro", import.meta.url)),
  "utf8"
);
const sitemapSource = readFileSync(fileURLToPath(new URL("../pages/sitemap.xml.ts", import.meta.url)), "utf8");
const homePageSource = readFileSync(fileURLToPath(new URL("../pages/index.astro", import.meta.url)), "utf8");

describe("location helpers", () => {
  it("creates stable town slugs and location paths", () => {
    expect(getTownSlug("Ang Mo Kio")).toBe("ang-mo-kio");
    expect(getTownSlug("Punggol Digital District")).toBe("punggol-digital-district");
    expect(getLocationPath("Bukit Timah")).toBe("/locations/bukit-timah");
  });

  it("filters businesses for a town case-insensitively", () => {
    expect(getBusinessesByTown(businesses, "bedok").map((business) => business.name)).toEqual([
      "Bedok Bright Cleaning",
      "East Coast Deep Clean"
    ]);
  });

  it("returns location towns without the missing-town Singapore fallback", () => {
    expect(getLocationTowns(businesses)).toEqual(["Bedok", "Tampines"]);
  });

  it("uses curated copy before fallback copy", () => {
    const content = getLocationContent("Bedok", getBusinessesByTown(businesses, "Bedok"));

    expect(content.intro).toContain("home cleaning services in Bedok");
    expect(content.intro).toContain("East-side");
    expect(content.residential).toContain("Bedok");
  });

  it("generates town-specific fallback copy for uncatalogued towns", () => {
    const content = getLocationContent("Test Town", [
      {
        ...businesses[0],
        town: "Test Town",
        name: "Alpha Clean",
        categories: ["Move Out Cleaning"]
      }
    ]);

    expect(content.intro).toContain("home cleaning services in Test Town");
    expect(content.intro).toContain("Alpha Clean");
    expect(content.residential).toContain("Move Out Cleaning");
    expect(content.commercial).toContain("Test Town");
    expect(content.companies).toContain("1 listed cleaning company");
  });
});

describe("location pages", () => {
  it("renders the required location headings and shared Formspark quote form", () => {
    expect(locationPageSource).toContain("Home Cleaning Services in {town}");
    expect(locationPageSource).toContain("Residential Cleaning Services in {town}");
    expect(locationPageSource).toContain("Commercial Cleaning Services in {town}");
    expect(locationPageSource).toContain("Cleaning Companies in {town}");
    expect(locationPageSource).toContain('import QuoteForm from "../../components/QuoteForm.astro"');
    expect(locationPageSource).toContain("<QuoteForm");
    expect(locationPageSource).toContain("Request a cleaning quote in ${town}");
    expect(locationPageSource).not.toContain("formAction=");
  });

  it("places the quote form before the cleaning companies section", () => {
    const quoteFormIndex = locationPageSource.indexOf("<QuoteForm");
    const companiesIndex = locationPageSource.indexOf("Cleaning Companies in {town}");

    expect(quoteFormIndex).toBeGreaterThan(-1);
    expect(companiesIndex).toBeGreaterThan(-1);
    expect(quoteFormIndex).toBeLessThan(companiesIndex);
  });

  it("links location routes from the index, home page, and sitemap", () => {
    expect(locationsIndexSource).toContain('title="Locations | Home Cleaning Services Singapore"');
    expect(locationsIndexSource).toContain("getLocationPath(town)");
    expect(homePageSource).toContain("getLocationPath(town)");
    expect(homePageSource).not.toContain('/companies?town=${encodeURIComponent(town)}');
    expect(sitemapSource).toContain('"/locations"');
    expect(sitemapSource).toContain("getLocationPath");
  });
});
