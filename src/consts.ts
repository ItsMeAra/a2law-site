export const SITE_NAME = 'Willoughby & Associates';
export const DEFAULT_DESCRIPTION =
  'Willoughby & Associates is a full-service litigation law firm providing first-class, cost-effective, and personalized counsel to Los Angeles for over 30 years.';
export const PHONE_DISPLAY = '(310) 642-0600';
export const PHONE_TEL = '3106420600';
export const ADDRESS_LINES = ['200 Corporate Pointe, Suite 495', 'Culver City, CA 90230'];
export const COPYRIGHT_YEAR = 2023;

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
