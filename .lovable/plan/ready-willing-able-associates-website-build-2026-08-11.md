# READY, WILLING, ABLE ASSOCIATES — Website Build

A modern, conversion-focused home maintenance & property care site, structured like dabneyhomebuilders.com, styled with your navy/charcoal brand system.

## Brand system
- Navy `#002B66` (primary CTAs, headings, accents), Charcoal `#222222` (body text, footer bg), Royal Blue `#0052CC` (hover, icons), White + `#F8F9FA` alternating sections.
- Bold geometric sans headings (Archivo) with a crisp body face (Inter-alternative: Hind/Barlow-style), strong contrast, generous section spacing, subtle card shadows, 8px radii.
- Your uploaded logo becomes the header/footer brand mark and the site favicon.

## Pages
- **Home** (`/`) — all sections below.
- **About Us** (`/about`) — story, credentials, checklist, team values, CTA.
- **Services** (`/services`) plus three detail pages: property management & maintenance, general home repairs, handyman services.
- **Service Areas** (`/service-areas`) plus Springfield, Chicopee, Ludlow pages.
- **Contact Us** (`/contact`) — phone/email/address/hours, quote form (front-end only, opens a prefilled email — no backend), map embed.
- **FAQ** (`/faq`) — accordion, linked from footer.

## Home page sections (in order)
1. Announcement bar: phone (413) 205-4965, email ableassociates2023@gmail.com, "24/7 Service Available".
2. Sticky header: logo + name, nav (Home, About Us, Services ▾, Service Areas ▾, Contact Us), navy "Call Now — (413) 205-4965" button; mobile drawer with expandable submenus.
3. Hero: badge, headline "Ready, Willing, and Able to Handle All Your Property Needs", supplied paragraph, navy "Get Free Quote" + outline "Learn More", supporting hero image.
4. Stats bar: 25+ years, 100% satisfaction, 24/7 response, hundreds of happy clients.
5. About: badge, headline, description, 4-item checklist, "More About Us" link.
6. Services grid: 3 cards with icons, excerpts, "Explore" buttons linking to detail pages.
7. Why Choose Us / quality guarantee: differentiators incl. local Springfield/Chicopee/Ludlow expertise.
8. Testimonials: 5-star cards with name + city.
9. Navy CTA banner: "Let's Make Something Great Together — Contact Us 24/7" + call/book buttons.
10. Footer: 4 columns (brand + Google Business link, quick links, services, contact info) on charcoal, bottom copyright bar for 2026.

## Technical notes
- TanStack Start routes under `src/routes/`; shared `Header`/`Footer`/`AnnouncementBar` in the root layout, section components in `src/components/`.
- Brand tokens added to `src/styles.css` as oklch semantic tokens (`--primary`, `--accent`, `--surface-muted`, etc.); no hardcoded colors in components. Fonts loaded via `<link>` in `__root.tsx`.
- Per-route `head()` metadata with local-SEO titles/descriptions, LocalBusiness JSON-LD on home and contact, `tel:`/`mailto:` links, alt text, lazy images.
- Hero and service imagery generated to match the brand palette; logo uploaded as a CDN asset plus a square favicon in `public/`.
- No database or auth needed — fully static front end.
