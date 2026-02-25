import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Building2,
  Crown,
  Cake,
  Gift,
  ClipboardList,
  Quote,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          SECTION 1 — HERO
          ================================================================ */}
      <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video — event reel 2 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-wedding.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/event-reel-2-dMjQwBM9z06NXej30wRdP2BPGKd2lc.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback static image for browsers that don't support video */}
        <noscript>
          <Image
            src="/images/hero-wedding.jpg"
            alt="Luxury wedding reception styled by Modern Charm Uganda featuring lavender floral tablescape and white tents"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </noscript>
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
            <span className="font-body text-sm tracking-[0.25em] font-medium text-accent-light uppercase">
              Premium Event Styling
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h1 className="font-heading text-5xl leading-tight font-bold tracking-tight text-accent-light sm:text-6xl md:text-7xl lg:text-8xl">
            Where Charm{" "}
            <span className="italic text-white">Meets</span>
            <br />
            Celebration
          </h1>

          <p className="font-body mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Premium event styling &amp; d&eacute;cor for weddings, corporate
            events, and unforgettable celebrations across Uganda.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="font-body group inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:border-accent-light hover:bg-white/5 hover:text-accent-light"
            >
              Explore Our Work
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
                className="object-cover"
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
              We are a full-service event styling and d&eacute;cor company based
              in the heart of Kampala, Uganda. From intimate gatherings to grand
              celebrations, we bring artistry, elegance, and meticulous attention
              to every detail. Our team transforms ordinary spaces into
              extraordinary experiences — blending contemporary sophistication
              with the warmth and vibrancy of Ugandan culture.
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — Wedding Styling */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Heart className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Wedding Styling &amp; Decor
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Transform your dream wedding into a breathtaking reality. From
                floral arches to table settings, we design every detail with
                love and precision.
              </p>
              <Link
                href="/services#weddings"
                aria-label="Learn more about Wedding Styling and Decor"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2 — Corporate Events */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Building2 className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Corporate Events
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Elevate your brand with polished, professional event
                experiences. Product launches, galas, conferences, and team
                celebrations — styled with impact.
              </p>
              <Link
                href="/services#corporate"
                aria-label="Learn more about Corporate Events"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 3 — Traditional Ceremonies */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Crown className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Traditional Ceremonies
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Honour your heritage with stunning Kwanjula and Kuhingira
                setups. We blend cultural tradition with modern elegance for a
                truly memorable ceremony.
              </p>
              <Link
                href="/services#traditional"
                aria-label="Learn more about Traditional Ceremonies"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 4 — Birthdays & Anniversaries */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Cake className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Birthday &amp; Anniversary Celebrations
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Mark life&apos;s milestones in style. Whether it&apos;s a first
                birthday or a golden anniversary, we create themes that reflect
                your unique story.
              </p>
              <Link
                href="/services#birthdays"
                aria-label="Learn more about Birthday and Anniversary Celebrations"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 5 — Showers */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <Gift className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Bridal Showers &amp; Baby Showers
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Intimate, joyful, and beautifully styled — our shower setups are
                designed to celebrate new beginnings with warmth and elegance.
              </p>
              <Link
                href="/services#showers"
                aria-label="Learn more about Bridal and Baby Showers"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent-dark"
              >
                Learn More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 6 — Event Planning */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark">
                <ClipboardList className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark">
                Event Planning &amp; Coordination
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-muted">
                Let us handle the logistics so you can enjoy the moment.
                End-to-end planning, vendor coordination, and on-the-day
                management you can trust.
              </p>
              <Link
                href="/services#planning"
                aria-label="Learn more about Event Planning and Coordination"
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
              <span className="h-px w-10 bg-accent-light/50" />
              <span className="font-body text-xs tracking-[0.3em] font-semibold text-accent-light uppercase">
                Our Impact
              </span>
              <span className="h-px w-10 bg-accent-light/50" />
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
                500+
              </div>
              <div className="mt-2 h-0.5 mx-auto w-8 rounded-full bg-accent/50" />
              <p className="font-body mt-3 text-base font-medium tracking-wide text-white/90">
                Events Styled
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-accent-light sm:text-6xl">
                8+
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
                Venue Partners
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
              Our Portfolio
            </h2>
            <p className="font-body mt-4 text-lg text-muted">
              A glimpse into the celebrations we have had the honour of
              styling. Each event is a unique story brought to life through
              design.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Large — spans 2 cols & 2 rows: Oscar & Sandra Reception */}
            <div className="group relative overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2">
              <Image
                src="/images/portfolio/oscar-sandra/IMG_0795.jpg"
                alt="Oscar & Sandra's grand reception with black & white decor, gold arches and white floral installations"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute bottom-6 left-6">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Wedding
                </span>
                <h3 className="font-heading mt-2 text-xl font-bold text-white">
                  Oscar &amp; Sandra&apos;s Grand Reception
                </h3>
              </div>
            </div>

            {/* Small 1: Wedding Highlights — Bridesmaids */}
            <div className="group relative overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio/wedding-highlights/IMG_3876.jpg"
                alt="Bridesmaids in sage green gowns with peach bouquets"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Wedding
                </span>
                <h3 className="font-heading mt-2 text-base font-bold text-white">
                  Sage &amp; Peach Elegance
                </h3>
              </div>
            </div>

            {/* Small 2: Oscar & Sandra — Couple framed through chairs */}
            <div className="group relative overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio/oscar-sandra/IMG_0834.jpg"
                alt="Couple framed through oval-back reception chairs"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Wedding
                </span>
                <h3 className="font-heading mt-2 text-base font-bold text-white">
                  Through the Looking Glass
                </h3>
              </div>
            </div>

            {/* Small 3: Wedding Highlights — Couple with bouquet */}
            <div className="group relative overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio/wedding-highlights/IMG_3884.jpg"
                alt="Couple walking through styled reception with blush bouquet"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Wedding
                </span>
                <h3 className="font-heading mt-2 text-base font-bold text-white">
                  Love Among the Roses
                </h3>
              </div>
            </div>

            {/* Large 2 — spans 2 cols: Allan & Pauline Reception */}
            <div className="group relative overflow-hidden rounded-2xl sm:col-span-2">
              <Image
                src="/images/portfolio/allan-pauline/img_0748.jpg"
                alt="Allan & Pauline's lavender floral tablescape reception"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute bottom-6 left-6">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Wedding
                </span>
                <h3 className="font-heading mt-2 text-xl font-bold text-white">
                  Garden Wedding at Lake Victoria
                </h3>
              </div>
            </div>

            {/* Small 4: Oscar & Sandra — Groomsmen Toast */}
            <div className="group relative overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio/oscar-sandra/IMG_0267.jpg"
                alt="Groomsmen raising glasses in a black & white toast"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  Celebration
                </span>
                <h3 className="font-heading mt-2 text-base font-bold text-white">
                  Groomsmen&apos;s Toast
                </h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="font-body group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              View Full Gallery
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — TESTIMONIALS
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
            {/* Testimonial 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;Modern Charm turned our wedding into a fairy tale. Every
                  single detail was perfect — from the floral centrepieces to the
                  lighting. Our guests are still talking about it months
                  later!&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    NK
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    Naomi Kisakye
                  </p>
                  <p className="font-body text-xs text-muted">
                    Wedding, Munyonyo
                  </p>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full bg-accent/5" />
            </div>

            {/* Testimonial 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md md:-mt-4">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;We hired Modern Charm for our company&apos;s annual gala
                  and the result was absolutely world-class. Professional,
                  creative, and incredibly easy to work with. They understood our
                  brand vision perfectly.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    DM
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    David Muwanga
                  </p>
                  <p className="font-body text-xs text-muted">
                    Corporate Gala, Serena Hotel
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full bg-accent/5" />
            </div>

            {/* Testimonial 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-accent/60" />
              <blockquote>
                <p className="font-body text-base leading-relaxed text-dark/80 italic">
                  &ldquo;Our Kwanjula was the talk of the village! Modern Charm
                  blended our Ankole traditions with such beautiful modern
                  touches. My family was so impressed. I could not have asked for
                  a better team.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    PA
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">
                    Patience Ainomugisha
                  </p>
                  <p className="font-body text-xs text-muted">
                    Kwanjula Ceremony, Mbarara
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
        {/* Background video — event reel 3 */}
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
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/event-reel-3-cropped.mp4"
            type="video/mp4"
          />
        </video>
        {/* Heavy dark teal overlay */}
        <div className="absolute inset-0 bg-[#2D5B52]/57" />
        {/* Extra gradient to hide watermark remnant in bottom-left corner */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2D5B52] via-transparent to-transparent opacity-80" aria-hidden="true" />
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

          <p className="font-body mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
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
