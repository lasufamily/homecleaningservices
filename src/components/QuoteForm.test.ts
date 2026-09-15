import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const quoteFormSource = readFileSync(fileURLToPath(new URL("./QuoteForm.astro", import.meta.url)), "utf8");
const formSource = quoteFormSource.slice(quoteFormSource.indexOf("<form"), quoteFormSource.indexOf("</form>"));

describe("quote form", () => {
  it("posts to Formspark with the requested required fields only", () => {
    expect(quoteFormSource).toContain('formAction = "https://submit-form.com/TmT9DZNtR"');
    expect(formSource).toContain("action={formAction}");

    const fieldNames = Array.from(formSource.matchAll(/\sname="([^"]+)"/g), ([, name]) => name);
    expect(fieldNames).toEqual(["source_path", "name", "phone", "email", "customer_type", "customer_type", "service", "message"]);

    for (const name of ["name", "phone", "email", "service", "message"]) {
      const fieldPattern = new RegExp(`<(?:input|select|textarea)[^>]*name="${name}"[^>]*required`);
      expect(formSource).toMatch(fieldPattern);
    }

    expect(formSource).toContain('name="customer_type"');
    expect(formSource).toContain('value="Home"');
    expect(formSource).toContain('value="Business"');

    expect(formSource).toContain('type="submit"');
  });

  it("uses the sitewide free quote header and submit button text", () => {
    expect(quoteFormSource).toContain('title = "Get a Free Quote"');
    expect(quoteFormSource).toContain('submitLabel = "Get Quote"');
    expect(quoteFormSource).not.toContain('title = "Get your cleaning quote"');
    expect(quoteFormSource).not.toContain('submitLabel = "Send enquiry"');
  });

  it("includes the current page path as a hidden Formspark field", () => {
    expect(quoteFormSource).toContain("const sourcePath = Astro.url.pathname;");
    expect(formSource).toContain('<input type="hidden" name="source_path" value={sourcePath} />');
    expect(formSource).not.toContain("Astro.url.href");
    expect(formSource).not.toContain("source_url");
  });

  it("submits with fetch without reloading the page", () => {
    expect(quoteFormSource).toContain("event.preventDefault()");
    expect(quoteFormSource).toContain("await fetch(action");
    expect(quoteFormSource).toContain('"Content-Type": "application/json"');
    expect(quoteFormSource).toContain("JSON.stringify(Object.fromEntries(new FormData(form)))");
  });

  it("marks every required field label with a red asterisk", () => {
    const fieldLabels = ["Name", "Phone", "Email", "Customer type", "Service", "Message"];

    for (const label of fieldLabels) {
      expect(formSource).toMatch(
        new RegExp(`<span>${label} <span class="text-red-600" aria-hidden="true">\\*</span></span>`)
      );
    }
  });

  it("uses the requested success message", () => {
    expect(quoteFormSource).toContain("Thank you. Your request for quote has been sent.");
    expect(quoteFormSource).not.toContain("Thanks. Your enquiry has been sent.");
  });

  it("defaults to Home and renders residential and commercial service options", () => {
    expect(quoteFormSource).toContain('selectedCustomerType = "Home"');
    expect(formSource).toContain('checked={selectedCustomerType !== "Business"}');
    expect(formSource).toContain('data-service-group="Home"');
    expect(formSource).toContain('data-service-group="Business"');
    expect(formSource).toContain("residentialServices.map");
    expect(formSource).toContain("commercialServices.map");
  });

  it("switches service options when the customer type radio changes", () => {
    expect(quoteFormSource).toContain('form.querySelectorAll(\'input[name="customer_type"]\')');
    expect(quoteFormSource).toContain('option.dataset.serviceGroup === selectedCustomerType');
    expect(quoteFormSource).toContain("serviceSelect.value = \"\"");
  });

  it("does not render helper intro copy or a message placeholder", () => {
    expect(quoteFormSource).not.toContain("Share a few details and we will quote the right cleaning scope for your home.");
    expect(quoteFormSource).not.toContain("Tell us what needs cleaning and we will help scope the job properly.");
    expect(formSource).not.toContain("placeholder=");
  });
});
