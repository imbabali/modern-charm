# Modern Charm Uganda - Project Documentation

## Project Overview
Website for **Modern Charm Uganda** (@moderncharm_events) — a full-service event styling & decor company based in Kampala, Uganda. Tagline: *"Some are born with it, others work for it! Then there's us, the ones who make charm happen!"*

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
- MC monogram in gold/copper on teal background
- "MODERN CHARM" wordmark in white/cream
- Reference image: `public/images/logo-reference.png`

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout (Navbar + Footer + WhatsApp)
    page.tsx            # Homepage (7 sections)
    globals.css         # Tailwind theme + custom styles
    about/page.tsx      # Company story, team, mission
    services/page.tsx   # 6 service categories with details
    portfolio/page.tsx  # Filterable project gallery (client component)
    testimonials/page.tsx # Client stories + featured testimonial
    blog/page.tsx       # Journal/blog listing
    pricing/page.tsx    # 3 pricing tiers + add-ons
    faq/page.tsx        # Accordion FAQ (client component)
    contact/page.tsx    # Contact form + info (client component)
  components/
    Navbar.tsx          # Sticky nav, scroll-aware, mobile drawer
    Footer.tsx          # 4-column footer with newsletter
    NewsletterForm.tsx  # Newsletter input (client component)
    WhatsAppButton.tsx  # Floating WhatsApp CTA
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

## Services Covered
1. Wedding Styling & Decor
2. Corporate Events
3. Traditional Ceremonies (Kwanjula & Kuhingira)
4. Birthday & Anniversary Celebrations
5. Bridal Showers & Baby Showers
6. Event Planning & Coordination

## Pricing Tiers
- **Essential Charm**: From 2,000,000 UGX (up to 100 guests)
- **Premium Charm**: From 5,000,000 UGX (up to 250 guests)
- **Grand Charm**: From 12,000,000 UGX (unlimited guests)

## Development Notes
- Tailwind v4 uses `@theme inline` block in globals.css — NOT tailwind.config.ts
- Client components marked with `"use client"` only where needed (PortfolioContent, FAQ, Contact, Navbar, WhatsApp, Newsletter, HeroCarousel, AnimateOnScroll)
- Portfolio page uses server component wrapper (metadata) + PortfolioContent client component (filtering)
- All pages pre-render as static content
- Base CSS styles wrapped in `@layer base` so Tailwind utilities always override them
- 3 video reels hosted on Vercel Blob CDN (hero, stats parallax, CTA on homepage)
- HeroCarousel component provides crossfade image carousels on all sub-page heroes
- Services page sections have anchor IDs (`#weddings`, `#corporate`, `#traditional`, `#birthdays`, `#showers`, `#planning`) for hash navigation
- Homepage service cards and footer service links use hash navigation to scroll to correct service
- Contact form POSTs to `/api/contact` (Resend API)
- Newsletter form POSTs to `/api/newsletter` (Resend API)

## Team
- **Philip Travis Higiro** — Events Director | +256 779 399 409
- **Benjamin Bicung** — Business Development | +256 775 826 795

## Contact Details
- Phone: +256 779 399 409 / +256 775 826 795
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
- [x] ~~Add Google Maps embed on contact page~~ — Done (Kampala, Uganda iframe embed)
- [x] ~~Add real portfolio items~~ — Done (Allan & Pauline wedding gallery)
- [ ] Add real testimonials
- [x] ~~Add blog post detail pages~~ — Done (7 blog posts with dynamic [slug] routing)
- [x] ~~Implement SEO~~ — Done (metadataBase, sitemap.ts with blog slugs, robots.ts, JSON-LD EventPlanning + LocalBusiness + Article + FAQ schemas, per-page OG/Twitter/canonical tags)
- [x] ~~Add page transition animations~~ — Done (AnimateOnScroll component, CSS scroll animations)
- [x] ~~Performance optimization~~ — Done (AVIF format, image sizes, font trimming, security headers, React Compiler, optimizePackageImports)
- [x] ~~Analytics integration~~ — Done (@vercel/analytics + @vercel/speed-insights)
- [ ] Set up RESEND_API_KEY environment variable on Vercel for contact form + newsletter
- [ ] Verify custom domain (moderncharmuganda.com) in Resend for branded sender emails
- [ ] Add RESEND_AUDIENCE_ID for newsletter subscriber management

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
