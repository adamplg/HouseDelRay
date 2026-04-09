import type { Locale } from '@/i18n/utils';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ── English (default) ──

export const mainNav: NavItem[] = [
  { label: 'Our House', href: '/our-house' },
  { label: 'Sleep', href: '/sleep' },
  { label: 'Eat & Drink', href: '/eat-and-drink' },
];

export const secondaryNav: NavItem[] = [
  { label: 'Private Buyout', href: '/private-buyout' },
  { label: 'Speakeasy', href: '/speakeasy' },
];

export const sideMenuNav: NavItem[] = [
  {
    label: 'Our House',
    href: '/our-house',
    children: [
      { label: 'About Us', href: '/our-house' },
      { label: 'Rooms & Suites', href: '/sleep' },
      { label: 'Restaurant', href: '/eat-and-drink' },
      { label: 'Membership', href: '#' },
      { label: 'Speakeasy', href: '/speakeasy' },
      { label: 'Roof', href: '/the-rooftop' },
      { label: 'Events', href: '/events' },
      { label: 'Contact', href: '/contact' },
      { label: 'Magazine', href: '/magazine' },
    ],
  },
  {
    label: 'Sleep',
    href: '/sleep',
    children: [
      { label: 'House of Tel Aviv', href: '/destination/tel-aviv' },
      { label: 'House of Berlin', href: '#' },
      { label: 'House of Madrid', href: '#' },
      { label: 'Delray Spa', href: '#' },
    ],
  },
  {
    label: 'Eat & Drink',
    href: '/eat-and-drink',
  },
];

export const footerNav = {
  stayWithUs: [
    { label: 'Stay With Us', href: '/sleep' },
    { label: 'Reserve a Table', href: '#reserve' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  legal: [
    { label: 'Privacy & Policies', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

// ── French ──

const mainNavFr: NavItem[] = [
  { label: 'Notre Maison', href: '/fr/notre-maison' },
  { label: 'Dormir', href: '/fr/dormir' },
  { label: 'Manger & Boire', href: '/fr/manger-et-boire' },
];

const secondaryNavFr: NavItem[] = [
  { label: 'Privatisation', href: '/fr/privatisation' },
  { label: 'Speakeasy', href: '/fr/speakeasy' },
];

const sideMenuNavFr: NavItem[] = [
  {
    label: 'Notre Maison',
    href: '/fr/notre-maison',
    children: [
      { label: 'À Propos', href: '/fr/notre-maison' },
      { label: 'Chambres & Suites', href: '/fr/dormir' },
      { label: 'Restaurant', href: '/fr/manger-et-boire' },
      { label: 'Adhésion', href: '#' },
      { label: 'Speakeasy', href: '/fr/speakeasy' },
      { label: 'Rooftop', href: '/fr/le-rooftop' },
      { label: 'Événements', href: '/fr/evenements' },
      { label: 'Contact', href: '/fr/contact' },
      { label: 'Magazine', href: '/fr/magazine' },
    ],
  },
  {
    label: 'Dormir',
    href: '/fr/dormir',
    children: [
      { label: 'Maison de Tel Aviv', href: '/fr/destination/tel-aviv' },
      { label: 'Maison de Berlin', href: '#' },
      { label: 'Maison de Madrid', href: '#' },
      { label: 'Delray Spa', href: '#' },
    ],
  },
  {
    label: 'Manger & Boire',
    href: '/fr/manger-et-boire',
  },
];

const footerNavFr = {
  stayWithUs: [
    { label: 'Séjourner', href: '/fr/dormir' },
    { label: 'Réserver une Table', href: '#reserve' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  legal: [
    { label: 'Confidentialité', href: '/fr/politique-de-confidentialite' },
    { label: 'Conditions Générales', href: '/fr/conditions-generales' },
  ],
};

// ── Locale-aware getters ──

export function getMainNav(locale: Locale): NavItem[] {
  return locale === 'fr' ? mainNavFr : mainNav;
}

export function getSecondaryNav(locale: Locale): NavItem[] {
  return locale === 'fr' ? secondaryNavFr : secondaryNav;
}

export function getSideMenuNav(locale: Locale): NavItem[] {
  return locale === 'fr' ? sideMenuNavFr : sideMenuNav;
}

export function getFooterNav(locale: Locale) {
  return locale === 'fr' ? footerNavFr : footerNav;
}
