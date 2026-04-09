import type { Locale } from '@/i18n/utils';

export interface HoursEntry {
  label: string;
  time: string;
}

export const restaurantHours: HoursEntry[] = [
  { label: 'Mon to Fri', time: '10:30am - 3:15pm (last food order 10:00pm)' },
  { label: 'Sat to Sun', time: '10:00am - 3pm / 5:15pm (last food order 10:00pm)' },
];

export const restaurantContact = {
  email: 'restaurant@delray.com',
  phone: '+972 3 543 8400',
  address: '8 Nes HaGalshan St.',
  city: 'Tel Aviv',
};

export const rooftopHours: HoursEntry[] = [
  { label: 'Mon to Fri', time: '10:30am - 3:15pm (last food order 10:00pm)' },
  { label: 'Sat to Sun', time: '10:00am - 3pm / 5:15pm (last food order 10:00pm)' },
];

const restaurantHoursFr: HoursEntry[] = [
  { label: 'Lun au Ven', time: '10h30 - 15h15 (dernière commande cuisine 22h00)' },
  { label: 'Sam au Dim', time: '10h00 - 15h00 / 17h15 (dernière commande cuisine 22h00)' },
];

const rooftopHoursFr: HoursEntry[] = [
  { label: 'Lun au Ven', time: '10h30 - 15h15 (dernière commande cuisine 22h00)' },
  { label: 'Sam au Dim', time: '10h00 - 15h00 / 17h15 (dernière commande cuisine 22h00)' },
];

export function getRestaurantHours(locale: Locale): HoursEntry[] {
  return locale === 'fr' ? restaurantHoursFr : restaurantHours;
}

export function getRooftopHours(locale: Locale): HoursEntry[] {
  return locale === 'fr' ? rooftopHoursFr : rooftopHours;
}
