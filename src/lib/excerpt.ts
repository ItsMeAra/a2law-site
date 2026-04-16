/** Plain-text excerpt from markdown body for meta descriptions (AEO / SERP snippets). */
export function excerptFromMarkdownBody(body: string, maxLen = 155): string {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLen) return text;

  const slice = text.slice(0, maxLen);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > 80 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}
