import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const aboutSource = readFileSync(fileURLToPath(new URL("../pages/about.astro", import.meta.url)), "utf8");

const customerFacingSources = [
  "../pages/about.astro",
  "../pages/index.astro",
  "../pages/search.astro",
  "../pages/companies/index.astro",
  "../pages/nearme/index.astro",
  "../pages/nearme/[town].astro",
  "../pages/terms.astro",
  "./Footer.astro",
  "./Header.astro",
  "./SearchBox.astro"
].map((path) => readFileSync(fileURLToPath(new URL(path, import.meta.url)), "utf8"));

describe("customer-facing copy", () => {
  it("uses the requested about H1", () => {
    expect(aboutSource).toContain("About Us");
    expect(aboutSource).not.toContain("Cleaning help when the house is starting to feel heavy.");
  });

  it("does not expose internal directory or route phrasing in customer pages", () => {
    const combinedSource = customerFacingSources.join("\n");

    for (const phrase of [
      "Directory still available",
      "The `/companies` directory remains available",
      "The company directory is still here",
      "Browse every company currently listed",
      "company listings",
      "Directory listings remain available",
      "Use the directory page",
      "The `/companies` section is a directory"
    ]) {
      expect(combinedSource).not.toContain(phrase);
    }
  });
});
