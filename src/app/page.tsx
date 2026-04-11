import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import HeroVideoCarousel from "@/components/HeroVideoCarousel";
import BackgroundVideo from "@/components/BackgroundVideo";
import ClientLogos from "@/components/ClientLogos";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { portfolioEvents } from "@/data/portfolio-events";
import { CDN_BASE } from "@/lib/cdn";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          SECTION 1 — HERO (near-black surface)
          ================================================================ */}
      <section
        aria-label="Hero"
        className="relative min-h-screen bg-near-black overflow-hidden flex items-end"
      >
        <HeroVideoCarousel
          clips={[
            `${CDN_BASE}/videos/hero-clips/clip-david-michelle.mp4`,
            `${CDN_BASE}/videos/hero-clips/clip-lornas-kuhingira.mp4`,
            `${CDN_BASE}/videos/cta-clips/cta-sammy-lala.mp4`,
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-near-black/25 to-near-black/80" />

        {/* Content */}
        <div className="relative z-10 container-custom w-full pb-40 lg:pb-48 pt-32">
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-9">
              <AnimateOnScroll variant="line-mask">
                <span className="label-mono text-accent/80">
                  Modern Charm / Kampala / Est. 2020
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll variant="line-mask" delay={150}>
                <h1
                  className="mt-8 font-heading text-cream"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 9rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Exceptional events,
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll variant="line-mask" delay={300}>
                <h1
                  className="font-heading text-cream/80"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 9rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.035em",
                  }}
                >
                  made with intention.
                </h1>
              </AnimateOnScroll>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10">
              <AnimateOnScroll delay={500}>
                <p className="text-cream/75 text-base leading-relaxed max-w-sm">
                  Premium event styling &amp; décor for weddings, corporate
                  events, and unforgettable celebrations across Uganda.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/portfolio"
                    className="btn-fluid btn-fluid-glass"
                    data-cursor-label="VIEW WORK"
                  >
                    View Work
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between">
            <span className="label-mono-sm text-cream/50">Scroll to explore</span>
            <span className="label-mono-sm text-cream/50 tabular-nums">01 / 08</span>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — ABOUT (cream)
          ================================================================ */}
      <section aria-label="About us" className="bg-cream py-28 md:py-40">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-near-black">
                <Image
                  src="/images/portfolio/oscar-sandra/IMG_0932.jpg"
                  alt="Bride in stunning mermaid gown at a luxury black and gold reception styled by Modern Charm Uganda"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_40%]"
                  quality={85}
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 label-mono text-accent-dark">
                Modern Charm / 01
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <span className="label-mono text-accent-dark">About / 02</span>
              <h2
                className="mt-6 font-heading text-near-black"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                The ones who make
                <br />
                charm happen.
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-muted text-base leading-relaxed">
                  Modern Charm Limited is a premier event management company
                  dedicated to crafting seamless, impactful, and memorable
                  experiences. With over six years of experience, we have
                  successfully planned and executed a diverse range of events —
                  from corporate functions to large-scale celebrations.
                </p>
                <p className="text-muted text-base leading-relaxed">
                  Our expertise lies in combining professionalism, meticulous
                  planning, creativity, and adaptability to bring our clients&apos;
                  visions to life. Some are born with it, others work for it.
                  Then there&apos;s us — the ones who make charm happen.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="btn-fluid btn-fluid-outline"
                  data-cursor-label="READ MORE"
                >
                  Our story
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — SERVICES (dark teal)
          ================================================================ */}
      <section aria-label="Our services" className="bg-dark-teal text-cream py-28 md:py-36">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="label-mono text-accent/80">Services / 03</span>
              <h2
                className="mt-6 font-heading text-cream max-w-2xl"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Two disciplines,
                <br />
                one obsessive craft.
              </h2>
            </div>
            <Link
              href="/services"
              className="btn-fluid btn-fluid-glass"
              data-cursor-label="ALL SERVICES"
            >
              All Services →
            </Link>
          </div>

          <div className="mt-16 hairline bg-cream" />

          <div className="mt-16 grid md:grid-cols-2 gap-0">
            <div className="group relative p-10 md:p-14 md:pr-20 md:border-r md:border-cream/15">
              <span className="label-mono-sm text-accent/80 tabular-nums">01 / Planning & Coordination</span>
              <h3
                className="mt-6 font-heading text-cream"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Event Planning
                <br />&amp; Coordination
              </h3>
              <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
                From concept to execution, we handle every logistical detail —
                budgets, timelines, vendor coordination, and on-site management.
                Corporate conferences, product launches, and grand celebrations
                planned with precision and care.
              </p>
              <ul className="mt-8 flex flex-col gap-2 text-cream/65 label-mono-sm">
                <li>· Event Planning &amp; Management</li>
                <li>· Concept Development</li>
                <li>· Product Launches</li>
              </ul>
              <Link
                href="/services#planning"
                className="btn-fluid-alpha inline mt-10 label-mono text-accent"
                data-cursor-label="EXPLORE"
              >
                Explore →
              </Link>
            </div>

            <div className="group relative p-10 md:p-14 md:pl-20 border-t md:border-t-0 border-cream/15">
              <span className="label-mono-sm text-accent/80 tabular-nums">02 / Styling & Décor</span>
              <h3
                className="mt-6 font-heading text-cream"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Event Styling
                <br />&amp; Décor
              </h3>
              <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
                Transform any venue into a breathtaking experience. Our creative
                team designs immersive environments — floral installations,
                lighting design, bespoke gifts, and statement backdrops styled
                to perfection.
              </p>
              <ul className="mt-8 flex flex-col gap-2 text-cream/65 label-mono-sm">
                <li>· Venue Styling &amp; Décor</li>
                <li>· Floral Design &amp; Installations</li>
                <li>· Corporate Gifting</li>
              </ul>
              <Link
                href="/services#styling"
                className="btn-fluid-alpha inline mt-10 label-mono text-accent"
                data-cursor-label="EXPLORE"
              >
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — STATS (ink, pinned parallax)
          ================================================================ */}
      <section
        aria-label="Our impact in numbers"
        className="relative bg-ink overflow-hidden py-28 md:py-40"
      >
        <BackgroundVideo
          src={`${CDN_BASE}/videos/event-reel-1.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/95" />

        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">In numbers / 04</span>
          <h2
            className="mt-6 font-heading text-cream max-w-4xl"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Six years.
            <br />
            One hundred events.
          </h2>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {[
              { n: "100+", l: "Events Styled" },
              { n: "06+", l: "Years of Excellence" },
              { n: "100%", l: "Client Satisfaction" },
              { n: "50+", l: "Venue Partners" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.l} delay={i * 100}>
                <div className="flex flex-col gap-3 border-t border-cream/20 pt-6">
                  <span className="label-mono-sm text-cream/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-heading text-accent-light"
                    style={{
                      fontSize: "clamp(3rem, 6vw, 5.5rem)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.n}
                  </span>
                  <span className="label-mono text-cream/75">{s.l}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — FEATURED WORK (cream marquee)
          ================================================================ */}
      <section aria-label="Portfolio preview" className="bg-cream py-28 md:py-36">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="label-mono text-accent-dark">Featured work / 05</span>
              <h2
                className="mt-6 font-heading text-near-black max-w-2xl"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Each event is a
                <br />
                unique story.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="btn-fluid btn-fluid-outline"
              data-cursor-label="ALL PROJECTS"
            >
              All projects →
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <PortfolioCarousel events={portfolioEvents} />
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — TRUSTED BY / CLIENTELE (near-black)
          ================================================================ */}
      <ClientLogos />

      {/* ================================================================
          SECTION 7 — TESTIMONIALS (cream)
          ================================================================ */}
      <section aria-label="Client testimonials" className="bg-cream py-28 md:py-36">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="label-mono text-accent-dark">Praise / 06</span>
            <h2
              className="mt-6 font-heading text-near-black"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Words from
              <br />
              our clients.
            </h2>
          </div>

          <div className="mt-20 hairline bg-near-black" />

          <div className="mt-16 grid gap-0 md:grid-cols-3">
            {[
              {
                q: "Thank you for being part of our special day. You did amazing! The event planning & styling was top notch! Thank you for bringing our vision to life. Execution & attention to detail was magnificent.",
                a: "Mr. & Mrs. Mugagga Mulindwa",
                r: "Wedding",
              },
              {
                q: "The intensity of the work done was extremely visible in the flawless execution of the function. Nothing is ever easy for sure but we truly thank you for gracing us with your wisdom, guidance and expertise. Tusiima nyo nyo.",
                a: "The Senkungus",
                r: "Wedding",
              },
              {
                q: "Appreciation post to the most peaceful understanding decorators Modern Charm. When God puts his hand onto something even a wedding won't stress you — everything will overflow smoothly and abundantly.",
                a: "Oscar & Sandra",
                r: "Wedding Reception",
              },
            ].map((t, i) => (
              <AnimateOnScroll key={t.a} delay={i * 120}>
                <div className="p-8 md:p-10 border-t border-near-black/15 md:border-t-0 md:border-l md:border-near-black/15 h-full flex flex-col">
                  <Quote aria-hidden="true" className="h-6 w-6 text-accent" />
                  <blockquote className="mt-6 flex-1">
                    <p className="font-heading text-lg text-near-black leading-snug" style={{ letterSpacing: "-0.01em" }}>
                      &ldquo;{t.q}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-near-black/15">
                    <p className="label-mono text-near-black">{t.a}</p>
                    <p className="label-mono-sm text-muted mt-1">{t.r}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — CTA (dark teal)
          ================================================================ */}
      <section aria-label="Call to action" className="relative overflow-hidden bg-dark-teal py-28 md:py-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-lala-intro-b.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-teal/40 via-near-black/40 to-dark-teal/70" />

        <div className="relative z-10 container-custom">
          <div className="max-w-5xl">
            <span className="label-mono text-accent">Start a project / 07</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 7rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.035em",
              }}
            >
              Ready to create
              <br />
              something unforgettable?
            </h2>
            <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
              Let us bring your vision to life. Whether it&apos;s a grand wedding,
              an intimate gathering, or a show-stopping corporate event — your
              celebration deserves the Modern Charm touch.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-fluid btn-fluid-gold"
                data-cursor-label="START A PROJECT"
              >
                Start a project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
