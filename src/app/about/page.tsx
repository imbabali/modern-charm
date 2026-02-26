import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Award,
  Eye,
  Lightbulb,
  Shield,
  Handshake,
  Target,
  Heart,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "About Us | Modern Charm Uganda",
  description:
    "Learn about Modern Charm Limited — Kampala's premier event management company crafting seamless, impactful, and memorable experiences with over six years of excellence.",
  alternates: { canonical: "https://modern-charm.vercel.app/about" },
  openGraph: {
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event management company crafting seamless, impactful, and memorable experiences.",
    url: "https://modern-charm.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event management company crafting seamless, impactful, and memorable experiences.",
  },
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering outstanding results with precision and professionalism.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "Every element of our events is meticulously planned and flawlessly executed.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "We bring fresh, unique, and customized solutions to every event.",
  },
  {
    icon: Shield,
    title: "Dependability",
    description:
      "Our word is our bond — we always strive to go above and beyond to build trust with our clients.",
  },
  {
    icon: Target,
    title: "Adaptability",
    description:
      "We thrive in dynamic environments, ensuring flexibility and efficiency in execution.",
  },
  {
    icon: Handshake,
    title: "Strategic Negotiation",
    description:
      "We leverage our expertise to secure the best deals and value for our clients.",
  },
  {
    icon: Heart,
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
    name: "Lamuel Mukendenta",
    role: "Technical Lead",
    image: "/images/team/lamuel-mukendenta.jpg",
  },
  {
    name: "Lilian Nalukenge",
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
      "We present our vision with detailed proposals, mood boards, and plans for your review.",
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
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0846.jpg",
            "/images/portfolio/oscar-sandra/IMG_1930.jpg",
            "/images/portfolio/allan-pauline-styling/img_4822.jpg",
            "/images/portfolio/wedding-highlights/IMG_3879.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">About Us</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Modern Charm
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Crafting seamless, impactful, and memorable experiences
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/portfolio/oscar-sandra/IMG_0834.jpg"
                  alt="Couple framed through elegant oval-back reception chairs"
                  fill
                  className="object-cover"
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 -z-10" />
            </div>

            {/* Story Text */}
            <div>
              <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Premier Event Management
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
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
                  adaptability to bring our clients&apos; visions to life. We
                  pride ourselves on delivering high-quality events tailored to
                  meet and exceed expectations.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, we bring
                  artistry, elegance, and meticulous attention to every detail —
                  blending contemporary sophistication with the warmth and
                  vibrancy of Ugandan culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="relative rounded-2xl bg-cream p-8 md:p-10 border-l-4 border-accent group hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed relative z-10">
                To be the most trusted and innovative event management company,
                setting new standards in creativity, precision, and client
                satisfaction.
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative rounded-2xl bg-cream p-8 md:p-10 border-l-4 border-accent group hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed relative z-10">
                To design and execute world-class events with unmatched attention
                to detail, strategic planning, and creative excellence, ensuring
                seamless experiences that leave lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.slice(0, 4).map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl bg-white p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
            {values.slice(4).map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl bg-white p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              The Recipe for Our Charm
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              How We Work
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Our proven five-step process ensures every event is planned and
              executed to perfection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative text-center group">
                {/* Step number circle */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-dark text-white font-heading text-lg font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                {/* Connector line (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-accent/30" />
                )}
                <h3 className="font-heading text-base font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              The Charming Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Meet Our Team
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              A passionate team of professionals dedicated to making your
              celebrations unforgettable.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group text-center rounded-2xl bg-white p-6 hover:shadow-lg transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.75rem)]"
              >
                <div className="mx-auto mb-5 h-40 w-40 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Modern Charm`}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                    quality={85}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-dark font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              Our Clientele
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Trusted By
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              "UEGCL",
              "Unicaf University",
              "KCB Bank",
              "Hima Cement",
              "Bloomberg Philanthropies",
              "MAAD McCann",
            ].map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-lg bg-cream px-4 hover:bg-cream-dark transition-colors duration-300"
              >
                <span className="font-heading text-sm font-bold text-dark/70 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <Image
          src="/images/portfolio/lornas-kuhingira/7b7a9496.jpg"
          alt="Elegant event setup with pink and green floral installations"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life. Whether it&apos;s an intimate
            gathering or a grand celebration, we&apos;re here to make it
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-dark hover:bg-accent text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Planning Your Event
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 border border-white/30"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
