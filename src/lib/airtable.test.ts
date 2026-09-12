import { describe, expect, it } from "vitest";
import {
  filterBusinesses,
  getCategories,
  getInitials,
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
  it("creates a safe slug when Airtable Slug is missing", () => {
    const business = normalizeBusiness(records[0]);

    expect(business.slug).toBe("pearl-clean-co");
  });

  it("normalizes optional string and array fields", () => {
    const business = normalizeBusiness(records[1]);

    expect(business.slug).toBe("bright-nest");
    expect(business.categories).toEqual(["Deep Cleaning", "Move In Cleaning"]);
    expect(business.displayAddress).toBe("Bedok North Street 3");
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
});
