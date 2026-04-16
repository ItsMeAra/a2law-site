/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  corePlugins: {
    // Legacy `awlaw` CSS provides resets/typography; avoid fighting Tailwind preflight.
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
