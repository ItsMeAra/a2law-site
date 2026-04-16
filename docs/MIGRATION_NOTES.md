# Migration notes (legacy → Astro)

## Legacy export

The previous static HTML export is preserved under [`legacy/`](../legacy/) for reference (routes, copy, and markup parity).

## Image assets

All site imagery is served from **[`public/assets/images/`](../public/assets/images/)** (copied unchanged into `dist/` on build):

| Location | Contents |
|----------|----------|
| Root of `images/` | SVG logos, occasional large group shots (e.g. `group-002.jpg`) |
| `images/headshots/` | Attorney and staff portrait JPEGs |
| `images/photos/` | Photo strip / candid images used on About and elsewhere |

Paths in templates match the old static site (`/assets/images/...`).

**Visibility note:** During the Astro migration, an optional placeholder script briefly overwrote some JPEGs with **tiny gray files** that were hard to see on gray section backgrounds. Those files were **restored from other large photos already in this folder** (candid / group shots) so each `headshots/*.jpg` and the About strip (`candid-002`, `candid-003`, `candid-005`) show real imagery again. **Replace them with the correct attorney portraits and candid photos** when you have the originals; filenames should stay the same.

**CSS:** [`src/styles/global.css`](../src/styles/global.css) adds `object-fit: cover` and stacking for `.o-ratio` / `.photoStrip` images so they fill the legacy aspect-ratio frames.

## Routes migrated

| Path | Source |
|------|--------|
| `/` | `legacy/index.html` |
| `/about-us/` | `legacy/about-us/index.html` |
| `/abogados/` | `legacy/abogados/index.html` |
| `/contact-us/` | `legacy/contact-us/index.html` |
| `/case-results/` | `legacy/case-results/index.html` |
| `/legal-team/` | `legacy/legal-team/index.html` |
| `/legal-team/anthony-willoughby/` | `legacy/legal-team/anthony-willoughby/index.html` |
| `/legal-team/anthony-willoughby-2/` | `legacy/legal-team/anthony-willoughby-2/index.html` |
| `/practice-areas/` | `legacy/practice-areas/index.html` |
| `/practice-areas/<slug>/` | Matching `legacy/practice-areas/<slug>/index.html` |

## Domain

Production domain from legacy `CNAME`: `www.firmwilloughby.com` — copy [`public/CNAME`](../public/CNAME) to the static host root on deploy (e.g. GitHub Pages).
