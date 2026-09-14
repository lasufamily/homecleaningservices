import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const contactSource = readFileSync(fileURLToPath(new URL("../pages/contact.astro", import.meta.url)), "utf8");

describe("contact page form", () => {
  it("uses the shared quote form and preserves service preselection", () => {
    expect(contactSource).toContain('import QuoteForm from "../components/QuoteForm.astro"');
    expect(contactSource).toContain('const selectedService = Astro.url.searchParams.get("service") ?? ""');
    expect(contactSource).toContain("<QuoteForm selectedService={selectedService} />");
  });
});
