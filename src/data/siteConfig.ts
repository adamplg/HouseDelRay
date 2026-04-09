import type { Locale } from '@/i18n/utils';

export const siteConfig = {
  name: 'House of Delray',
  tagline: 'Tel Aviv',
  description: 'Tucked away in Tel Aviv\'s electric Kerem HaTeimanim, House of Delray is an eight-room urban villa that blends the intimacy of a private residence with the vibrant pulse of the neighborhood.',
  url: 'https://houseofdelray.com',

  contact: {
    address: '8 Nes HaGalshan St.',
    city: 'Tel Aviv, 6579495, Israel',
    phone: '+972 3 543 8400',
    email: 'hello@delray.com',
    reservationsEmail: 'reservations@delray.com',
  },

  social: {
    facebook: '#',
    instagram: '#',
  },

  bookingUrl: '#booking',
  reserveUrl: '#reserve',
  spotifyPlaylistId: '37i9dQZF1DXcBWIGoYBM5M',

  ogImage: '/images/og-image.jpg',
};

const descriptionFr = "Niché au cœur du quartier effervescent de Kerem HaTeimanim à Tel Aviv, le House of Delray est une villa urbaine de huit chambres qui allie l'intimité d'une résidence privée à l'énergie vibrante du quartier.";

export function getSiteDescription(locale: Locale): string {
  return locale === 'fr' ? descriptionFr : siteConfig.description;
}
