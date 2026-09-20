import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const faqDetailPagePath = fileURLToPath(new URL("../pages/faq/[slug].astro", import.meta.url));

describe("FAQ detail page", () => {
  it("renders the question as the H1 and the answer as plain paragraph text", () => {
    const source = readFileSync(faqDetailPagePath, "utf8");

    expect(source).toContain("<h1");
    expect(source).toContain("{item.question}");
    expect(source).toContain("<p class=\"mt-7 max-w-3xl text-lg leading-8 text-ink/70\">\n        {item.answer}\n      </p>");
    expect(source).not.toContain("<strong>{item.question}</strong>");
  });
});
