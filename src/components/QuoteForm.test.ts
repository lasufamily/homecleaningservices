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
    expect(fieldNames).toEqual(["_source_path", "name", "phone", "email", "customer_type", "customer_type", "service", "message"]);

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

  it("includes the current page path as hidden Formspark metadata", () => {
    expect(quoteFormSource).toContain("const sourcePath = Astro.url.pathname;");
    expect(formSource).toContain('<input type="hidden" name="_source_path" value={sourcePath} />');
    expect(formSource).not.toContain('name="source_path"');
    expect(formSource).not.toContain("Astro.url.href");
    expect(formSource).not.toContain("source_url");
  });

  it("keeps fields inside the form container at responsive widths", () => {
    expect(quoteFormSource).toContain('class="w-full max-w-full border border-border bg-linen p-6 shadow-sm md:p-8"');
    expect(formSource).toContain('class="grid min-w-0 gap-5"');
    expect(formSource).toContain('class="grid min-w-0 gap-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"');
    expect(formSource).toContain("w-full min-w-0");
    expect(formSource).not.toContain("md:grid-cols-2");
  });

  it("requires an 8-digit Singapore phone number", () => {
    const phoneFieldPattern =
      /<input[^>]*name="phone"[^>]*type="tel"[^>]*inputmode="numeric"[^>]*pattern="\[689\]\[0-9\]\{7\}"[^>]*minlength="8"[^>]*maxlength="8"[^>]*autocomplete="tel"[^>]*\/>/;

    expect(formSource).toMatch(phoneFieldPattern);
  });

  it("submits with fetch without reloading the page", () => {
    expect(quoteFormSource).toContain("event.preventDefault()");
    expect(quoteFormSource).toContain("await fetch(action");
    expect(quoteFormSource).toContain('"Content-Type": "application/json"');
    expect(quoteFormSource).toContain("JSON.stringify(Object.fromEntries(new FormData(form)))");
  });

  it("marks every required field label with a red asterisk", () => {
    const fieldLabels = ["Name", "Phone", "Email", "Type", "Service", "Message"];

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
    expect(formSource).toContain('class="mt-2 flex flex-wrap gap-6"');
    expect(formSource).not.toContain("focus-within:focus-ring flex items-center gap-3 border border-border bg-white px-4 py-3 font-normal text-ink");
    expect(formSource).toContain('data-service-group="Home"');
    expect(formSource).toContain('data-service-group="Business"');
    expect(formSource).toContain("residentialServices.map");
    expect(formSource).toContain("commercialServices.map");
  });

  it("switches service options when the customer type radio changes", () => {
    expect(quoteFormSource).toContain('form.querySelectorAll(\'input[name="customer_type"]\')');
    expect(quoteFormSource).toContain("const serviceOptions =");
    expect(quoteFormSource).toContain("serviceSelect.replaceChildren");
    expect(quoteFormSource).toContain("option.cloneNode(true)");
    expect(quoteFormSource).toContain("serviceSelect.value = \"\"");
    expect(quoteFormSource).not.toContain("option.hidden =");
    expect(quoteFormSource).not.toContain("option.disabled =");
  });

  it("does not render helper intro copy or a message placeholder", () => {
    expect(quoteFormSource).not.toContain("Share a few details and we will quote the right cleaning scope for your home.");
    expect(quoteFormSource).not.toContain("Tell us what needs cleaning and we will help scope the job properly.");
    expect(formSource).not.toContain("placeholder=");
  });
});
