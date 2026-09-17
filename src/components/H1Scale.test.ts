import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = fileURLToPath(new URL("../", import.meta.url));
const homepagePath = join(srcDir, "pages/index.astro");

function astroFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? astroFiles(path) : path.endsWith(".astro") ? [path] : [];
  });
}

describe("H1 scale", () => {
  it("keeps non-homepage H1 headings at the homepage font size", () => {
    const oversizedHeadings = astroFiles(srcDir)
      .filter((path) => path !== homepagePath)
      .flatMap((path) => {
        const source = readFileSync(path, "utf8");
        const h1Classes = [...source.matchAll(/<h1[^>]*class="([^"]+)"/g)].map((match) => match[1]);

        return h1Classes
          .filter((className) => /\btext-6xl\b|\bmd:text-8xl\b/.test(className))
          .map((className) => `${relative(srcDir, path)}: ${className}`);
      });

    expect(oversizedHeadings).toEqual([]);
  });
});
