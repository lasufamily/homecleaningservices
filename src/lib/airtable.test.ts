import { describe, expect, it, vi } from "vitest";
import {
  filterBusinesses,
  getCategories,
  getInitials,
  loadBusinessesFromAirtable,
  getTowns,
  normalizeBusiness,
  sortBusinesses,
  type AirtableRecord
} from "./airtable";

const records: AirtableRecord[] = [
  {
    id: "rec_1",
    fields: {
      Name: "Pearl Clean Co",
      Town: "Tampines",
      Category: "Regular Home Cleaning",
      Address: "12 Tampines Central",
      Phone: "+65 6123 4567"
    }
  },
  {
    id: "rec_2",
    fields: {
      Name: "Bright Nest",
      Slug: "bright-nest",
      Town: "Bedok",
      Category: ["Deep Cleaning", "Move In Cleaning"],
      "Street Name": "Bedok North Street 3"
    }
  }
];

describe("airtable business helpers", () => {
  it("leaves the slug empty when Airtable Slug is missing", () => {
    const business = normalizeBusiness(records[0]);

    expect(business.slug).toBe("");
  });

  it("normalizes optional string and array fields", () => {
    const business = normalizeBusiness(records[1]);

    expect(business.slug).toBe("bright-nest");
    expect(business.categories).toEqual(["Deep Cleaning", "Move In Cleaning"]);
    expect(business.displayAddress).toBe("Bedok North Street 3");
  });

  it("uses the live Services field when Category is not present", () => {
    const business = normalizeBusiness({
      id: "rec_services",
      fields: {
        Name: "Live Cleaner",
        Services: "Deep Cleaning, Weekly Cleaning"
      }
    });

    expect(business.categories).toEqual(["Deep Cleaning", "Weekly Cleaning"]);
  });

  it("filters businesses by town and category", () => {
    const businesses = records.map(normalizeBusiness);

    expect(filterBusinesses(businesses, { town: "bedok" })).toHaveLength(1);
    expect(filterBusinesses(businesses, { category: "deep cleaning" })[0].name).toBe("Bright Nest");
  });

  it("returns normalized town and category lists", () => {
    const businesses = records.map(normalizeBusiness);

    expect(getTowns(businesses)).toEqual(["Bedok", "Tampines"]);
    expect(getCategories(businesses)).toEqual(["Deep Cleaning", "Move In Cleaning", "Regular Home Cleaning"]);
  });

  it("sorts by name and town", () => {
    const businesses = records.map(normalizeBusiness);

    expect(sortBusinesses(businesses, "name")[0].name).toBe("Bright Nest");
    expect(sortBusinesses(businesses, "town")[0].town).toBe("Bedok");
  });

  it("creates generic company initials", () => {
    expect(getInitials("Pearl Clean Co")).toBe("PC");
    expect(getInitials("Bright")).toBe("B");
    expect(getInitials("  ")).toBe("HC");
  });

  it("requires Airtable credentials for build data", async () => {
    await expect(
      loadBusinessesFromAirtable({ apiKey: "", baseId: "", tableName: "Businesses" }, vi.fn())
    ).rejects.toThrow("AIRTABLE_API_KEY and AIRTABLE_BASE_ID are required");
  });

  it("throws when Airtable cannot be reached successfully", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 403,
      text: async () => "Forbidden"
    });

    await expect(
      loadBusinessesFromAirtable({ apiKey: "pat_test", baseId: "app_test", tableName: "Businesses" }, fetchMock)
    ).rejects.toThrow("Airtable request failed with 403");
  });

  it("loads and normalizes Airtable pages with slugs", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ records: [records[0]], offset: "next-page" })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ records: [records[1]] })
      });

    const businesses = await loadBusinessesFromAirtable(
      { apiKey: "pat_test", baseId: "app_test", tableName: "Businesses" },
      fetchMock
    );

    expect(businesses.map((business) => business.name)).toEqual(["Bright Nest"]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1][0].toString()).toContain("offset=next-page");
  });

  it("only loads businesses with Airtable-backed slugs", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ records })
    });

    const businesses = await loadBusinessesFromAirtable(
      { apiKey: "pat_test", baseId: "app_test", tableName: "Businesses" },
      fetchMock
    );

    expect(businesses.map((business) => business.slug)).toEqual(["bright-nest"]);
  });
});
