# House of Delray

Boutique hotel website for House of Delray, an eight-room urban villa in Tel Aviv's Kerem HaTeimanim neighborhood.

## Tech Stack

- **Astro 5** — static site generator, zero JS by default, component-scoped CSS
- **Vanilla CSS** — mobile-first with custom properties, `min-width` media queries
- **Vanilla JS** — menus, accordions, carousels, form validation
- **Embla Carousel** — touch-friendly carousels
- **@astrojs/mdx** — magazine article content
- **@astrojs/sitemap** — auto-generated sitemap

## Commands

- `npm run dev` — start dev server (port 4321)
- `npm run build` — production build
- `npm run preview` — preview production build

## Project Structure

```
src/
├── components/
│   ├── global/      # Header, Footer, SideMenu, NewsletterSignup, Breadcrumbs, SkipToContent
│   ├── blocks/      # PageHero, ThumbnailGrid, Accordion, ContactForm, EventCard, etc.
│   └── ui/          # Button, Container, SectionHeading
├── layouts/
│   ├── BaseLayout.astro       # HTML shell, meta, fonts, View Transitions
│   ├── PageLayout.astro       # Header + slot + NewsletterSignup + Footer
│   ├── SpeakeasyLayout.astro  # Dark theme variant
│   └── MagazineLayout.astro   # Rose-tinted background
├── pages/            # 14 pages total (see below)
├── content/          # YAML/MDX content collections (rooms, events, articles, packages, destinations)
├── data/             # Static data (navigation, openingHours, faq, siteConfig)
└── styles/
    ├── global.css       # Reset, custom properties, spacing, colors
    ├── typography.css   # Font families, fluid type scale, heading/body styles
    ├── animations.css   # Keyframes + prefers-reduced-motion overrides
    └── speakeasy.css    # Dark theme styles
```

## Pages

`/` (homepage), `/our-house`, `/sleep`, `/eat-and-drink`, `/the-rooftop`, `/speakeasy`, `/events`, `/private-buyout`, `/contact`, `/magazine`, `/magazine/[slug]`, `/destination/[slug]`, `/privacy-policy`, `/terms`, `/404`

## Typography

- **Headings & hero**: Poppins (500 weight, uppercase)
- **Body text**: Cormorant Garamond (serif, via `--font-heading`)
- **UI elements** (nav, buttons, labels): Josefin Sans (via `--font-ui`)
- **Body font** (prose, descriptions): Proza Libre (via `--font-body`)

All headings (h1–h6, section titles, card titles, SectionHeading component) use `'Poppins', var(--font-ui)` with `font-weight: 500` and `text-transform: uppercase`.

## Color Palette

Key tokens defined in `global.css`:
- `--color-cream` (#FAF8F5) — page background
- `--color-charcoal` (#2C2926) — primary text
- `--color-forest` (#3D5A47) — primary CTA buttons (BOOK NOW)
- `--color-mauve-500` (#96636F) — links, secondary buttons
- `--color-gold` (#B8963E) — decorative accents
- `--color-night` (#0E0E0E) — speakeasy dark background
- `--color-magenta` (#C74B7A) — speakeasy accent

## Header Modes

The Header component supports 3 modes via `headerMode` prop on PageLayout:
- `transparent` — over hero images, white text
- `solid` — cream background, dark text (after scrolling past hero)
- `dark` — dark background for speakeasy page

## Content Collections

YAML files in `src/content/`:
- `rooms/*.yaml` — title, description, images[], amenities[], capacity, size, order
- `events/*.yaml` — title, description, date, venue (speakeasy|rooftop|general), image
- `articles/*.mdx` — magazine articles with frontmatter
- `packages/*.yaml` — title, description, features[], price, image, order
- `destinations/*.yaml` — city, heroImage, properties[]

## Key Conventions

- **Mobile-first CSS**: Base styles target mobile, desktop uses `@media (min-width: 768px)`
- **BEM-like naming**: `.block__element--modifier` pattern for CSS classes
- **Component-scoped styles**: Use Astro's `<style>` blocks (scoped by default)
- **Images**: `public/images/` directory, use `loading="lazy"` except hero images
- **Newsletter**: "Drop me a Note" section appears on every page (built into PageLayout)
- **No system dark mode**: Brand uses intentional light/dark treatments per page
- **Placeholders**: External links (BOOK NOW, Reserve, RSVP) use `#` placeholders configured in `siteConfig.ts`
