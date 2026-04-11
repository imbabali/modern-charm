import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";
import ClientLogos from "@/components/ClientLogos";

export const metadata: Metadata = {
  title: "About Us | Modern Charm Uganda",
  description:
    "Learn about Modern Charm Limited — Kampala's premier event management company crafting seamless, impactful, and memorable experiences with over six years of excellence.",
  alternates: { canonical: "https://moderncharmevents.com/about" },
  openGraph: {
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event management company crafting seamless, impactful, and memorable experiences.",
    url: "https://moderncharmevents.com/about",
    images: [{ url: "/images/portfolio/oscar-sandra/IMG_0795.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event management company crafting seamless, impactful, and memorable experiences.",
    images: ["/images/portfolio/oscar-sandra/IMG_0795.jpg"],
  },
};

const values = [
  {
    title: "Excellence",
    description:
      "We are committed to delivering outstanding results with precision and professionalism.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every element of our events is meticulously planned and flawlessly executed.",
  },
  {
    title: "Innovation & Creativity",
    description:
      "We bring fresh, unique, and customized solutions to every event.",
  },
  {
    title: "Dependability",
    description:
      "Our word is our bond — we always strive to go above and beyond to build trust with our clients.",
  },
  {
    title: "Adaptability",
    description:
      "We thrive in dynamic environments, ensuring flexibility and efficiency in execution.",
  },
  {
    title: "Strategic Negotiation",
    description:
      "We leverage our expertise to secure the best deals and value for our clients.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We are committed to delivering absolute customer satisfaction for every client we meet.",
  },
];

const teamMembers = [
  {
    name: "Philip Higiro",
    role: "Team Lead",
    image: "/images/team/philip-higiro.jpg",
  },
  {
    name: "Benjamin Bicung",
    role: "Project & Finance Manager",
    image: "/images/team/benjamin-bicung.jpg",
  },
  {
    name: "Lamuel Mukundenta",
    role: "Technical Lead",
    image: "/images/team/lamuel-mukendenta.jpg",
  },
  {
    name: "Lillian N. Mulindwa",
    role: "Event Manager / Logistics Coordinator",
    image: "/images/team/lilian-nalukenge.jpg",
  },
  {
    name: "Adonia Waibale",
    role: "Creative Director",
    image: "/images/team/adonia-waibale.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Client Briefing",
    description:
      "We start by understanding your vision, goals, and preferences through an in-depth consultation.",
  },
  {
    step: "02",
    title: "Brainstorming",
    description:
      "Our creative team develops unique concepts and ideas tailored to your event.",
  },
  {
    step: "03",
    title: "Client Presentation",
    description:
      "We present our vision with mood boards, concepts, and plans for your review.",
  },
  {
    step: "04",
    title: "Concept Approval",
    description:
      "Together we refine the concept until it perfectly matches your expectations.",
  },
  {
    step: "05",
    title: "Event Execution",
    description:
      "Our team brings everything to life with precision, ensuring a seamless and unforgettable experience.",
  },
];

export default function AboutPage() {
  return (
    <div className="font-body">
      {/* Hero Banner — near-black */}
      <section className="relative overflow-hidden bg-near-black pt-40 md:pt-48 pb-28 md:pb-40">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-chris-philomera.mp4`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/50 via-near-black/30 to-near-black/80" />
        <div className="relative z-10 container-custom">
          <span className="label-mono text-accent/80">About / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            The ones who make
            <br />
            charm happen.
          </h1>
          <p className="mt-10 max-w-xl text-cream/75 text-lg leading-relaxed">
            Crafting seamless, impactful, and memorable experiences across
            Uganda since 2020.
          </p>
        </div>
      </section>

      {/* Our Story — cream */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-near-black">
                <Image
                  src="/images/portfolio/oscar-sandra/IMG_0883.jpg"
                  alt="Bridal party in champagne gowns at a luxury reception styled by Modern Charm"
                  fill
                  className="object-cover object-[center_40%]"
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <span className="label-mono text-accent-dark">Who we are / 01</span>
              <h2
                className="mt-6 font-heading text-near-black"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Premier event
                <br />
                management.
              </h2>
              <div className="mt-10 grid md:grid-cols-2 gap-10 text-muted leading-relaxed">
                <p>
                  Modern Charm Limited is a premier event management company
                  dedicated to crafting seamless, impactful, and memorable
                  experiences. With over six years of experience in the industry,
                  we have successfully planned and executed a diverse range of
                  events, from corporate functions to large-scale celebrations.
                </p>
                <p>
                  Our expertise lies in combining professionalism, meticulous
                  planning, exceptional negotiation skills, creativity, and
                  adaptability to bring our clients&apos; visions to life. From
                  intimate gatherings to grand celebrations, we bring artistry,
                  elegance, and meticulous attention to every detail — blending
                  contemporary sophistication with the warmth and vibrancy of
                  Ugandan culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — dark teal */}
      <section className="py-28 md:py-36 bg-dark-teal text-cream">
        <div className="container-custom">
          <span className="label-mono text-accent/80">What drives us / 02</span>
          <div className="mt-16 grid md:grid-cols-2 gap-0">
            <div className="pr-0 md:pr-12 pb-12 md:pb-0 border-b md:border-b-0 md:border-r border-cream/15">
              <span className="label-mono-sm text-accent/80">Vision / 01</span>
              <h3
                className="mt-6 font-heading text-cream"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                Most trusted.
                <br />
                Most innovative.
              </h3>
              <p className="mt-8 text-cream/75 leading-relaxed max-w-md">
                To be the most trusted and innovative event management company,
                setting new standards in creativity, precision, and client
                satisfaction.
              </p>
            </div>
            <div className="pl-0 md:pl-12 pt-12 md:pt-0">
              <span className="label-mono-sm text-accent/80">Mission / 02</span>
              <h3
                className="mt-6 font-heading text-cream"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                World-class.
                <br />
                Unmatched detail.
              </h3>
              <p className="mt-8 text-cream/75 leading-relaxed max-w-md">
                To design and execute world-class events with unmatched
                attention to detail, strategic planning, and creative excellence,
                ensuring seamless experiences that leave lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — cream */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="label-mono text-accent-dark">Values / 03</span>
              <h2
                className="mt-6 font-heading text-near-black"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                What we stand for.
              </h2>
            </div>
          </div>
          <div className="mt-16 hairline bg-near-black" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {values.map((value, i) => (
              <div key={value.title}>
                <span className="label-mono-sm text-accent-dark tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 font-heading text-near-black text-xl"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {value.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — dark teal */}
      <section className="py-28 md:py-36 bg-dark-teal text-cream">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="label-mono text-accent/80">Process / 04</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              How we work.
            </h2>
            <p className="mt-6 text-cream/75 text-lg">
              Our proven five-step process ensures every event is planned and
              executed to perfection.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-5 gap-0">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className={`p-6 md:p-8 ${
                  i > 0 ? "border-t md:border-t-0 md:border-l border-cream/15" : ""
                }`}
              >
                <span className="label-mono-sm text-accent/80 tabular-nums">
                  {step.step}
                </span>
                <h3
                  className="mt-4 font-heading text-cream text-lg"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-cream/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — cream */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="label-mono text-accent-dark">Team / 05</span>
            <h2
              className="mt-6 font-heading text-near-black"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Meet the
              <br />
              charming team.
            </h2>
            <p className="mt-6 text-muted text-lg">
              A passionate team of professionals dedicated to making your
              celebrations unforgettable.
            </p>
          </div>

          <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-near-black">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Modern Charm`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    quality={85}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3
                      className="font-heading text-lg text-near-black"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {member.name}
                    </h3>
                    <p className="label-mono-sm text-muted mt-2">
                      {member.role}
                    </p>
                  </div>
                  <span className="label-mono-sm text-muted tabular-nums pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0928.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9563.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9545.jpg",
          ]}
          objectPosition="center 35%"
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Start a project / 06</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to create
              <br />
              something beautiful?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Let&apos;s bring your vision to life. Whether it&apos;s an
              intimate gathering or a grand celebration, we&apos;re here to
              make it extraordinary.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-fluid btn-fluid-gold"
                data-cursor-label="START PROJECT"
              >
                Start a project →
              </Link>
              <Link
                href="/services"
                className="btn-fluid btn-fluid-glass"
                data-cursor-label="SERVICES"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
