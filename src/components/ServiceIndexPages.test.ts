import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const residentialPageSource = readFileSync(
  fileURLToPath(new URL("../pages/residential/index.astro", import.meta.url)),
  "utf8"
);
const commercialPageSource = readFileSync(
  fileURLToPath(new URL("../pages/commercial/index.astro", import.meta.url)),
  "utf8"
);

describe("service index pages", () => {
  it("uses the requested residential page title and H1", () => {
    expect(residentialPageSource).toContain('title="Residential Cleaning Services in Singapore"');
    expect(residentialPageSource).toContain("Residential Cleaning Services in Singapore");
    expect(residentialPageSource).not.toContain("Home cleaning services across Singapore");
  });

  it("uses the requested commercial page title and H1", () => {
    expect(commercialPageSource).toContain('title="Commercial Cleaning Services in Singapore"');
    expect(commercialPageSource).toContain("Commercial Cleaning Services in Singapore");
    expect(commercialPageSource).not.toContain("Business cleaning services across Singapore");
  });
});
