# Willoughby & Associates — Astro site

Marketing site built with **Astro**, **Tailwind CSS** (with the existing `awlaw` stylesheet for visual parity), and **content collections** for practice areas and case results.

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

Output is written to `dist/`. Files in [`public/`](public/) (CSS, JS, `sitemap.xml`, etc.) are copied as-is; images under [`src/images/`](src/images/) are bundled by Vite.

## Project layout

| Path | Purpose |
|------|---------|
| [`netlify.toml`](netlify.toml) | Netlify build settings (`npm run build` → `dist/`) |
| [`src/pages/`](src/pages/) | Routes (file-based routing) |
| [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) | HTML shell, fonts, global CSS import |
| [`src/content/practiceAreas/`](src/content/practiceAreas/) | Practice area copy (Markdown + front matter) |
| [`src/content/caseResults/cases.json`](src/content/caseResults/cases.json) | Key cases |
| [`src/data/team.ts`](src/data/team.ts) | Legal team and modal copy |
| [`src/images/`](src/images/) | Logos, headshots, photo strip assets (imported in `src/data/*`) |
| [`public/assets/`](public/assets/) | Legacy CSS/JS served as static files |
| [`public/CNAME`](public/CNAME) | Domain name (optional; primary domain is configured in Netlify) |
| [`public/sitemap.xml`](public/sitemap.xml) | SEO sitemap |

## Deployment (Netlify)

This repo is set up for **[Netlify](https://www.netlify.com/)** ([`netlify.toml`](netlify.toml)): build command **`npm run build`**, publish directory **`dist`**, Node **20**.

1. In Netlify: **Add new site** → **Import an existing project** → connect **GitHub** and select this repository.
2. Netlify should read `netlify.toml` automatically; confirm **Build command** and **Publish directory**.
3. **Domain**: under **Site configuration → Domain management**, add **`www.firmwilloughby.com`** (and the apex domain if you use it). Point DNS to Netlify as shown in the dashboard (or use Netlify DNS).
4. **Move off GitHub Pages**: in the GitHub repo **Settings → Pages**, set the source to **None** (or delete the old Pages workflow) so only Netlify serves the site. Remove any old **CNAME** / **A** records at your DNS host that pointed at GitHub Pages and replace them with Netlify’s records.

`astro.config.mjs` sets `site: 'https://www.firmwilloughby.com'` for canonical URLs and sitemap behavior.

## Other notes

- **Images**: add or replace files under `src/images/` and wire them in the relevant `src/data/*.ts` module. See [`docs/MIGRATION_NOTES.md`](docs/MIGRATION_NOTES.md).

## Conventions

- **URLs**: `trailingSlash: 'always'` and directory URLs match the previous site (`/about-us/`, etc.).
- **Styling**: primary look-and-feel comes from `public/assets/css/awlaw.min.css`; Tailwind is available with **preflight disabled** in [`tailwind.config.mjs`](tailwind.config.mjs) to avoid clashing with existing utility classes.
