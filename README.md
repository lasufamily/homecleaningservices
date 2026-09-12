# Home Cleaning Services Directory

A production-ready static directory for home cleaning services in Singapore. The site is built with Astro, Tailwind CSS, Airtable, Cloudflare Pages, and Pagefind.

## Pages

- `/` homepage with editorial intro, search, featured companies, towns, and service categories
- `/companies` directory with town filters, service filters, and sorting
- `/companies/[slug]` static company profile pages with details, gallery, related companies, and JSON-LD
- `/search` Pagefind-powered search page

## Airtable Setup

Create or use an Airtable base named `Home Cleaning Services` with a table named `Businesses`.

Expected fields:

- `Name`
- `Slug`
- `Town`
- `Category`
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

`Name` is required for a useful listing. All other fields are optional and hidden cleanly when empty. If `Slug` is missing, the site creates a safe slug from the company name.

## Local Development

Copy `.env.example` to `.env` and add your Airtable values:

```bash
AIRTABLE_API_KEY=pat_your_airtable_token
AIRTABLE_BASE_ID=app_your_base_id
AIRTABLE_TABLE_NAME=Businesses
```

If Airtable is not configured or cannot be reached, the site uses sample listings so it can run locally.

Install dependencies and start the local site:

```bash
npm install
npm run dev
```

Run tests:

```bash
npm test
```

Build the static site and Pagefind search index:

```bash
npm run build
```

## Cloudflare Pages

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22.12.0 or newer
- Production branch: `main`

Add these environment variables in Cloudflare Pages:

- `NODE_VERSION` set to `22.12.0`
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`

`AIRTABLE_TABLE_NAME` is optional when the table is named `Businesses`.

This repo also includes `wrangler.toml` with the Pages project name and build output directory. If you prefer direct uploads from your computer after logging in to Cloudflare, run:

```bash
npm run build
npm run pages:deploy
```

For Git-based deploys, connect the GitHub repository to Cloudflare Pages and Cloudflare will rebuild the site whenever `main` is updated.

## Deploy Hook

To rebuild the static site after Airtable content changes, create a Cloudflare Pages deploy hook from the project settings. You can call that hook manually or from Airtable Automations when records are added or updated.
