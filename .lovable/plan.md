
## KGN Kulhad — Premium Business Website

A 7-page responsive site with an earthy premium theme (brown, beige, terracotta), subtle animations, product catalog, wholesale CTA, gallery, FAQ, contact with Google Map, and a floating WhatsApp button.

### Pages & Routes
- `/` Home — hero, features, product highlights, testimonials, CTA
- `/products` — all 8 kulhad sizes with images, specs, WhatsApp order button per card
- `/about` — brand story, craftsmanship, values
- `/wholesale` — bulk order pitch, benefits, inquiry form/CTA
- `/gallery` — grid of clay/kulhad lifestyle images
- `/faq` — accordion of common questions
- `/contact` — contact info, embedded Google Map, contact form, WhatsApp/phone

### Design System (src/styles.css)
Earthy premium palette in oklch tokens:
- Background: warm beige/cream
- Primary: terracotta
- Secondary: deep clay brown
- Accent: muted ochre
- Foreground: dark espresso
Typography: serif display (Playfair Display) for headings + clean sans (Inter) for body, loaded via `<link>` in `__root.tsx`. Custom shadow/gradient tokens for premium feel. Fade-in, scale-in, and hover-scale animations on scroll/hover.

### Shared Components
- `SiteHeader` — sticky nav with logo, links, mobile hamburger
- `SiteFooter` — brand, quick links, contact, social icons (Instagram, Facebook, WhatsApp, YouTube)
- `WhatsAppFloat` — fixed bottom-right pulsing WhatsApp button (all pages)
- `SectionHeading`, `ProductCard`, `FeatureCard`, `TestimonialCard`

### Home page sections
1. Hero: title "Pure Clay Kulhads for Every Occasion", subtitle, three CTAs (Shop Now → /products, WhatsApp Order → wa.me link, Contact Us → /contact), background clay imagery.
2. Feature strip: 6 features (Natural Clay, Eco-Friendly, Food Safe, Bulk Orders, Fast Delivery, Premium Quality) with icons.
3. Featured products (4 highlights → link to /products).
4. About teaser.
5. Testimonials (3–4 cards).
6. Wholesale CTA band.

### Products
8 SKUs (60/70/80/90/100/200 ml tea, 250/300 ml lassi) rendered from a data array. Each card: image placeholder, name, capacity, short desc, "Order on WhatsApp" button (prefilled message).

### Assets
Generate AI images: hero, 8 product shots, ~6 gallery images, about/craftsmanship image. Store under `src/assets/` and reference via imports.

### SEO
- Per-route `head()` with unique title, description, og:title, og:description, og:url, canonical (leaf-only).
- Root: sitewide viewport, og:site_name, WebSite + Organization JSON-LD.
- Product page: Product/ItemList JSON-LD.
- FAQ page: FAQPage JSON-LD.
- Contact page: LocalBusiness JSON-LD.
- Semantic HTML, alt text on all images, single H1 per page.
- `public/robots.txt` and `public/sitemap.xml` with relative URLs.

### Technical notes
- TanStack Start file-based routing under `src/routes/`.
- Replace placeholder `src/routes/index.tsx`.
- Tailwind v4 tokens in `src/styles.css` under `@theme inline`.
- shadcn components (Button, Card, Accordion, Input, Textarea) for consistent UI.
- Google Map via `<iframe>` embed (no API key needed) on Contact page.
- WhatsApp links use `https://wa.me/<number>?text=...` — using a placeholder phone number `91XXXXXXXXXX` that you can update; a single constant in `src/lib/site.ts`.
- Contact form is presentational (no backend); submit opens WhatsApp with prefilled details.
- Mobile-first responsive layouts using grid + `min-w-0` + `shrink-0` patterns.

### Open items (safe defaults chosen; tell me if different)
- WhatsApp number: placeholder `+91 00000 00000` — provide the real one to swap in.
- Business address for Google Map: placeholder "Khurja, Uttar Pradesh, India" (kulhad hub).
- Social media URLs: placeholder `#` links.
