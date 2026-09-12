# Home Cleaning Directory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Astro static website for a Singapore home cleaning services directory powered by Airtable.

**Architecture:** Airtable records are fetched at build time through a reusable library, normalized into a stable `Business` model, and rendered into static Astro routes. Directory filters use query parameters for town and category, while Pagefind indexes the final `dist` output for site search.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, Vitest, Pagefind, Airtable REST API, Cloudflare Pages.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`
- Create: `src/styles/global.css`
- Create: `src/env.d.ts`

- [x] **Step 1: Define Astro, Tailwind, test, and Pagefind scripts**

Create a standard Astro static project with scripts for development, testing, build, and Pagefind indexing.

- [x] **Step 2: Add shared global styling**

Define the premium editorial theme, typography, spacing rhythm, and responsive base styles.

### Task 2: Data Model and Tests

**Files:**
- Create: `src/lib/airtable.ts`
- Create: `src/lib/airtable.test.ts`

- [x] **Step 1: Write tests first**

Cover slug fallback, optional fields, town/category normalization, query filters, and sorting.

- [x] **Step 2: Implement Airtable data helpers**

Fetch Airtable records when credentials are present, use mock records locally, and normalize every record into the site model.

### Task 3: Reusable Interface Components

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/SearchBox.astro`
- Create: `src/components/ListingCard.astro`
- Create: `src/components/FilterBar.astro`
- Create: `src/components/CompanyHero.astro`
- Create: `src/components/CompanyDetails.astro`
- Create: `src/components/SocialLinks.astro`

- [x] **Step 1: Build semantic, reusable components**

Use accessible labels, clean optional rendering, restrained icons, and consistent editorial card styles.

### Task 4: Pages and Routes

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/companies/index.astro`
- Create: `src/pages/companies/[slug].astro`
- Create: `src/pages/search.astro`

- [x] **Step 1: Build homepage**

Include hero, search, intro, featured companies, town/category browse links, and directory CTA.

- [x] **Step 2: Build directory page**

Render all companies, query-param filters, sorting, and listing cards.

- [x] **Step 3: Build company detail pages**

Generate static pages from records with details, gallery, related companies, metadata, and JSON-LD.

- [x] **Step 4: Build search page**

Wire Pagefind UI after static indexing and provide a clean no-indexing fallback message in development.

### Task 5: Documentation and Verification

**Files:**
- Create: `README.md`
- Create: `.env.example`

- [x] **Step 1: Document setup**

Explain Airtable fields, local development, Cloudflare Pages build settings, environment variables, and optional deploy hooks.

- [x] **Step 2: Verify**

Run tests and production build. Fix failures and rerun until green.
