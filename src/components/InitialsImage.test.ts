import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const componentSource = readFileSync(fileURLToPath(new URL("./InitialsImage.astro", import.meta.url)), "utf8");

describe("InitialsImage", () => {
  it("uses the shared company listing thumbnail image", () => {
    expect(componentSource).toContain('src="/images/Home-Cleaning-Services-Singapore-Company-Thumbnail.png"');
    expect(componentSource).toContain('alt="Home Cleaning Services Singapore Company"');
    expect(componentSource).not.toContain("{initials}");
    expect(componentSource).not.toContain("getInitials");
  });
});
