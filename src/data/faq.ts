import type { Locale } from '@/i18n/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'When can I check in/check out?',
    answer: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.',
  },
  {
    question: 'How do I get there?',
    answer: 'House of Delray is located at 8 Nes HaGalshan St., in the heart of Kerem HaTeimanim, Tel Aviv. We are a short walk from the Carmel Market and the beach. The nearest light rail station is HaAliya/Carmel Market.',
  },
  {
    question: 'Where do I park?',
    answer: 'Street parking is available in the neighborhood. We also recommend the nearby Carmel Market parking garage, located a 3-minute walk from the hotel. Valet parking is not available.',
  },
  {
    question: 'Can I change or cancel my booking?',
    answer: 'Cancellation policies vary depending on the rate and package selected. Please refer to your booking confirmation email for specific terms, or contact us directly at reservations@delray.com.',
  },
];

const faqItemsFr: FaqItem[] = [
  {
    question: "Quelles sont les heures d'arrivée et de départ ?",
    answer: "L'enregistrement s'effectue à partir de 15h00 et le départ avant 11h00. Un enregistrement anticipé ou un départ tardif peut être envisagé sur demande, sous réserve de disponibilité.",
  },
  {
    question: 'Comment se rendre au House of Delray ?',
    answer: "Le House of Delray se situe au 8 rue Nes HaGalshan, au cœur du quartier de Kerem HaTeimanim, à Tel Aviv. Nous sommes à quelques pas du marché du Carmel et de la plage. La station de tramway la plus proche est HaAliya/Carmel Market.",
  },
  {
    question: 'Où puis-je me garer ?',
    answer: "Le stationnement dans les rues avoisinantes est possible. Nous recommandons également le parking couvert du marché du Carmel, situé à trois minutes à pied de l'hôtel. Le service de voiturier n'est pas disponible.",
  },
  {
    question: 'Puis-je modifier ou annuler ma réservation ?',
    answer: "Les conditions d'annulation varient selon le tarif et le forfait choisis. Veuillez consulter votre e-mail de confirmation pour connaître les conditions spécifiques, ou contactez-nous directement à reservations@delray.com.",
  },
];

export function getFaqItems(locale: Locale): FaqItem[] {
  return locale === 'fr' ? faqItemsFr : faqItems;
}
