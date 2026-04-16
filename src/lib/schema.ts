import { ADDRESS_LINES, PHONE_TEL, SITE_NAME } from '../consts';

function telUri(tenDigit: string): string {
  return `+1${tenDigit.replace(/\D/g, '')}`;
}

function parseStreetCityStateZip(): {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
} {
  const streetAddress = ADDRESS_LINES[0] ?? '';
  const line2 = ADDRESS_LINES[1] ?? '';
  const m = line2.match(/^([^,]+),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/i);
  if (m) {
    return {
      streetAddress,
      addressLocality: m[1].trim(),
      addressRegion: m[2].toUpperCase(),
      postalCode: m[3],
    };
  }
  return {
    streetAddress,
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '',
  };
}

/** `@graph` entries: LegalService (primary business) + WebSite. */
export function buildOrganizationWebSiteSchema(
  siteUrl: URL,
  logoAbsoluteUrl: string,
): Record<string, unknown> {
  const base = siteUrl.href.endsWith('/') ? siteUrl.href : `${siteUrl.href}/`;
  const orgId = new URL('#organization', base).href;
  const websiteId = new URL('#website', base).href;
  const addr = parseStreetCityStateZip();

  const postalAddress: Record<string, unknown> = {
    '@type': 'PostalAddress',
    streetAddress: addr.streetAddress,
    addressLocality: addr.addressLocality,
    addressRegion: addr.addressRegion,
    addressCountry: 'US',
  };
  if (addr.postalCode) postalAddress.postalCode = addr.postalCode;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': orgId,
        name: SITE_NAME,
        url: base,
        logo: logoAbsoluteUrl,
        telephone: telUri(PHONE_TEL),
        address: postalAddress,
        areaServed: {
          '@type': 'City',
          name: 'Los Angeles',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: base,
        name: SITE_NAME,
        publisher: { '@id': orgId },
      },
    ],
  };
}

export function buildPersonSchema(
  siteUrl: URL,
  logoAbsoluteUrl: string,
  person: {
    name: string;
    url: string;
    jobTitle: string;
    description?: string;
    /** Absolute URL or site-root path (e.g. built asset under `/_astro/`). */
    imageUrl?: string;
  },
): Record<string, unknown> {
  const base = siteUrl.href.endsWith('/') ? siteUrl.href : `${siteUrl.href}/`;
  const orgId = new URL('#organization', base).href;

  const profileImage = person.imageUrl
    ? person.imageUrl.startsWith('http://') || person.imageUrl.startsWith('https://')
      ? person.imageUrl
      : new URL(person.imageUrl.replace(/^\//, ''), base).href
    : logoAbsoluteUrl;

  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    url: person.url.startsWith('http') ? person.url : new URL(person.url.replace(/^\//, ''), base).href,
    jobTitle: person.jobTitle,
    worksFor: { '@id': orgId },
    image: profileImage,
  };
  if (person.description) node.description = person.description;
  return node;
}
