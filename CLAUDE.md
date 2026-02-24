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
| Dark Gold | `#A87A4A` | `accent-dark` | Hover on gold elements |
| Cream | `#FDFAF6` | `cream` | Page backgrounds |
| Dark Cream | `#F5EDE3` | `cream-dark` | Card backgrounds, sections |
| Dark | `#1A1A1A` | `dark` | Body text |
| Muted | `#6B7280` | `muted` | Secondary text |

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
- Client components marked with `"use client"` only where needed (Portfolio, FAQ, Contact, Navbar, WhatsApp, Newsletter)
- All pages pre-render as static content
- Images are currently placeholders (CSS gradients) — to be replaced with real photos
- Contact form is UI-only — needs backend integration
- Newsletter form is UI-only — needs email service integration

## Next Steps / TODO
- [ ] Replace placeholder gradients with real event photos
- [ ] Add real SVG logo (recreate from logo-reference.png)
- [ ] Connect contact form to backend (e.g., Resend, EmailJS)
- [ ] Connect newsletter to email service (e.g., Mailchimp, ConvertKit)
- [ ] Add real WhatsApp number
- [ ] Add Google Maps embed on contact page
- [ ] Add real testimonials and portfolio items
- [ ] Add blog post detail pages
- [ ] Implement SEO (meta tags per page, sitemap, robots.txt)
- [ ] Add page transition animations
- [ ] Performance optimization (image optimization, lazy loading)
- [ ] Analytics integration (Google Analytics, Vercel Analytics)

## Progress Log
- **2026-02-24**: Initial build — complete website with 9 pages, all components, deployed to Vercel
