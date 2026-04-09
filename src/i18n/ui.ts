export const ui = {
  en: {
    // Navigation
    'nav.ourHouse': 'Our House',
    'nav.sleep': 'Sleep',
    'nav.eatAndDrink': 'Eat & Drink',
    'nav.privateBuyout': 'Private Buyout',
    'nav.speakeasy': 'Speakeasy',
    'nav.bookNow': 'Book Now',

    // Side menu
    'sideMenu.bookNow': 'Book Now',
    'sideMenu.aboutUs': 'About Us',
    'sideMenu.roomsSuites': 'Rooms & Suites',
    'sideMenu.restaurant': 'Restaurant',
    'sideMenu.membership': 'Membership',
    'sideMenu.roof': 'Roof',
    'sideMenu.events': 'Events',
    'sideMenu.contact': 'Contact',
    'sideMenu.magazine': 'Magazine',
    'sideMenu.houseTelAviv': 'House of Tel Aviv',
    'sideMenu.houseBerlin': 'House of Berlin',
    'sideMenu.houseMadrid': 'House of Madrid',
    'sideMenu.delraySpa': 'Delray Spa',
    'sideMenu.imageAlt': 'House of Delray interior',

    // Footer
    'footer.stayWithUs': 'Stay With Us',
    'footer.reserveTable': 'Reserve a Table',
    'footer.facebook': 'Facebook',
    'footer.instagram': 'Instagram',
    'footer.privacyPolicies': 'Privacy & Policies',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.tagline': 'Tel Aviv',

    // Newsletter
    'newsletter.title.line1': 'Drop',
    'newsletter.title.line2': 'me a',
    'newsletter.title.bold': 'Note',
    'newsletter.description': 'Join us to discover new events & special offers. Join the magic. Stay for the mischief.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.submit': 'Join Our Newsletter',
    'newsletter.emailLabel': 'Email address',

    // Contact form
    'form.firstName': 'First name',
    'form.lastName': 'Last name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.success': "Thank you! We'll be in touch soon.",

    // Block components
    'eventCard.rsvp': 'RSVP',
    'menuLinks.seeMenu': 'See Menu',
    'hours.title': 'Opening Hours',
    'hours.email': 'Email',
    'hours.phone': 'Phone',
    'thumbnail.comingSoon': 'Coming Soon',

    // Accessibility
    'skip.toContent': 'Skip to content',

    // Language switcher
    'lang.switchTo': 'FR',
  },
  fr: {
    // Navigation
    'nav.ourHouse': 'Notre Maison',
    'nav.sleep': 'Dormir',
    'nav.eatAndDrink': 'Manger & Boire',
    'nav.privateBuyout': 'Privatisation',
    'nav.speakeasy': 'Speakeasy',
    'nav.bookNow': 'Réserver',

    // Side menu
    'sideMenu.bookNow': 'Réserver',
    'sideMenu.aboutUs': 'À Propos',
    'sideMenu.roomsSuites': 'Chambres & Suites',
    'sideMenu.restaurant': 'Restaurant',
    'sideMenu.membership': 'Adhésion',
    'sideMenu.roof': 'Rooftop',
    'sideMenu.events': 'Événements',
    'sideMenu.contact': 'Contact',
    'sideMenu.magazine': 'Magazine',
    'sideMenu.houseTelAviv': 'Maison de Tel Aviv',
    'sideMenu.houseBerlin': 'Maison de Berlin',
    'sideMenu.houseMadrid': 'Maison de Madrid',
    'sideMenu.delraySpa': 'Delray Spa',
    'sideMenu.imageAlt': 'Intérieur du House of Delray',

    // Footer
    'footer.stayWithUs': 'Séjourner',
    'footer.reserveTable': 'Réserver une Table',
    'footer.facebook': 'Facebook',
    'footer.instagram': 'Instagram',
    'footer.privacyPolicies': 'Confidentialité',
    'footer.termsConditions': 'Conditions Générales',
    'footer.tagline': 'Tel Aviv',

    // Newsletter
    'newsletter.title.line1': 'Laissez',
    'newsletter.title.line2': 'nous un',
    'newsletter.title.bold': 'Mot',
    'newsletter.description': 'Rejoignez-nous pour découvrir nos événements et offres exclusives. Entrez dans la magie. Restez pour le plaisir.',
    'newsletter.placeholder': 'votre@email.com',
    'newsletter.submit': 'Rejoindre la Newsletter',
    'newsletter.emailLabel': 'Adresse e-mail',

    // Contact form
    'form.firstName': 'Prénom',
    'form.lastName': 'Nom',
    'form.email': 'E-mail',
    'form.phone': 'Téléphone',
    'form.message': 'Message',
    'form.submit': 'Envoyer',
    'form.success': 'Merci ! Nous vous recontacterons très bientôt.',

    // Block components
    'eventCard.rsvp': 'RSVP',
    'menuLinks.seeMenu': 'Voir le Menu',
    'hours.title': "Horaires d'Ouverture",
    'hours.email': 'E-mail',
    'hours.phone': 'Téléphone',
    'thumbnail.comingSoon': 'Bientôt',

    // Accessibility
    'skip.toContent': 'Aller au contenu',

    // Language switcher
    'lang.switchTo': 'EN',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
