# Notes

## Images

Photography and logos live under **`src/images/`** and are imported in code (see `src/data/team.ts`, `src/data/siteAssets.ts`, `src/data/about.ts`) so Vite emits hashed URLs in production.

The legacy **`awlaw`** stylesheet (`public/assets/css/awlaw.min.css`) still provides most layout and utility classes; Tailwind adds targeted overrides in **`src/styles/global.css`**.

## Domain

Production: **`www.firmwilloughby.com`**. Configure the custom domain in the **Netlify** dashboard (DNS points to Netlify). The [`public/CNAME`](../public/CNAME) file is optional metadata; routing is controlled in Netlify, not by that file alone.
