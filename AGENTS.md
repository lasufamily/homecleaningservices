# AGENTS.md

## Project Overview

This is a production-ready static directory for Singapore home cleaning services.
It is built with Astro, Tailwind CSS, TypeScript, Vitest, Airtable, Pagefind, and
Cloudflare Pages.

Canonical production domain: `https://homecleaningservices.sg`

## Important Paths

- `src/pages/` contains Astro routes.
- `src/pages/companies/[slug].astro` generates static company profile pages from Airtable records.
- `src/pages/services/` renders static service category pages from local service data.
- `src/lib/airtable.ts` owns Airtable fetching, normalization, filtering, sorting, and related-listing logic.
- `src/lib/services.ts` owns local editorial service page content.
- `src/components/` contains reusable Astro UI components.
- `src/layouts/Layout.astro` defines shared document metadata, canonical URLs, JSON-LD injection, header, and footer.
- `src/styles/global.css` contains the Tailwind layer styles and design tokens.
- `README.md` documents setup, Airtable fields, and deployment.

## Commands

- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Run tests: `npm test`
- Build Astro only: `npm run build:astro`
- Build production site and Pagefind index: `npm run build`
- Preview built site: `npm run preview`
- Deploy built output to Cloudflare Pages: `npm run pages:deploy`

Run `npm test` after data-model or filtering changes. Run `npm run build` before
claiming production readiness because it also verifies static rendering and
Pagefind indexing.

## Git Workflow

After completing any requested code change:

- Run the relevant tests or build checks for the change.
- Commit only the files that belong to the completed change.
- Push the commit to `main`.

Do not push unfinished work. If tests or builds fail, do not push; report the
failure instead. If the working tree contains unrelated user changes, leave them
out of the commit unless the user explicitly asks to include them.

## Environment And Data

Builds require Airtable access. Do not add fallback sample data that allows a
production build to pass with missing or rejected Airtable credentials.

Required environment variables:

- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`

Optional environment variable:

- `AIRTABLE_TABLE_NAME`, defaulting to `Businesses`

The current Airtable table may be named `Companies`; set `AIRTABLE_TABLE_NAME`
explicitly when needed.

Expected Airtable fields:

- `Name`
- `Slug`
- `Town`
- `Category` or `Services`
- `Street Name`
- `Address`
- `Opening Hours`
- `Phone`
- `Google Maps URL`
- `Facebook URL`
- `Instagram URL`
- `TikTok URL`
- `Image URL`
- `Gallery Images URL`

`Name` is required for useful listings. Empty optional fields should be hidden
cleanly in the UI. If `Slug` is missing, `src/lib/airtable.ts` derives a safe
slug from the company name.

## Implementation Rules

- Keep the site static. Data is fetched at build time, not in client-side runtime code.
- Preserve the normalized `Business` model in `src/lib/airtable.ts` as the contract between Airtable and pages/components.
- Keep URL state for filters and search shareable with query parameters.
- Preserve SEO basics: descriptive titles, meta descriptions, canonical URLs, sitemap, robots, and JSON-LD where already used.
- For SEO-targeted pages, keep the target keyword present in the URL slug, page title, H1, and first paragraph. If a page title and H1 have already been set, use the same target term in the first paragraph too.
- Do not append `| Home Cleaning Services` or `| Home Cleaning Services Singapore` to page titles. The only exception is individual company profile pages, which may use `Company Name | Home Cleaning Services Singapore`.
- Do not commit secrets. `.env` is local-only; use `.env.example` for placeholders.
- Prefer small, focused components and existing Tailwind tokens/classes over introducing new styling systems.
- For service content, update `src/lib/services.ts`; do not duplicate service definitions in pages.
- For icons, use the existing `@lucide/astro` dependency.
- Avoid unrelated refactors when making content, Airtable, or page changes.

## Design Notes

The visual direction is restrained editorial/professional directory design:
clear navigation, readable copy, practical cards, and accessible controls. Keep
forms, filters, and listing pages efficient to scan. Avoid oversized marketing
sections where the user needs directory functionality.

Do not use eyebrow text, kickers, overlines, or other small decorative labels
above headings. Let H1, H2, H3, and other real headings stand on their own
without extra pre-heading fluff.

## Deployment Notes

Cloudflare Pages should use:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: `22.12.0` or newer
- Production branch: `main`

`wrangler.toml` contains the Pages project name and output directory for direct
deploys.
