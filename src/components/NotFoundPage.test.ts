import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const notFoundPagePath = fileURLToPath(new URL("../pages/404.astro", import.meta.url));

describe("404 page", () => {
  it("generates a dedicated not-found document for static hosting", () => {
    expect(existsSync(notFoundPagePath)).toBe(true);

    const source = readFileSync(notFoundPagePath, "utf8");

    expect(source).toContain('<Layout title="Page Not Found"');
    expect(source).toContain("<h1");
    expect(source).toContain("Page not found");
    expect(source).toContain('href="/"');
  });
});
