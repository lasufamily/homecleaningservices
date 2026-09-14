import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const contactSource = readFileSync(fileURLToPath(new URL("../pages/contact.astro", import.meta.url)), "utf8");
const formSource = contactSource.slice(contactSource.indexOf("<form"), contactSource.indexOf("</form>"));

describe("contact page form", () => {
  it("posts to Formspark with the requested required fields only", () => {
    expect(formSource).toContain('action="https://submit-form.com/TmT9DZNtR"');

    const fieldNames = Array.from(formSource.matchAll(/\sname="([^"]+)"/g), ([, name]) => name);
    expect(fieldNames).toEqual(["name", "phone", "email", "service", "message"]);

    for (const name of fieldNames) {
      const fieldPattern = new RegExp(`<(?:input|select|textarea)[^>]*name="${name}"[^>]*required`);
      expect(formSource).toMatch(fieldPattern);
    }

    expect(formSource).toContain('type="submit"');
  });

  it("submits with fetch without reloading the page", () => {
    expect(contactSource).toContain("event.preventDefault()");
    expect(contactSource).toContain("await fetch(action");
    expect(contactSource).toContain('"Content-Type": "application/json"');
    expect(contactSource).toContain("JSON.stringify(Object.fromEntries(new FormData(form)))");
  });
});
