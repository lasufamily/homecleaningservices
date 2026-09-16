import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  guideHubs,
  guidePages,
  guideContentMap,
  getGuideByPath,
  getGuideChildren,
  getGuideSitemapPaths
} from "./guides";

const publicGuideTemplateSources = [
  "../pages/guides/index.astro",
  "../pages/guides/[hub]/index.astro",
  "../pages/guides/[hub]/[slug].astro"
].map((path) => readFileSync(fileURLToPath(new URL(path, import.meta.url)), "utf8").toLowerCase());

const publicGuideCopy = publicGuideTemplateSources.join("\n");

describe("cleaning knowledge base", () => {
  it("defines the seven required guide hubs under /guides", () => {
    expect(guideHubs.map((hub) => hub.path)).toEqual([
      "/guides/problems/",
      "/guides/surfaces/",
      "/guides/areas/",
      "/guides/items/",
      "/guides/situations/",
      "/guides/methods/",
      "/guides/science/"
    ]);
  });

  it("publishes only pages that pass the reason-to-exist check", () => {
    const publishedEntries = guideContentMap.filter((entry) => entry.status === "New" || entry.status === "Existing");

    expect(publishedEntries.length).toBeGreaterThanOrEqual(12);
    expect(publishedEntries.every((entry) => entry.reasonToExist.length > 30)).toBe(true);
    expect(guideContentMap.some((entry) => entry.status === "Reject")).toBe(true);
  });

  it("keeps every published guide under the /guides/ URL architecture", () => {
    for (const page of guidePages) {
      expect(page.path).toMatch(/^\/guides\/(problems|surfaces|areas|items|situations|methods|science)\//);
      expect(page.path).toMatch(/\/$/);
      expect(page.path).not.toMatch(/[A-Z_]/);
      expect(page.title.toLowerCase()).toContain(page.mainKeyword.toLowerCase());
      expect(page.h1.toLowerCase()).toContain(page.mainKeyword.toLowerCase());
      expect(page.intro.toLowerCase()).toContain(page.mainKeyword.toLowerCase());
    }
  });

  it("finds hub children and sitemap paths for static generation", () => {
    expect(getGuideChildren("surfaces").map((page) => page.slug)).toContain("marble-cleaning");
    expect(getGuideByPath("/guides/items/sofa-cleaning/")?.mainKeyword).toBe("sofa cleaning");
    expect(getGuideSitemapPaths()).toContain("/guides/science/cleaning-ph");
  });

  it("keeps internal editorial language out of public guide templates", () => {
    const bannedPublicPhrases = [
      "page ownership",
      "primary intent",
      "why this page exists",
      "currently have enough distinct intent",
      "stand alone",
      "right owner",
      "reason to exist",
      "content map"
    ];

    for (const phrase of bannedPublicPhrases) {
      expect(publicGuideCopy).not.toContain(phrase);
    }

    expect(publicGuideCopy).not.toContain("guide.primaryintent");
    expect(publicGuideCopy).not.toContain("guide.reasontoexist");
  });
});
