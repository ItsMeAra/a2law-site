/** Normalize Vite/Astro static image imports to a URL string. */
export function imageUrl(imported: string | { src: string }): string {
  return typeof imported === 'string' ? imported : imported.src;
}
