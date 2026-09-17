import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const cleanupScript = join(projectRoot, "scripts/clean-build-output.mjs");
const temporaryDirectories: string[] = [];

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

describe("build output cleanup", () => {
  it("removes Dropbox conflicted copies and preserves generated files", () => {
    const outputDirectory = mkdtempSync(join(tmpdir(), "home-cleaning-build-"));
    temporaryDirectories.push(outputDirectory);
    const companyDirectory = join(outputDirectory, "companies", "example-cleaner");
    mkdirSync(companyDirectory, { recursive: true });

    const generatedPage = join(companyDirectory, "index.html");
    const conflictedPage = join(companyDirectory, "index (Lutfi Anis's conflicted copy 2026-09-17).html");
    const conflictedAsset = join(outputDirectory, "asset (conflicted copy 2026-09-17).css");
    writeFileSync(generatedPage, "canonical");
    writeFileSync(conflictedPage, "duplicate");
    writeFileSync(conflictedAsset, "duplicate");

    const result = spawnSync(process.execPath, [cleanupScript, outputDirectory], {
      cwd: projectRoot,
      encoding: "utf8"
    });

    expect(result.status, result.stderr).toBe(0);
    expect(readFileSync(generatedPage, "utf8")).toBe("canonical");
    expect(existsSync(conflictedPage)).toBe(false);
    expect(existsSync(conflictedAsset)).toBe(false);
    expect(result.stdout).toContain("Removed 2 conflicted build files");
  });

  it("cleans output before Pagefind and direct deployment", () => {
    const packageJson = JSON.parse(readFileSync(join(projectRoot, "package.json"), "utf8"));

    expect(packageJson.scripts.build).toMatch(
      /^astro build && node scripts\/clean-build-output\.mjs dist && pagefind --site dist/
    );
    expect(packageJson.scripts["build:astro"]).toBe(
      "astro build && node scripts/clean-build-output.mjs dist"
    );
    expect(packageJson.scripts["pages:deploy"]).toMatch(
      /^node scripts\/clean-build-output\.mjs dist && wrangler pages deploy dist$/
    );
  });
});
