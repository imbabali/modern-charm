# Modern Charm Uganda - Project Documentation

## Project Overview
Website for **Modern Charm Limited** (@moderncharm_events) — a premier event management company based in Kampala, Uganda. Tagline: *"Some are born with it, others work for it! Then there's us, the ones who make charm happen!"*

## Live URLs
- **Production**: https://modern-charm.vercel.app
- **GitHub**: https://github.com/imbabali/modern-charm
- **Instagram**: https://www.instagram.com/moderncharm_events/

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-based config, no tailwind.config.ts)
- **Language**: TypeScript
- **Icons**: lucide-react
- **Fonts**: Playfair Display (headings) + Inter (body) via next/font/google
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
    portfolio/page.tsx  # Filterable portfolio grid (All/Planning/Styling)
    portfolio/[slug]/page.tsx # Event detail page with image gallery
    testimonials/page.tsx # Client stories + featured testimonial
    blog/page.tsx       # Journal/blog listing
    blog/[slug]/page.tsx # Blog post detail with HeroCarousel
    faq/page.tsx        # Accordion FAQ (client component)
    contact/page.tsx    # Contact form + info (client component)
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
  data/
    portfolio-events.ts # 8 event galleries with categories (planning/styling)
    blog-posts.ts       # 7 blog posts with heroImages arrays
```

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
- **Lamuel Mukendenta** — Technical Lead
- **Lillian N. Mulindwa** — Event Manager / Logistics Coordinator
- **Adonia Waibale** — Creative Director

## Contact Details
- Phone: +256 779 399 409 / +256 773 043 255
- Email: moderncharm30@gmail.com
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
- [ ] Verify homepage stats accuracy (500+ Events, 6+ Years, 50+ Venue Partners)
- [x] ~~Add blog post detail pages~~ — Done (7 blog posts with dynamic [slug] routing)
- [x] ~~Implement SEO~~ — Done (metadataBase, sitemap.ts with blog slugs, robots.ts, JSON-LD EventPlanning + LocalBusiness + Article + FAQ schemas, per-page OG/Twitter/canonical tags)
- [x] ~~Add page transition animations~~ — Done (AnimateOnScroll component, CSS scroll animations)
- [x] ~~Performance optimization~~ — Done (AVIF format, image sizes, font trimming, security headers, React Compiler, optimizePackageImports)
- [x] ~~Analytics integration~~ — Done (@vercel/analytics + @vercel/speed-insights)
- [ ] Set up RESEND_API_KEY environment variable on Vercel for contact form + newsletter
- [ ] Verify custom domain (moderncharmuganda.com) in Resend for branded sender emails
- [ ] Add RESEND_AUDIENCE_ID for newsletter subscriber management
- [ ] Set up Google Business Profile for Modern Charm Uganda (enables Google Reviews)
- [ ] Submit sitemap to Google Search Console (https://modern-charm.vercel.app/sitemap.xml)

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
- **2026-02-26**: Major company profile integration — extracted 5 team photos from PDF (Philip Higiro, Benjamin Bicung, Lamuel Mukendenta, Lillian N. Mulindwa, Adonia Waibale), rewrote About page (mission/vision/values from PDF, 5-step "How We Work" process, "Trusted By" clientele section), rewrote Services page (6 offerings: Event Planning, Styling, Management, Concept Development, Corporate Gifting, Product Launches), updated Homepage (6+ years stat, clientele section, updated about text, updated CTAs), removed Pricing and Portfolio pages, updated Navbar/Footer/sitemap/metadata
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
- **2026-02-27**: Created `BackgroundVideo` client component for reliable mobile autoplay — sets `video.muted = true` via JS property (iOS Safari ignores HTML attr), calls `play()` on mount with `.catch()`, IntersectionObserver to pause/resume offscreen videos, `#t=0.001` media fragment for first-frame render on iOS. Replaced all 7 inline `<video>` elements across pages. Applied same fixes to HeroVideoCarousel
