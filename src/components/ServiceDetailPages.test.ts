import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const residentialDetailSource = readFileSync(
  fileURLToPath(new URL("../pages/residential/[slug].astro", import.meta.url)),
  "utf8"
);
const commercialDetailSource = readFileSync(
  fileURLToPath(new URL("../pages/commercial/[slug].astro", import.meta.url)),
  "utf8"
);

describe("service detail pages", () => {
  it("renders a prefilled quote form in residential service heroes", () => {
    expect(residentialDetailSource).toContain('import QuoteForm from "../../components/QuoteForm.astro";');
    expect(residentialDetailSource).toContain("<QuoteForm");
    expect(residentialDetailSource).toContain('selectedCustomerType="Home"');
    expect(residentialDetailSource).toContain("selectedService={service.name}");
  });

  it("renders a prefilled quote form in commercial service heroes", () => {
    expect(commercialDetailSource).toContain('import QuoteForm from "../../components/QuoteForm.astro";');
    expect(commercialDetailSource).toContain("<QuoteForm");
    expect(commercialDetailSource).toContain('selectedCustomerType="Business"');
    expect(commercialDetailSource).toContain("selectedService={service.name}");
  });
});
