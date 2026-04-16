# Notes

## Images

Photography and logos live under **`src/images/`** and are imported in code (see `src/data/team.ts`, `src/data/siteAssets.ts`, `src/data/about.ts`) so Vite emits hashed URLs in production.

The legacy **`awlaw`** stylesheet (`public/assets/css/awlaw.min.css`) still provides most layout and utility classes; Tailwind adds targeted overrides in **`src/styles/global.css`**.

## Domain

Production: **`www.firmwilloughby.com`** — ensure [`public/CNAME`](../public/CNAME) is at the root of your static host (e.g. GitHub Pages).
