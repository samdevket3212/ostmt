# One Stop Media website

Next.js (App Router) + React + TypeScript site for One Stop Media LLC, Sheridan, Wyoming, built from the One Stop Media master specification.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in when ready
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 20+. Deploys to Vercel (or any Node host) with no extra configuration.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build (everything static except `/contact` and the API) |
| `npm run typecheck` | TypeScript check |
| `npm run build:preview` | Builds the whole site as one self-contained HTML file in `dist/preview/` from the same components (used for the shareable preview link) |

## Structure

```
src/
  app/                 Routes (/, /work, /work/[slug], /services, /services/[slug], /studio, /process, /contact, /privacy, /terms), sitemap, robots, api/contact
  components/
    layout/            Header (compact + blur on scroll, full-screen mobile menu with phone), Footer, SiteShell
    pages/             One component per page; routes stay thin
    shared/            Button (magnetic option), Logo (OSM monogram with load animation), ProjectCard, ServiceCard, FAQAccordion, ContactForm, WorkGrid, CTASection, Effects
    visuals/           HeroArtwork, ServiceArtwork (7 animated originals), ProjectArtwork (4 covers + 16 gallery frames), BrandShapes
  content/             site.ts (company details, FAQ, process), services.ts, projects.ts
  lib/                 platform.tsx (Next bindings), metadata.ts, validation.ts
  spa/                 Router + bindings for the single-file preview build only
  styles/              tokens.css (brand palette and section themes) + globals.css
public/brand/          OSM logo files: wordmark (dark and light), monogram (color, light, single-ink)
```

### Editing content

- Company details (phone, location, email): `src/content/site.ts`. The phone renders through `components/shared/PhoneActions.tsx`, which always shows both Call and Text.
- **New service:** add an entry to `src/content/services.ts`. Its page, card, footer link, sitemap entry and contact preselection follow automatically.
- **New project:** add an entry to `src/content/projects.ts`. Use `type: 'Client Project'` only for authorized client work; `'Studio Concept'` keeps the label visible. Replace `ProjectArtwork` with real images (`next/image`, AVIF/WebP, descriptive alt text) when you have them.

## Contact form

`POST /api/contact` validates input on the server, ignores honeypot submissions, rate-limits by IP and emails the inquiry through [Resend](https://resend.com). Set in your host's environment:

```
RESEND_API_KEY=...            # server only, never exposed to the browser
CONTACT_TO_EMAIL=...          # the verified inbox that receives inquiries
CONTACT_FROM_EMAIL="One Stop Media Website <hello@your-domain.com>"   # sender on a domain verified in Resend
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
```

Until those are set the endpoint returns 503 and the form shows "That didn't go as planned" with the phone number, instead of pretending the inquiry was sent. Service pages link to `/contact?service=<slug>`, which preselects the matching options (2D & 3D Design preselects both 2D Design and 3D Design).

## Design notes

- Fonts: Archivo (variable weight and width; headings use the expanded width) and DM Sans, self-hosted with `next/font/local` (OFL licensed).
- Styling uses the brand tokens as CSS custom properties with plain CSS instead of Tailwind, so every section can switch theme (`data-theme="canvas" | "sand" | "white" | "ink" | "coral" | "cobalt" | "mint"`). Tailwind can be added later and pointed at the same variables.
- Motion: hero pointer parallax, logo draw-in, marquee, scroll reveals, magnetic CTAs, circular cursor on project cards, animated service artwork. All of it stops under `prefers-reduced-motion`, and nothing hides content.
- Derived colors exist only for contrast (for example `--coral-deep` for small coral text and `--stone` for input borders); see `tokens.css`.

## Launch checklist

- [ ] Production domain in `NEXT_PUBLIC_SITE_URL`
- [x] Business email (onestopmediawy@gmail.com) and phone in `src/content/site.ts`; every phone placement offers Call (`tel:`) and Text (`sms:`)
- [ ] Resend account with a verified sending domain, so the form can deliver to onestopmediawy@gmail.com
- [ ] Verified social profiles, if any: `site.social`
- [ ] Approve the OSM logo concept (files in `public/brand/`, component in `components/shared/Logo.tsx`)
- [ ] Privacy Policy and Terms reviewed by a lawyer; fill the bracketed items in `components/pages/LegalPage.tsx`
- [ ] Analytics (and a cookie notice only if the chosen tool needs one)
- [ ] Open Graph share image (`app/opengraph-image.png`, 1200x630)
- [ ] Real portfolio work to replace or sit beside the four studio concepts
