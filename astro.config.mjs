import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Sitemap: `public/sitemap.xml` is maintained manually. `@astrojs/sitemap` current
// releases expect Astro’s `astro:routes:resolved` hook and crash on Astro 4 builds.
export default defineConfig({
  site: 'https://www.firmwilloughby.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
