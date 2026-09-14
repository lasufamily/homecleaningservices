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
    expect(fieldNames).toEqual(["name", "phone", "email", "service", "message"]);

    for (const name of fieldNames) {
      const fieldPattern = new RegExp(`<(?:input|select|textarea)[^>]*name="${name}"[^>]*required`);
      expect(formSource).toMatch(fieldPattern);
    }

    expect(formSource).toContain('type="submit"');
  });

  it("submits with fetch without reloading the page", () => {
    expect(quoteFormSource).toContain("event.preventDefault()");
    expect(quoteFormSource).toContain("await fetch(action");
    expect(quoteFormSource).toContain('"Content-Type": "application/json"');
    expect(quoteFormSource).toContain("JSON.stringify(Object.fromEntries(new FormData(form)))");
  });

  it("marks every required field label with a red asterisk", () => {
    const fieldLabels = ["Name", "Phone", "Email", "Service", "Message"];

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

  it("does not render helper intro copy or a message placeholder", () => {
    expect(quoteFormSource).not.toContain("Share a few details and we will quote the right cleaning scope for your home.");
    expect(quoteFormSource).not.toContain("Tell us what needs cleaning and we will help scope the job properly.");
    expect(formSource).not.toContain("placeholder=");
  });
});
