# Service Page Quote Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put a prefilled quote form in every individual residential and commercial service page hero.

**Architecture:** Keep the existing individual route templates and reuse `QuoteForm.astro`. Each template passes the current service name and the matching customer type so submissions carry useful context without adding client-side logic.

**Tech Stack:** Astro, TypeScript, Vitest, Tailwind CSS.

---

### Task 1: Add Coverage For Service Hero Forms

**Files:**
- Create: `src/components/ServiceDetailPages.test.ts`
- Read: `src/pages/residential/[slug].astro`
- Read: `src/pages/commercial/[slug].astro`

- [ ] **Step 1: Write the failing test**

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/components/ServiceDetailPages.test.ts`

Expected: FAIL because neither individual service route imports or renders `QuoteForm`.

- [ ] **Step 3: Add the hero forms**

Modify `src/pages/residential/[slug].astro` and `src/pages/commercial/[slug].astro` to import `QuoteForm` and render it in the hero right column with the selected customer type and service.

- [ ] **Step 4: Run the focused test**

Run: `npm test -- src/components/ServiceDetailPages.test.ts`

Expected: PASS.

- [ ] **Step 5: Run full verification**

Run: `npm test`

Run: `npm run build`

Expected: both pass before committing.
