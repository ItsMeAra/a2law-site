export const SITE_NAME = 'Willoughby & Associates';
export const DEFAULT_DESCRIPTION =
  'Willoughby & Associates is a full-service litigation law firm providing first-class, cost-effective, and personalized counsel to Los Angeles for over 30 years.';
export const PHONE_DISPLAY = '(310) 642-0600';
export const PHONE_TEL = '3106420600';
export const ADDRESS_LINES = ['200 Corporate Pointe, Suite 495', 'Culver City, CA 90230'];
export const COPYRIGHT_YEAR = 2026;

/** Unique meta descriptions for key routes (SEO / AEO snippets). */
export const META_DESCRIPTIONS = {
  home: 'Los Angeles litigation attorneys at Willoughby & Associates: criminal defense, employment, municipal law, personal injury, and more. Senior-led counsel since the 1990s. Call (310) 642-0600.',
  about:
    'Learn about Willoughby & Associates, a full-service Los Angeles litigation firm serving plaintiffs, defendants, businesses, and public agencies with personalized senior-attorney attention.',
  legalTeam:
    'Meet the lawyers and staff of Willoughby & Associates — partners, of counsel, and professionals serving clients throughout Greater Los Angeles.',
  contact:
    'Contact Willoughby & Associates in Culver City for a consultation: phone (310) 642-0600, address, and directions to our office.',
  caseResults:
    'Selected case results from Willoughby & Associates across criminal defense, civil rights, employment, municipal, and personal injury matters in California.',
  practiceAreasIndex:
    'Explore practice areas at Willoughby & Associates: criminal defense, civil rights, employment, estate planning, municipal law, personal injury, lobbying, and appellate advocacy.',
  abogados:
    'Abogados de Willoughby & Associates en Los Ángeles: defensa penal, litigación municipal, leyes de empleo, lesiones personales y más. Consulta gratuita.',
  anthonyWilloughby:
    'Anthony Willoughby, lead trial attorney and senior partner at Willoughby & Associates in Los Angeles — decades of litigation experience and client-focused results.',
  anthonyWilloughbyIi:
    'Anthony Willoughby II, managing attorney at Willoughby & Associates — Los Angeles counsel focused on constitutional rights, civil litigation, and complex disputes.',
} as const;

export type NavId =
  | 'home'
  | 'about'
  | 'team'
  | 'abogados'
  | 'practice'
  | 'cases'
  | 'contact';

export const NAV_ITEMS: { id: NavId; href: string; label: string }[] = [
  { id: 'about', href: '/about-us/', label: 'About Us' },
  { id: 'team', href: '/legal-team/', label: 'Legal Team' },
  { id: 'abogados', href: '/abogados/', label: 'Abogados' },
  { id: 'practice', href: '/practice-areas/', label: 'Practice Areas' },
  { id: 'cases', href: '/case-results/', label: 'Case Results' },
  { id: 'contact', href: '/contact-us/', label: 'Contact Us' },
];
