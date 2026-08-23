# Modern Charm Uganda - Project Documentation

## Project Overview
Website for **Modern Charm Limited** (@moderncharm_events) — a premier event management company based in Kampala, Uganda. Tagline: *"Some are born with it, others work for it! Then there's us, the ones who make charm happen!"*

## Live URLs
- **Production**: https://moderncharmevents.com (custom domain; `www` also serves). `modern-charm.vercel.app` returns 404 and has never been a project domain — the Vercel-issued hosts are `modern-charm-ismail-mbabalis-projects.vercel.app` and `modern-charm-git-main-ismail-mbabalis-projects.vercel.app`
- **GitHub**: https://github.com/imbabali/modern-charm
- **Instagram**: https://www.instagram.com/moderncharm_events/

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-based config, no tailwind.config.ts)
- **Language**: TypeScript
- **Icons**: lucide-react
- **Fonts**: Playfair Display (headings) + Inter (body) + JetBrains Mono (mono labels) via next/font/google
- **Deployment**: Vercel (auto-deploys on push to main)
- **Package Manager**: npm

## Brand Identity

### Colors (from logo)
| Color | Hex | Tailwind Token | Usage |
|-------|-----|---------------|-------|
| Primary Teal | `#3D7A6E` | `primary` | Backgrounds, nav, footer |
| Primary Dark | `#2D5F55` | `primary-dark` | Hover states, footer accents |
| Primary Light | `#4A9488` | `primary-light` | Lighter teal accents |
| Gold/Copper | `#C4915C` | `accent` | CTAs, highlights, accents |
| Light Gold | `#D4A574` | `accent-light` | Stats numbers, subtle accents |
| Dark Gold | `#855E2E` | `accent-dark` | CTAs, text on light bg (WCAG AA) |
| Cream | `#FDFAF6` | `cream` | Page backgrounds |
| Dark Cream | `#F5EDE3` | `cream-dark` | Card backgrounds, sections |
| Dark | `#1A1A1A` | `dark` | Body text |
| Muted | `#5F6570` | `muted` | Secondary text (WCAG AA) |

### Typography
- **Headings**: Playfair Display (serif) — `font-heading`
- **Body**: Inter (sans-serif) — `font-body`
- **Mono labels**: JetBrains Mono — `font-mono`, used by the `.label-mono` utilities

### Logo
- MC monogram in gold/copper on black background
- "MODERN CHARM" wordmark in white
- 4 logo variants in `public/images/`: `logo-gold.jpg` (in use), `logo-color.jpg`, `logo-white.jpg`, `logo-dark.jpg`
- Logo.tsx uses `logo-gold.jpg` with 1.4:1 aspect ratio container + `object-contain` for full visibility
- Reference image: `public/images/logo-reference.png`

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout (Navbar + Footer + WhatsApp)
    page.tsx            # Homepage (8 sections incl. clientele)
    globals.css         # Tailwind theme + custom styles
    about/page.tsx      # Company story, team (5 members), mission/vision, values, how we work, clientele
    services/page.tsx   # 2 service categories (Event Planning & Coordination, Event Styling & Decor)
    portfolio/page.tsx  # Filterable portfolio grid (All/Planning/Styling), 12 events
    portfolio/[slug]/page.tsx # Event detail page with image gallery
    testimonials/page.tsx # Client stories + featured testimonial
    blog/page.tsx       # Journal/blog listing
    blog/[slug]/page.tsx # Blog post detail with HeroCarousel
    faq/page.tsx        # Accordion FAQ (client component)
    contact/page.tsx    # Contact form + info (client component)
    privacy/page.tsx    # Privacy Policy (Uganda DPA 2019 + GDPR)
    terms/page.tsx      # Terms of Service (booking, cancellation, governing law)
  components/
    Navbar.tsx          # Sticky nav, scroll-aware, mobile drawer
    Footer.tsx          # 4-column footer with newsletter
    Logo.tsx            # Logo component (logo-gold.jpg, 1.4:1 aspect ratio)
    HeroCarousel.tsx    # Crossfade image carousel for CTA sections
    HeroVideoCarousel.tsx # Dual-video preloading carousel for homepage hero
    PortfolioGrid.tsx   # Filterable portfolio grid (client component)
    NewsletterForm.tsx  # Newsletter input (client component)
    WhatsAppButton.tsx  # Floating WhatsApp CTA
    AnimateOnScroll.tsx # Scroll-triggered animations
    FAQContent.tsx      # FAQ accordion (client component)
    ContactContent.tsx  # Contact form + info (client component)
    CookieConsent.tsx   # Cookie/analytics consent banner (client component)
    BackgroundVideo.tsx # Mobile-safe autoplay video wrapper
    ClientLogos.tsx     # SVG text-based client logos
    PortfolioCarousel.tsx # Infinite scrolling marquee
  data/
    portfolio-events.ts # 12 event galleries — 8 planning, 4 styling
    blog-posts.ts       # 7 blog posts with heroImages arrays
  lib/
    cdn.ts              # Cloudflare R2 CDN base URL
```

### Testing & CI
- **Test framework**: Vitest + @testing-library/react + jsdom
- **Tests**: 39 tests across 5 files (portfolio data, blog data, API validation, PortfolioGrid, NewsletterForm)
- **CI**: GitHub Actions `.github/workflows/ci.yml` (lint, test, build on push/PR to main)
- **Branch protection**: `main` requires `lint-and-test` status check
- **Staging**: `staging` branch with Vercel preview deployments

### Error Tracking
- **Sentry**: @sentry/nextjs with client/server/edge configs
- **Config files**: `instrumentation-client.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`, `instrumentation.ts` (all project root)
- **Error capture**: error.tsx + global-error.tsx call `Sentry.captureException`
- **Status**: wired but dark until a DSN is supplied. Client init lives in `instrumentation-client.ts` (loaded automatically by Next.js) and `instrumentation.ts` exports `onRequestError`, so client and server errors both have a path to Sentry once `NEXT_PUBLIC_SENTRY_DSN` is set. The documented project `im-advisory/awwf` belongs to a different product

### Environment Variables
Declared in code at `src/lib/env.ts`; documented for new developers in `.env.example`.
Source of truth is the Vercel project — pull with `vercel env pull .env.local`.

| Variable | Required | Environments | Feature it gates |
|---|---|---|---|
| `RESEND_API_KEY` | Yes | Production, Preview, Development | Contact form and newsletter |
| `RESEND_AUDIENCE_ID` | No | Production, Preview, Development | Adding signups to the mailing list |
| `NEXT_PUBLIC_SENTRY_DSN` | No | *not set* | Error reporting |
| `SENTRY_ORG` | No | *not set* | Source map upload at build |
| `SENTRY_PROJECT` | No | *not set* | Source map upload at build |
| `SENTRY_AUTH_TOKEN` | No | *not set* | Source map upload at build |

`requireEnv()` throws a message naming the broken feature and the `vercel env add`
command that fixes it; `optionalEnv()` returns undefined so callers degrade instead.

## Design Inspiration
- **Qrated Event Dubai** — Gold accents, stats section, luxury layout
- **Snapdragon Parties** — Editorial luxury, press mentions
- **Bespoke London** — Minimalist premium, client logos
- **Cherished Moments Uganda** — Gold/pink warmth, local context

## 2026 Web Design Standards Applied
- Kinetic typography feel with bold Playfair Display headings
- Bento-style portfolio grid
- Scroll-aware navigation (transparent → solid)
- Organic shapes and decorative elements
- Mobile-first responsive design
- Generous whitespace and section padding
- Smooth hover transitions and micro-interactions
- WhatsApp integration (common in Uganda/East Africa)

## Services (2 categories)
### 1. Event Planning & Coordination (`#planning`)
- Event Planning, Event Management, Concept Development, Product Launches

### 2. Event Styling & Decor (`#styling`)
- Event Styling, Corporate Gifting

## Clientele
- UEGCL (Uganda Electricity Generation Company Limited)
- Unicaf University
- KCB Bank
- Hima Cement
- Bloomberg Philanthropies
- MAAD McCann

## Development Notes
- Tailwind v4 uses `@theme inline` block in globals.css — NOT tailwind.config.ts
- Client components marked with `"use client"` only where needed (FAQ, Contact, Navbar, WhatsApp, Newsletter, HeroCarousel, HeroVideoCarousel, AnimateOnScroll, PortfolioGrid)
- All pages pre-render as static content
- Base CSS styles wrapped in `@layer base` so Tailwind utilities always override them
- Homepage hero uses HeroVideoCarousel — 3 x 10s clips from different events crossfading (720p, Cloudflare R2)
- All 11 videos hosted on Cloudflare R2 (bucket: modern-charm-videos, public URL: https://pub-9b4e0ecb8d0044128690526d6078afd6.r2.dev)
- Migrated from Vercel Blob (suspended due to free tier bandwidth limits) to R2 (10GB free, zero egress fees)
- HeroCarousel component provides crossfade image carousels on all sub-page heroes
- Services page has 2 anchor IDs (`#planning`, `#styling`) for hash navigation
- Footer service links use hash navigation to scroll to correct service category
- All CTA images deduplicated — 21 unique landscape images across 7 CTA sections, zero cross-page duplicates
- Blog/portfolio data files share some images intentionally (blog articles about events reuse event photos)
- Blog posts have `image` field (listing tiles) and `heroImages` array (detail page hero carousel with 3 images each) — real event photos, no gradient placeholders
- Blog detail pages include OG image and JSON-LD image metadata
- Contact form POSTs to `/api/contact` (Resend API)
- Newsletter form POSTs to `/api/newsletter` (Resend API)

## Team (5 members, from company profile)
- **Philip Higiro** — Team Lead | +256 779 399 409
- **Benjamin Bicung** — Project & Finance Manager | +256 773 043 255
- **Lamuel Mukundenta** — Technical Lead
- **Lillian N. Mulindwa** — Event Manager / Logistics Coordinator
- **Adonia Waibale** — Creative Director

## Contact Details
- Phone: +256 779 399 409 / +256 773 043 255
- Email: info@moderncharmevents.com
- Facebook: moderncharmevents
- Instagram: @moderncharm_events
- Location: Kampala, Uganda

## Brand Fonts
- Brand uses **Avenir LT Std** (Heavy, Medium, Roman) — font files in `public/fonts/`
- Web implementation uses Playfair Display (headings) + Inter (body) via Google Fonts as close web-safe alternatives

## Next Steps / TODO
- [x] ~~Replace placeholder gradients with real event photos~~ — Done (Allan & Pauline wedding, 34 images)
- [x] ~~Add real SVG logo (recreate from logo-reference.png)~~ — Done (Logo.tsx component, integrated in Navbar + Footer)
- [x] ~~Connect contact form to backend~~ — Done (Resend API at /api/contact, needs RESEND_API_KEY env var)
- [x] ~~Connect newsletter to email service~~ — Done (Resend API at /api/newsletter, needs RESEND_API_KEY env var)
- [x] ~~Add real WhatsApp number~~ — Done (Philip's: +256 779 399 409)
- [x] ~~Add real contact info~~ — Done (phones, email, social links)
- [x] ~~Add real team members~~ — Done (Philip & Benjamin)
- [x] ~~Add Google Maps embed on contact page~~ — Removed (contact page redesigned without map)
- [x] ~~Add real portfolio items~~ — Done (Allan & Pauline wedding gallery)
- [x] ~~Add real testimonials~~ — Done (7 real reviews from WhatsApp/Instagram screenshots: Mr. & Mrs. Mugagga Mulindwa, The Senkungus, Oscar & Sandra, Lala T., Noah N., + 2 anonymous WhatsApp reviews)
- [x] ~~Add real team photos~~ — Done (5 professional headshots, center-aligned flexbox grid)
- [x] ~~Verify homepage stats accuracy~~ — Confirmed: 100+ Events, 6+ Years, 50+ Venue Partners
- [x] ~~Add blog post detail pages~~ — Done (7 blog posts with dynamic [slug] routing)
- [x] ~~Implement SEO~~ — Done (metadataBase, sitemap.ts with blog slugs, robots.ts, JSON-LD EventPlanning + LocalBusiness + Article + FAQ schemas, per-page OG/Twitter/canonical tags)
- [x] ~~Add page transition animations~~ — Done (AnimateOnScroll component, CSS scroll animations)
- [x] ~~Performance optimization~~ — Done (AVIF format, image sizes, font trimming, security headers, React Compiler, optimizePackageImports)
- [x] ~~Analytics integration~~ — Done (@vercel/analytics + @vercel/speed-insights)
- [x] ~~Set up RESEND_API_KEY environment variable on Vercel~~ — Done (key set in Vercel production env)
- [x] ~~Verify custom domain in Resend for branded sender emails~~ — Done (moderncharmevents.com verified, sender: noreply@moderncharmevents.com)
- [x] ~~Add RESEND_AUDIENCE_ID for newsletter subscriber management~~ — Done (audience "Modern Charm Newsletter" created, ID set in Vercel production env)
- [ ] Set up Google Business Profile for Modern Charm Uganda (enables Google Reviews) — requires manual identity verification by client
- [x] ~~Submit sitemap to Google Search Console~~ — Done (GSC set up, sitemap URLs migrated to moderncharmevents.com)

## Progress Log
- **2026-02-24**: Initial build — complete website with 9 pages, all components, deployed to Vercel
- **2026-02-24**: Integrated real business card data — contact info, team members, social links, WhatsApp number, brand fonts organized
- **2026-02-24**: Downloaded 34 photos from Allan & Pauline wedding (Google Drive), optimized for web, integrated across Homepage (hero, about, portfolio, stats, CTA), About page, Services page, and Portfolio page
- **2026-02-25**: Added Oscar & Sandra (40 images) and Wedding Highlights (25 images) photo galleries
- **2026-02-25**: Integrated 3 video reels on homepage via Vercel Blob CDN — hero (reel-2), stats parallax (reel-1), CTA (reel-3 cropped to remove watermark)
- **2026-02-25**: Created HeroCarousel component with crossfade transitions for all sub-page hero sections
- **2026-02-25**: Fixed hero heading color — moved base CSS into `@layer base` so `text-accent-light` (gold) renders correctly over Tailwind v4's cascade
- **2026-02-25**: Reduced all video/image overlay opacity by ⅓ across all pages for better media visibility
- **2026-02-25**: Full link/button audit across all pages — fixed 6 broken service anchor links, updated footer service links, removed non-functional "View Project" from portfolio hover overlay
- **2026-02-25**: Accessibility audit — 42+ fixes across 15 files (aria labels, roles, heading hierarchy, focus management, keyboard navigation)
- **2026-02-25**: WCAG 2.2 AA color contrast audit — darkened accent-dark (#A87A4A → #855E2E, 5.77:1 on white) and muted (#6B7280 → #5F6570, 5.05:1 on cream-dark), updated all text-accent/bg-accent usages across 16 files, 18/18 combinations pass
- **2026-02-25**: Deep contrast audit via Vercel accessibility checker — changed all hero headings from text-accent-light to text-white (accent-light fails on semi-transparent overlays), bumped footer text from white/85 to white, fixed hover:text-accent-light → hover:text-white in footer links, fixed navbar mobile active link contrast, fixed newsletter input placeholder contrast, fixed all text-white/80 instances across 13 files
- **2026-02-25**: Funky WhatsApp button — replaced generic MessageCircle with WhatsApp SVG logo, always-visible "Let's chat!" speech bubble with wiggle + float animations, Modern Charm brand colors (gold button, teal bubble), compact footer spacing (~100px savings)
- **2026-02-25**: Vercel 2026 production audit — full compliance: CSP + HSTS + DNS-Prefetch headers, React Compiler + Strict Mode, optimizePackageImports, canonical URLs on all pages, per-page OG/Twitter tags, blog posts in sitemap, Article + LocalBusiness JSON-LD schemas, global-error.tsx, fixed pricing heading hierarchy, extracted Portfolio into server component for metadata
- **2026-02-25**: Contact page redesign — removed Google Maps, added horizontal contact info bar + "What Happens Next?" process steps sidebar
- **2026-02-25**: About page polish — removed mission/vision numbering, matched CTA overlay to hero opacity, swapped CTA to landscape image
- **2026-02-25**: Footer compacted — tighter spacing throughout (py, gap, space-y), original font sizes preserved
- **2026-02-25**: Client readiness audit — removed "Coming Soon" blog section + "Featured Image" text, removed 4 gradient placeholder portfolio items, deleted boilerplate SVGs + business-cards.pdf, removed console.error from API routes, cleaned placeholder comments, fixed unused import in Navbar
- **2026-02-26**: Major company profile integration — extracted 5 team photos from PDF (Philip Higiro, Benjamin Bicung, Lamuel Mukundenta, Lillian N. Mulindwa, Adonia Waibale), rewrote About page (mission/vision/values from PDF, 5-step "How We Work" process, "Trusted By" clientele section), rewrote Services page (6 offerings: Event Planning, Styling, Management, Concept Development, Corporate Gifting, Product Launches), updated Homepage (6+ years stat, clientele section, updated about text, updated CTAs), removed Pricing and Portfolio pages, updated Navbar/Footer/sitemap/metadata
- **2026-02-26**: Added 25 new event photos from Google Drive — David & Michelle wedding (8 photos), Lorna's Kuhingira ceremony (14 photos), Allan & Pauline styling (3 photos). All images optimized for web (max 2400px, quality 82)
- **2026-02-26**: Restructured services into 2 main categories: (1) Event Planning & Coordination (planning, management, concept development, product launches) (2) Event Styling & Decor (styling, corporate gifting). Updated homepage, footer, and all service links
- **2026-02-26**: Full image deduplication — audited all 40+ image references across 8 files, replaced all duplicates with unique images from expanded collection. Each page now uses completely unique images
- **2026-02-26**: Resized all 167 images to max 1600px (team photos 800px) at quality 80 — 58.6 MB → 34.8 MB (41% reduction), average 213 KB per image
- **2026-02-26**: Replaced all placeholder testimonials with 7 real client reviews extracted from WhatsApp/Instagram screenshots — featured: Mr. & Mrs. Mugagga Mulindwa, grid: The Senkungus, Oscar & Sandra, Lala T., Noah N., + 2 anonymous. Updated both testimonials page and homepage
- **2026-02-26**: Replaced blog gradient placeholders with real event photos — added `image` field to BlogPost interface, assigned unique photos to all 7 posts (matched to article content), updated listing tiles + detail page heroes with next/image, added OG image + JSON-LD image metadata
- **2026-02-26**: Blog article heroes now use HeroCarousel with 3 crossfade images each (heroImages array), matching the carousel pattern on all other sub-pages. 21 unique unused images assigned across 7 posts
- **2026-02-26**: Replaced team photos with professional headshots (user-provided), converted Benjamin's PNG to JPG, optimized all to 800px/quality 80. Team grid switched from CSS Grid to flexbox with justify-center for centered last row
- **2026-02-26**: Homepage hero now plays clips from 6 different events (HeroVideoCarousel component). Trimmed 10s clips from Allan & Pauline, David & Michelle, Lorna's Kuhingira, Chris & Philomera, Rayner & Racheal, Turitwenkas — compressed to 720p (~15 MB total), uploaded to Vercel Blob CDN, crossfade between clips on ended
- **2026-02-26**: Created portfolio page with filterable grid (All/Planning/Styling) and 8 event detail pages with image galleries, prev/next navigation, and CTAs. New files: `src/data/portfolio-events.ts`, `src/components/PortfolioGrid.tsx`, `src/app/portfolio/page.tsx`, `src/app/portfolio/[slug]/page.tsx`
- **2026-02-26**: Fixed homepage hero video glitch — removed poster image, videos now play directly without flash
- **2026-02-26**: Integrated 4 official logo files (logo-gold.jpg, logo-color.jpg, logo-white.jpg, logo-dark.jpg). Logo.tsx uses logo-gold.jpg with 1.4:1 aspect ratio container + object-contain
- **2026-02-26**: Recategorized portfolio from wedding/traditional/styling to planning/styling (matching service categories). Removed client names from titles (e.g., "Allan & Pauline" → "Lavender Garden Wedding")
- **2026-02-26**: Homepage Featured Work: replaced hardcoded PortfolioCarousel with data-driven grid from portfolio-events.ts
- **2026-02-26**: CTA landscape audit — replaced 8 portrait images with landscape alternatives across 7 CTA sections. All 21 CTA images now unique, zero cross-page duplicates
- **2026-02-26**: Fixed HeroCarousel image cropping — changed object-[center_25%] to object-center for balanced display
- **2026-02-26**: Expanded Rayner & Rachael portfolio from 2 to 31 curated images (selected from 908 originals). Full wedding coverage: bridal prep, church ceremony, couple portraits, venue decor, cake, reception, golden-hour garden shots. Renamed to "Colorful Chandelier Reception". All images resized to 1600px max, quality 80 (7.1 MB total). Removed 267 MB raw source folder.
- **2026-02-26**: CTA image positioning — shifted all HeroCarousel objectPosition and video objectPosition from "center 20%" to "center 35%" across all 7 CTA sections + homepage CTA video + FAQ hero video for better lower-body framing
- **2026-02-26**: Homepage Featured Work — converted static 3-column grid to infinite horizontal scrolling marquee (PortfolioCarousel client component, CSS @keyframes marquee, pauses on hover, respects prefers-reduced-motion)
- **2026-02-26**: Portfolio categorization audit — recategorized 4 events based on actual image content: wedding-highlights (styling→planning), lornas-kuhingira (planning→styling), david-michelle (planning→styling), sammy-lala (planning→styling). Now balanced: 4 planning + 4 styling
- **2026-02-26**: Responsive optimization — 14 fixes across 12 files: stats font/gap scaling, navbar CTA breakpoint alignment (xl), WhatsApp bubble hidden on xs, about section overflow-hidden, testimonial stagger at lg, blog featured image min-height, FAQ answer padding, services list breakpoint, portfolio nav title truncation, contact CTA touch target + spacing, newsletter button min 44px, footer link touch targets (py-1.5)
- **2026-02-26**: Portfolio detail CTA — upgraded from plain bg-primary-dark to HeroCarousel with 3 images from the current event (event.images.slice(-3))
- **2026-02-27**: Migrated all 11 videos from Vercel Blob (suspended — free tier bandwidth exceeded) to Cloudflare R2 (10GB free, zero egress). Re-trimmed clips from source videos at 720p/CRF28. R2 bucket: modern-charm-videos
- **2026-02-27**: Fixed video autoplay across all 9 files — changed `preload="metadata"` to `preload="auto"` (downloads video data, not just metadata), replaced `<source>` child elements with direct `src` attribute (more reliable for autoplay), added `autoPlay` to HeroVideoCarousel
- **2026-02-27**: Fixed CSP `media-src` header — was still pointing to old Vercel Blob domain, blocking all R2 video URLs. Updated to allow `pub-*.r2.dev`
- **2026-02-27**: Created `BackgroundVideo` client component for reliable mobile autoplay — sets `video.muted = true` via JS property (iOS Safari ignores HTML attr), calls `play()` on mount with `.catch()`, IntersectionObserver to pause/resume offscreen videos. Replaced all 7 inline `<video>` elements across pages. Applied same fixes to HeroVideoCarousel
- **2026-02-27**: 2026 standards audit — critical and high priority fixes:
  - **Security**: Rate limiting on API routes (5/hr contact, 3/hr newsletter), HTML-escape XSS prevention, eventType whitelist validation, phone/email/length validation, npm audit fix (minimatch ReDoS)
  - **CSP**: Added `api.resend.com` to connect-src, added `Disallow: /api/` to robots.txt
  - **SEO**: JSON-LD Review + AggregateRating schema on testimonials page (7 reviews, 5.0 avg)
  - **Infra**: Centralized R2 CDN URL in `src/lib/cdn.ts` (was hardcoded in 8 files)
  - **UX**: Enhanced not-found.tsx with metadata and Contact Us link
- **2026-02-28**: 2026 standards audit — medium priority fixes:
  - **SEO**: OG/Twitter images on all 7 sub-pages, blog detail publishedTime/modifiedTime/tags, BreadcrumbList JSON-LD on portfolio + blog detail pages, Service JSON-LD with OfferCatalog on services page
  - **Accessibility**: PortfolioGrid aria-controls + tabpanel role, contact form maxLength attributes
  - **Performance**: Preconnect/dns-prefetch for R2 CDN, TypeScript target ES2022
  - **Standards**: color-scheme: light (CSS + viewport meta), X-Robots-Tag noindex on API routes, sitemap dates updated to 2026-02-27
- **2026-02-28**: Content updates — corrected Lamuel Mukundenta surname, updated contact email to info@moderncharmevents.com (6 files), removed budget range from contact form + API route
- **2026-03-02**: Generated favicon set from logo — favicon.ico (32x32), apple-touch-icon.png (180x180), PWA icons (192x192, 512x512). Updated layout.tsx icons metadata + manifest.ts
- **2026-03-02**: Set up RESEND_API_KEY on Vercel production, domain verified in Resend
- **2026-03-02**: Domain migration — replaced all `modern-charm.vercel.app` URLs with `moderncharmevents.com` across 12 source files (sitemap, robots, layout, all page metadata/canonical/OG/JSON-LD). Fixes Google Search Console "URL not allowed" errors
- **2026-03-02**: Removed specific package prices from FAQ (pricing is now case-by-case per client needs)
- **2026-03-02**: Updated Resend sender from `onboarding@resend.dev` to `noreply@moderncharmevents.com` (branded domain verified)
- **2026-03-02**: Created Resend audience "Modern Charm Newsletter" (ID: 3bed8a42-857d-41a6-998a-314e0cad9a5a), set RESEND_AUDIENCE_ID on Vercel production. Newsletter subscribers now tracked automatically
- **2026-03-02**: Force deployed twice to Vercel production — all env vars (RESEND_API_KEY, RESEND_AUDIENCE_ID) active
- **2026-03-03**: Site rated 9/10 for client handover readiness. Only remaining item: Google Business Profile (requires client's manual identity verification with Google)
- **2026-03-03**: Fixed browser tab favicon — `src/app/favicon.ico` (default Vercel triangle from create-next-app) was overriding `public/favicon.ico`. Replaced with Modern Charm logo favicon. Force deployed.
- **2026-03-05**: Added 5 new corporate portfolio events — PSFU Business Summit (8 images), Hima Cement Corporate Event (8 images), Bloomberg Philanthropies Launch (10 images), Unicaf University Conference (10 images), and Romantic Garden Celebration / Phil & Pesh (13 images). All corporate events under `category: "planning"`.
- **2026-03-05**: Removed Allan & Pauline couple entry from portfolio (all images showed the couple). Expanded allan-pauline-styling with 5 new WhatsApp decor images (now 8 total). Portfolio now has 12 events total (7 planning + 5 styling).
- **2026-03-05**: Removed all Allan couple image/video references across 11 source files — homepage hero video, about CTA, services CTA, portfolio OG images, testimonials hero video, blog post #6 content & images, FAQ answer text. Replaced with decor/corporate alternatives.
- **2026-03-05**: Replaced `about-couple.jpg` and `hero-wedding.jpg` on disk with Lorna's Kuhingira decor shots. Updated homepage about section alt text.
- **2026-03-05**: Updated corporate blog post (#4) images to use real PSFU/Hima/Bloomberg/Unicaf photos. Updated FAQ to mention corporate clients.
- **2026-03-05**: Sitemap dates updated to 2026-03-05. New portfolio slugs auto-included via dynamic sitemap generation.
- **2026-03-05**: Image positioning — PSFU hero at `center 20%`, Unicaf hero + CTA at `center 20%`, blog hero per-image positions via `heroImagePositions` map in blog/[slug]/page.tsx. HeroCarousel now supports `imagePositions?: string[]` prop for per-image overrides.
- **2026-03-06**: Full image deduplication audit — replaced homepage about image with bride portrait (IMG_0932), swapped 30+ images across 9 files to eliminate all cross-page duplicates. Every non-portfolio-detail image is now unique sitewide. About story uses bridal party (IMG_0883), services uses grand venue (IMG_2411) + sage floral styling (7b7a9560), all CTA/OG images unique per page, blog post listing/hero images all use unused gallery shots.
- **2026-03-06**: Aesthetic refinements (4-phase plan) — h1/h2 letter-spacing (0.025em), section-divider CSS class (gold gradient accent lines), simplified CTA overlays to 2-stop gradients across 8 pages, AnimateOnScroll on homepage stats/services/testimonials, form focus bg-cream shift, FAQ accordion padding increase, team card hover shadows, portfolio gallery mobile fix, blog prose typography, section dividers on About + Services pages.
- **2026-03-30**: Added Privacy Policy (/privacy) and Terms of Service (/terms) pages. Privacy covers Uganda DPA 2019 + GDPR, data collection (contact form, newsletter, Vercel Analytics), Resend as processor. Terms cover booking (40% deposit), cancellation tiers (60/30 day), IP rights, force majeure, governing law (Uganda). Added footer quick links + sitemap entries. Build clean, 10 pages total.
- **2026-03-30**: Full Mbaba App Audit — 65-criterion audit across Design System, Security, Engineering, and Deployment. Score: 35.5/48 (74%) initial → remediation pushed to 9/10.
- **2026-03-30**: Audit remediation — design token fixes:
  - Replaced all hardcoded hex/font values in global-error.tsx + ClientLogos.tsx with CSS variables
  - Fixed fontWeight 800 → 700 in ClientLogos (Inter max weight)
  - Replaced bg-[#2D5B52] with bg-primary-dark in homepage CTA
  - Extracted `.drop-shadow-hero` CSS utility class (replaced in 10 files)
- **2026-03-30**: Audit remediation — security & monitoring:
  - Integrated @sentry/nextjs (client/server/edge configs, error capture in error.tsx + global-error.tsx, instrumentation.ts, withSentryConfig wrapper)
  - Updated Next.js from 16.1.6 → 16.2.1 (HTTP smuggling CVE fix)
  - Added CookieConsent component (localStorage-based, non-intrusive bottom banner, links to /privacy)
- **2026-03-30**: Audit remediation — testing & CI:
  - Added Vitest + @testing-library/react + jsdom + @testing-library/jest-dom
  - 39 tests across 5 files: portfolio data (9), blog data (5), API validation (13), PortfolioGrid component (6), NewsletterForm component (6)
  - GitHub Actions CI workflow (.github/workflows/ci.yml): lint, test, build on push/PR
  - Branch protection enabled on main requiring lint-and-test status check
- **2026-03-30**: Optical centering audit — all images across all pages:
  - Replaced 5 portrait OG images with landscape alternatives (Services, Blog, FAQ, Testimonials, Contact)
  - Fixed broken Contact OG reference (IMG_3097.jpg didn't exist → table-decor-detail.jpg)
  - Fixed Privacy + Terms hero carousels (referenced non-existent image folders → real assets)
  - Homepage about image: center_35% → center_40% (bride face at ~40%)
  - About story image: center_30% → center_40% (bridal party faces)
  - Services page: per-category imagePosition (planning center 20% for chandeliers, styling center 30% for florals)
  - Homepage CTA video: center 15% → center 30% (show people not ceiling)
  - FAQ hero video: center 15% → center 25% (less tight crop)
  - Portfolio hero positions refined: PSFU 20%→35%, Unicaf 20%→35%, Oscar&Sandra 40%→45%, David&Michelle 30%→35%
  - Added heroPosition to Lorna's Kuhingira (center 40%) and Sammy & Lala (center 35%)
  - Added coverPosition field to PortfolioEvent interface + PortfolioGrid/PortfolioCarousel components
  - Rayner & Racheal cover: added coverPosition center 40% for portrait image in landscape grid
- **2026-03-30**: Oscar & Sandra gallery — added imagePositions for 7 portrait images (indices 1,3,4,5,6,9,10) with face-aware centering (25-55%)
- **2026-03-30**: Phil & Pesh gallery — added imagePositions for 7 portrait images (indices 2,3,4,6,7,9,11) with face-aware centering (25-30%)
- **2026-03-30**: Newsletter consent — added explicit opt-in checkbox ("I agree to receive...") to NewsletterForm
- **2026-03-30**: Structured API logging — added console.error/warn/info with [contact]/[newsletter] prefixes to both API routes (replacing silent catch blocks)
- **2026-03-30**: Staging branch created and pushed to GitHub (Vercel auto-creates preview deployments)
- **2026-03-30**: Sentry project created on sentry.io (im-advisory/awwf) — DSN env vars not yet set on Vercel (requires interactive CLI login)
- **2026-04-11**: **Fluid Glass rework** (inspired by fluid.glass — architectural minimal glassmorphism). On staging branch.
  - Design tokens: added `--color-near-black` (#0F1513), `--color-dark-teal` (#1A2F2A), `--color-ink` (#0B1012), glass variables, JetBrains Mono family, easing curves. Tightened h1/h2 tracking from 0.025em → -0.02em.
  - New utilities in globals.css: `.glass-pill`, `.glass-card`, `.glass-card-teal`, `.label-mono`, `.label-mono-sm`, `.h-display`, `.section-pin`, `.line-mask`, `.btn-fluid-*` (dark/gold/glass/outline/alpha), `.hairline`, `.bg-near-black`, `.bg-dark-teal`, `.bg-ink`.
  - **Motion layer**: `SmoothScroll.tsx` wraps content in Lenis (v1.3.21, `anchors: true`), `CustomCursor.tsx` (desktop-only pill cursor with `data-cursor-label` API), `LoadingIntro.tsx` (sessionStorage-gated MC monogram intro, 1.5s rotate + 600ms fade). All respect `prefers-reduced-motion`.
  - **Navbar**: floating bottom-center glass pill on desktop (4 primary links + overflow), top glass bar + full-screen overlay menu on mobile. `data-cursor-label` on every link.
  - **Footer**: full-width near-black with masked "MODERN CHARM" wordmark backdrop, 4-column editorial grid (Brand / Navigate / Services / Stay Inspired). Bottom padding clears floating nav.
  - **All 10 pages restyled** with cream → dark-teal → near-black section progression, editorial `clamp()` headlines, mono labels ("Services / 03"), sharp corners everywhere. Data, metadata, JSON-LD (EventPlanning, LocalBusiness, Service, Article, FAQPage, Review+AggregateRating, BreadcrumbList) preserved exactly.
  - **Components restyled**: PortfolioGrid, PortfolioCarousel (4:5 cards, mono tags, glass filter tabs), ContactContent (editorial floating-label form), FAQContent (Plus/Minus glass accordion), NewsletterForm (dark-bg variant), CookieConsent (glass-pill at bottom-left), WhatsAppButton (glass pill), ClientLogos (mono treatment), AnimateOnScroll (new `variant="line-mask"` for line reveals).
  - **Cleanup**: removed orphaned `@vercel/blob` from package.json (unused since R2 migration).
  - **Tests**: all 39 vitest tests still pass. PortfolioGrid photo-count test updated to use text match instead of brittle CSS class selector.
  - **Lint**: two intentional eslint-disables — `react-hooks/set-state-in-effect` on Navbar pathname→close effect (textbook sync), and `@next/next/no-html-link-for-pages` on `<a href="/">` in global-error.tsx (Link unavailable outside layout tree).
  - **Build**: passes clean. 37 static pages generated. Deployed to `staging` branch.
- **2026-08-23**: Favicon rebuilt from the monogram. The old icon set was the full logo lock-up (monogram + two-line wordmark) scaled into a square, so at 32px it rendered as an indistinct copper blob over two grey bars and at 16px had no recoverable form.
  - Monogram redrawn as vector, geometry measured off `public/images/logo-gold.jpg`: two concentric rings sharing one centre, `R_inner = 2/3 R_outer`, stroke `R/8`, outer arcs opening 34.6° either side of top and 44° either side of bottom, mitred peaks, a flat-cut V, and an inner ring broken between 27.9° and 113.3° clockwise from top (the C).
  - **Two drawings, one mark**: 48px and above carry the full three-element monogram; 32px and below carry the M alone at 1.45× stroke, because the inner ring collides with the V below 48px. The `.ico` holds a different drawing per resolution (16, 32, 48).
  - Colourway is the lock-up's own — near-black `#0F1513` field, gold `#C4915C` mark.
  - New assets: `public/icons/icon.svg` (vector master), `public/icons/maskable-512x512.png` (Android adaptive; the manifest previously declared none, so Android cropped a square icon and clipped the mark). Replaced `favicon.ico` (both copies), `apple-touch-icon.png`, both `favicon-*.png` and both `icon-*.png`.
  - `metadata.icons` in layout.tsx no longer repeats `/favicon.ico` — the App Router file convention emits it from `src/app/favicon.ico` automatically, and declaring it twice produced duplicate `<link>` tags.
- **2026-08-23**: Vercel environment cleanup.
  - **Deleted the orphaned Vercel Blob storage.** `BLOB_READ_WRITE_TOKEN` was still injected into Production and Preview, and the store `modern-charm-videos` (`store_6jbLCDD6pq0sUC42`) was still Active with 18 files / 85.66 MB, 179 days after the migration to Cloudflare R2 removed `@vercel/blob` from the project. Nothing read either. All 18 blobs were archived first to `modern-charm-assets/videos/vercel-blob-archive/` (outside the repo), then the variable was removed and both stores deleted — a second, empty duplicate store `store_utntpCxKU6fzxkzm` also existed.
  - **Resend keys extended to Preview and Development.** They had been Production-only, so `/api/contact` and `/api/newsletter` threw on every preview and staging deployment and could not be exercised by `npm run dev`.
  - **Sentry wiring corrected.** `sentry.client.config.ts` was imported by no file, so browser errors could never reach Sentry even with a DSN set; renamed to `instrumentation-client.ts`, which Next.js loads automatically, and it now also exports `onRouterTransitionStart`. `instrumentation.ts` now exports `onRequestError = Sentry.captureRequestError`, without which Server Component and route-handler errors go unreported. Still dark until a DSN is supplied.
  - Added `src/lib/env.ts` and `.env.example`; both API routes now read Resend config through it instead of duplicating an inline check.
  - `next.config.ts`: dropped the deprecated `disableLogger` (it warned twice on every production build and its replacement is unsupported under Turbopack), added `authToken`, and gated source-map upload on that token so credential-less builds stay warning-free.
- **2026-08-23**: Full app audit (`ismail-app-audit`, full mode) at commit `82429e8` — **74.7%** weighted, zero P0 and zero P1 failures, but below the 80% release bar. State written to `.mbaba-audit/last-run.json` (gitignored). Corrected three claims in this file that the code contradicted: the portfolio split is 8 planning / 4 styling (not 7/5), three Google fonts load (not two), and `modern-charm.vercel.app` returns 404.

## Obsidian command center (vault mirror)

This project is represented in a cross-project Obsidian vault (the "command center") at `~/Downloads/mbabas-projects/_command-center`, a sibling of the `modern-charm` folder under `mbabas-projects`. The vault holds `Projects/modern-charm.md` (the project hub) and an area note at `Areas/Software Portfolio`. The vault is a read and coordination layer; the work here stays the source of truth. When something material changes, update the hub note or ask Claude to.
