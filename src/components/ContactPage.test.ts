import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const contactSource = readFileSync(fileURLToPath(new URL("../pages/contact.astro", import.meta.url)), "utf8");

describe("contact page form", () => {
  it("uses the requested contact H1", () => {
    expect(contactSource).toContain("Contact Us");
    expect(contactSource).not.toContain("Request a cleaning quote");
  });

  it("uses the shared quote form and preserves service preselection", () => {
    expect(contactSource).toContain('import QuoteForm from "../components/QuoteForm.astro"');
    expect(contactSource).toContain('const selectedService = Astro.url.searchParams.get("service") ?? ""');
    expect(contactSource).toContain('const selectedCustomerType = Astro.url.searchParams.get("customer_type") === "Business" ? "Business" : "Home";');
    expect(contactSource).toContain("<QuoteForm selectedService={selectedService} selectedCustomerType={selectedCustomerType} />");
  });
});
