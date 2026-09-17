# Homepage Why Choose Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage cleaning-scopes introduction with the approved left-aligned "Why Choose Home Cleaning Services?" feature section.

**Architecture:** Keep the content inline in the Astro homepage because it is unique, static homepage copy. Use the existing Tailwind tokens and `@lucide/astro` dependency, with an open responsive grid rather than card containers.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, Vitest, Lucide Astro

---

## Task 1: Replace the homepage section

- [x] Add a source-level regression test in `src/components/HomePage.test.ts` for the heading, four benefits, responsive four-column layout, Lucide icons, and removal of the old section.
- [x] Run `npm test -- src/components/HomePage.test.ts` and confirm the new test fails.
- [x] Update `src/pages/index.astro` with the approved left-aligned section and exact supplied copy.
- [x] Run `npm test -- src/components/HomePage.test.ts` and confirm it passes.

## Task 2: Verify and ship

- [x] Run `npm test`.
- [x] Run `npm run build`.
- [x] Inspect the rendered homepage at desktop and mobile widths against the supplied reference image.
- [x] Record the visual comparison in `design-qa.md` with `final result: passed`.
- [ ] Commit only the files for this change and push `main`.
