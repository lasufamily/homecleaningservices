import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const sourcePathsWithoutSiteSuffix = [
  "../pages/about.astro",
  "../pages/commercial/index.astro",
  "../pages/companies/index.astro",
  "../pages/contact.astro",
  "../pages/guides/index.astro",
  "../pages/index.astro",
  "../pages/nearme/index.astro",
  "../pages/nearme/[town].astro",
  "../pages/privacy.astro",
  "../pages/residential/index.astro",
  "../pages/search.astro",
  "../pages/terms.astro",
  "../lib/services.ts",
  "../lib/guides.ts"
];

const readSource = (path: string) => readFileSync(fileURLToPath(new URL(path, import.meta.url)), "utf8");

describe("page title policy", () => {
  it("does not append site-name title suffixes outside individual company pages", () => {
    for (const path of sourcePathsWithoutSiteSuffix) {
      expect(readSource(path), path).not.toContain("| Home Cleaning Services");
    }
  });

  it("keeps the company profile page title exception", () => {
    expect(readSource("../pages/companies/[slug].astro")).toContain("| Home Cleaning Services Singapore");
  });

  it("documents the title suffix rule for future pages", () => {
    const agentInstructions = readFileSync(fileURLToPath(new URL("../../AGENTS.md", import.meta.url)), "utf8");

    expect(agentInstructions).toContain("Do not append");
    expect(agentInstructions).toContain("| Home Cleaning Services");
    expect(agentInstructions).toContain("individual company");
  });
});
