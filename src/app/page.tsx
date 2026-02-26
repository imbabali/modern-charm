import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Palette,
  Quote,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import HeroVideoCarousel from "@/components/HeroVideoCarousel";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ClientLogos from "@/components/ClientLogos";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video carousel — clips from multiple events */}
        <HeroVideoCarousel
          clips={[
            "https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/hero-clips/clip-allan-pauline-1z6j4pUI2pONw0zp6DePgi7dxlmVgD.mp4",
            "https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/hero-clips/clip-david-michelle-GP83vWF5U9gnpiz2Pa5AAVb0GT3qhR.mp4",
            "https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/hero-clips/clip-lornas-kuhingira-2AliKKXbOCPCopwOviA5iPTUT6X8AM.mp4",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/27 to-black/47" />

        {/* Decorative floating shapes */}
        <div className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-32 h-56 w-56 rounded-full bg-accent-light/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 h-1 w-24 rotate-45 bg-accent/30" />
        <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-1 w-16 -rotate-12 bg-accent/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Small tagline above heading */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-accent" />
            <span className="font-body text-sm tracking-[0.25em] font-medium text-white uppercase">
              Premium Event Styling
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h1 className="font-heading text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Where Charm{" "}
            <span className="italic text-accent-light">Meets</span>
            <br />
            Celebration
          </h1>

          <p className="font-body mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Premium event styling &amp; d&eacute;cor for weddings, corporate
            events, and unforgettable celebrations across Uganda.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="font-body group inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:border-accent-light hover:bg-white/5 hover:text-accent-light"
            >
              Our Services
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="font-body inline-flex items-center gap-2 rounded-full bg-accent-dark px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/25"
            >
              Book a Consultation
              <Sparkles aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — ABOUT PREVIEW
          ================================================================ */}
      <section aria-label="About us" className="bg-cream px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — About image */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about-couple.jpg"
                alt="Couple portrait under floral arch styled by Modern Charm Uganda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_35%]"
                quality={85}
              />
              {/* Inner decorative frame */}
              <div className="absolute inset-6 rounded-xl border border-accent/30" />
            </div>
            {/* Floating decorative accent box */}
            <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-xl bg-accent/15 -z-10 lg:-right-6 lg:-bottom-6 lg:h-40 lg:w-40" />
          </div>

          {/* Right — About text */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-accent-dark uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-heading text-4xl leading-snug font-bold text-dark sm:text-5xl">
              Welcome to{" "}
              <span className="text-primary">Modern Charm</span>
            </h2>

            {/* Gold decorative divider */}
            <div className="my-6 flex items-center gap-2">
              <span className="h-0.5 w-12 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-0.5 w-6 rounded-full bg-accent-light" />
            </div>

            <p className="font-body text-lg leading-relaxed text-muted">
              Modern Charm Limited is a premier event management company
              dedicated to crafting seamless, impactful, and memorable
              experiences. With over six years of experience, we have
              successfully planned and executed a diverse range of events — from
              corporate functions to large-scale celebrations. Our expertise lies
              in combining professionalism, meticulous planning, creativity, and
              adaptability to bring our clients&apos; visions to life.
            </p>

            <p className="font-body mt-4 text-lg leading-relaxed text-muted">
              Some are born with it, others work for it. Then there&apos;s us —{" "}
              <span className="font-semibold text-primary">
                the ones who make charm happen.
              </span>
            </p>

            <Link
              href="/about"
              aria-label="Learn more about Modern Charm Uganda"
              className="font-body group mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase transition-colors duration-300 hover:text-accent-dark"
            >
              Learn More
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — SERVICES
          ================================================================ */}
      <section aria-label="Our services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-accent-dark uppercase">
                What We Do
              </span>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-dark sm:text-5xl">
              Our Services
            </h2>
            <p className="font-body mt-4 text-lg text-muted">
              From vision to reality — we offer a complete suite of event
              styling, design, and coordination services tailored to your unique
              celebration.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Card 1 — Event Planning & Coordination */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <ClipboardList className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Event Planning &amp; Coordination
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                From concept to execution, we handle every logistical detail —
                budgets, timelines, vendor coordination, and on-site management.
                Whether it&apos;s a corporate conference, product launch, or
                grand celebration, we plan with precision and care.
              </p>
              <ul className="font-body mt-4 space-y-1.5 text-sm text-dark/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Event Planning &amp; Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Concept Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Product Launches
                </li>
              </ul>
              <Link
                href="/services#planning"
                aria-label="Learn more about Event Planning and Coordination"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2 — Event Styling & Decor */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Palette className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Event Styling &amp; Decor
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Transform any venue into a breathtaking experience. Our creative
                team designs immersive environments — from floral installations
                and lighting design to bespoke corporate gifts and statement
                backdrops. We style every detail to perfection.
              </p>
              <ul className="font-body mt-4 space-y-1.5 text-sm text-dark/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Venue Styling &amp; Decor
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Floral Design &amp; Installations
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Corporate Gifting
                </li>
              </ul>
              <Link
                href="/services#styling"
                aria-label="Learn more about Event Styling and Decor"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — STATS
          ================================================================ */}
      <section aria-label="Our impact in numbers" className="relative overflow-hidden px-6 py-24 [clip-path:inset(0)]">
        {/* Background video — event reel 1, fixed parallax effect */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/reception-decor.jpg"
          className="fixed inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/event-reel-1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Heavy dark overlay so stats remain readable */}
        <div className="absolute inset-0 bg-black/53" />
        {/* Decorative elements */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute right-20 bottom-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 h-px w-32 -rotate-45 bg-accent/20" />
          <div className="absolute top-1/4 right-1/3 h-px w-20 rotate-12 bg-white/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section label */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/50" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-white uppercase">
                Our Impact
              </span>
              <span className="h-px w-10 bg-white/50" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Numbers That Speak
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-accent-light sm:text-6xl">
                100+
              </div>
              <div className="mt-2 h-0.5 mx-auto w-8 rounded-full bg-accent/50" />
              <p className="font-body mt-3 text-base font-medium tracking-wide text-white/90">
                Events Styled
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-accent-light sm:text-6xl">
                6+
              </div>
              <div className="mt-2 h-0.5 mx-auto w-8 rounded-full bg-accent/50" />
              <p className="font-body mt-3 text-base font-medium tracking-wide text-white/90">
                Years of Excellence
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-accent-light sm:text-6xl">
                100%
              </div>
              <div className="mt-2 h-0.5 mx-auto w-8 rounded-full bg-accent/50" />
              <p className="font-body mt-3 text-base font-medium tracking-wide text-white/90">
                Client Satisfaction
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-accent-light sm:text-6xl">
                50+
              </div>
              <div className="mt-2 h-0.5 mx-auto w-8 rounded-full bg-accent/50" />
              <p className="font-body mt-3 text-base font-medium tracking-wide text-white/90">
                Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — PORTFOLIO PREVIEW
          ================================================================ */}
      <section aria-label="Portfolio preview" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-accent-dark uppercase">
                Our Work
              </span>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-dark sm:text-5xl">
              Featured Work
            </h2>
            <p className="font-body mt-4 text-lg text-muted">
              A glimpse into the celebrations we have had the honour of
              styling. Each event is a unique story brought to life through
              design.
            </p>
          </div>

          {/* Horizontal carousel */}
          <PortfolioCarousel
            slides={[
              {
                image: "/images/portfolio/oscar-sandra/IMG_0795.jpg",
                alt: "Grand reception with black & white decor, gold arches and white floral installations",
                label: "Event Planning & Coordination",
                title: "Grand Black & Gold Reception",
                href: "/portfolio/oscar-sandra",
              },
              {
                image: "/images/portfolio/wedding-highlights/IMG_3876.jpg",
                alt: "Bridesmaids in sage green gowns with peach bouquets",
                label: "Event Styling & Decor",
                title: "Sage & Peach Elegance",
                href: "/portfolio/wedding-highlights",
              },
              {
                image: "/images/portfolio/david-michelle/7b7a0805.jpg",
                alt: "Luxurious head table with pink florals and crystal chandeliers",
                label: "Event Planning & Coordination",
                title: "Pink & Gold Luxe Reception",
                href: "/portfolio/david-michelle",
              },
              {
                image: "/images/portfolio/lornas-kuhingira/7b7a9519.jpg",
                alt: "Elegant Kuhingira reception with sage green linens, pink floral chandeliers, and cross-back chairs",
                label: "Event Planning & Coordination",
                title: "Traditional Kuhingira Ceremony",
                href: "/portfolio/lornas-kuhingira",
              },
              {
                image: "/images/portfolio/allan-pauline/img_0748.jpg",
                alt: "Lavender floral tablescape at a garden wedding reception",
                label: "Event Planning & Coordination",
                title: "Lavender Garden Wedding",
                href: "/portfolio/allan-pauline",
              },
              {
                image: "/images/portfolio/sammy-lala/img_3472.jpg",
                alt: "Classic wedding celebration with elegant decor",
                label: "Event Planning & Coordination",
                title: "Classic Wedding Celebration",
                href: "/portfolio/sammy-lala",
              },
            ]}
          />

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="font-body group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              View All Projects
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — TRUSTED BY / CLIENTELE
          ================================================================ */}
      <ClientLogos />

      {/* ================================================================
          SECTION 7 — TESTIMONIALS
          ================================================================ */}
      <section aria-label="Client testimonials" className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-accent-dark uppercase">
                Testimonials
              </span>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-dark sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="font-body mt-4 text-lg text-muted">
              We measure our success by the joy on our clients&apos; faces and
              the memories they carry forever.
            </p>
          </div>

          {/* Testimonial cards — editorial layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 — Mr. & Mrs. Mugagga Mulindwa */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;Thank you for being part of our special day. You did
                  amazing! The event planning &amp; styling was top notch! Thank
                  you for bringing our vision to life. Execution &amp; attention
                  to detail was magnificent.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    MM
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    Mr. &amp; Mrs. Mugagga Mulindwa
                  </p>
                  <p className="font-body text-xs text-muted">
                    Wedding
                  </p>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full bg-accent/5" />
            </div>

            {/* Testimonial 2 — The Senkungus */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md md:-mt-4">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;The intensity of the work done was extremely visible in
                  the flawless execution of the function. Nothing is ever easy
                  for sure but we truly thank you for gracing us with your
                  wisdom, guidance and expertise. Tusiima nyo nyo.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    TS
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    The Senkungus
                  </p>
                  <p className="font-body text-xs text-muted">
                    Wedding
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full bg-accent/5" />
            </div>

            {/* Testimonial 3 — Oscar & Sandra */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;Appreciation post to the most peaceful understanding
                  decorators Modern Charm. When God puts his hand onto something
                  even a wedding won&apos;t stress you — everything will overflow
                  smoothly and abundantly.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    OS
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    Oscar &amp; Sandra
                  </p>
                  <p className="font-body text-xs text-muted">
                    Wedding Reception
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full bg-accent/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7 — CTA SECTION
          ================================================================ */}
      <section aria-label="Call to action" className="relative overflow-hidden px-6 py-24">
        {/* Background video — Joshua & Rhona reception */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-dance.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/cta-clips/cta-lala-intro-b-IJtqrjgXanfbc30d2eRTOpjCN74tlS.mp4"
            type="video/mp4"
          />
        </video>
        {/* Heavy dark teal overlay */}
        <div className="absolute inset-0 bg-[#2D5B52]/57" />
        {/* Decorative elements */}
        <div className="pointer-events-none absolute top-8 left-8 h-px w-24 bg-accent/40" />
        <div className="pointer-events-none absolute top-8 left-8 h-24 w-px bg-accent/40" />
        <div className="pointer-events-none absolute right-8 bottom-8 h-px w-24 bg-accent/40" />
        <div className="pointer-events-none absolute right-8 bottom-8 h-24 w-px bg-accent/40" />
        <div className="pointer-events-none absolute top-1/2 left-1/4 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Gold decorative line */}
          <div className="mx-auto mb-8 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-accent/60" />
            <Sparkles aria-hidden="true" className="h-5 w-5 text-accent-light" />
            <span className="h-px w-16 bg-accent/60" />
          </div>

          <h2 className="font-heading text-4xl leading-snug font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to Create Something{" "}
            <span className="italic text-accent-light">Extraordinary</span>?
          </h2>

          <p className="font-body mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Let us bring your vision to life. Whether it&apos;s a grand wedding,
            an intimate gathering, or a show-stopping corporate event — your
            celebration deserves the Modern Charm touch.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="font-body group inline-flex items-center gap-2 rounded-full bg-accent-dark px-10 py-5 text-base font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-accent hover:shadow-xl hover:shadow-accent/30"
            >
              Start Planning Your Event
              <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div className="mx-auto mt-12 flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 rounded-full bg-accent/40" />
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span className="h-0.5 w-6 rounded-full bg-accent/40" />
          </div>
        </div>
      </section>
    </div>
  );
}
