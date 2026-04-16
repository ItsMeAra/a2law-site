# Willoughby & Associates — Astro site

Modern rebuild of the firm’s marketing site using **Astro**, **Tailwind CSS** (with legacy stylesheet preserved for visual parity), and **content collections** for practice areas and case results.

## Development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:4321`).

## Production build

```bash
npm run build
npm run preview   # optional: serve ./dist
```

Output is written to `dist/`. Static assets under [`public/`](public/) (including [`public/assets/images/`](public/assets/images/)) are copied through as-is.

## Project layout

| Path | Purpose |
|------|---------|
| [`src/pages/`](src/pages/) | Routes (App Router–style file routing) |
| [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) | HTML shell, fonts, legacy CSS |
| [`src/content/practiceAreas/`](src/content/practiceAreas/) | Practice area copy (Markdown + front matter) |
| [`src/content/caseResults/cases.json`](src/content/caseResults/cases.json) | Key cases (data collection) |
| [`src/data/team.ts`](src/data/team.ts) | Legal team structure and modal copy |
| [`public/assets/`](public/assets/) | CSS/JS/images served as static files |
| [`public/CNAME`](public/CNAME) | GitHub Pages custom domain (`www.firmwilloughby.com`) |
| [`public/sitemap.xml`](public/sitemap.xml) | SEO sitemap |
| [`legacy/`](legacy/) | Archived static HTML export (reference only) |

## Deployment notes

- **Static hosting**: upload the contents of `dist/` (includes `CNAME` and `sitemap.xml` from `public/`).
- **Images**: keep photography and logos under [`public/assets/images/`](public/assets/images/) (`headshots/`, `photos/`, SVGs). See [`docs/MIGRATION_NOTES.md`](docs/MIGRATION_NOTES.md) if you need to swap in final attorney portraits after migration stand-ins.
- **Rollback**: keep the [`legacy/`](legacy/) tree as a fallback snapshot of the previous static export.

## Conventions

- **URLs**: `trailingSlash: 'always'` and directory URLs match the old site (`/about-us/`, etc.).
- **Styling**: primary look-and-feel comes from `public/assets/css/awlaw.min.css`; Tailwind is available with **preflight disabled** in [`tailwind.config.mjs`](tailwind.config.mjs) to avoid clashing with legacy utilities.
