import { ui, type UIKey } from './ui';

export type Locale = 'en' | 'fr';

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/fr/') || pathname === '/fr') {
    return 'fr';
  }
  return 'en';
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui['en'][key] ?? key;
  };
}

/** Bidirectional EN ↔ FR route map */
export const routeMap: Record<string, string> = {
  '/': '/fr',
  '/our-house': '/fr/notre-maison',
  '/sleep': '/fr/dormir',
  '/eat-and-drink': '/fr/manger-et-boire',
  '/the-rooftop': '/fr/le-rooftop',
  '/speakeasy': '/fr/speakeasy',
  '/events': '/fr/evenements',
  '/private-buyout': '/fr/privatisation',
  '/contact': '/fr/contact',
  '/magazine': '/fr/magazine',
  '/magazine/hidden-gem': '/fr/magazine/hidden-gem',
  '/destination/tel-aviv': '/fr/destination/tel-aviv',
  '/privacy-policy': '/fr/politique-de-confidentialite',
  '/terms': '/fr/conditions-generales',
};

const reverseRouteMap = Object.fromEntries(
  Object.entries(routeMap).map(([en, fr]) => [fr, en])
);

export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  const clean = currentPath.replace(/\/$/, '') || '/';
  if (targetLocale === 'fr') {
    return routeMap[clean] ?? `/fr${clean}`;
  }
  return reverseRouteMap[clean] ?? (clean.replace(/^\/fr/, '') || '/');
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return routeMap[path] ?? `/fr${path}`;
}
