import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Eye,
  MapPin,
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "About Us | Modern Charm Uganda",
  description:
    "Learn about Modern Charm Uganda — Kampala's premier event styling & decor company blending Ugandan heritage with modern elegance.",
  alternates: { canonical: "https://modern-charm.vercel.app/about" },
  openGraph: {
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event styling & decor company blending Ugandan heritage with modern elegance.",
    url: "https://modern-charm.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Modern Charm Uganda",
    description:
      "Kampala's premier event styling & decor company blending Ugandan heritage with modern elegance.",
  },
};

const features = [
  {
    icon: Palette,
    title: "Bespoke Designs",
    description:
      "Every event is a blank canvas. We craft completely custom designs that reflect your personality, culture, and vision — no cookie-cutter setups, ever.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From the fold of every napkin to the angle of every spotlight, we obsess over the details that transform a good event into an unforgettable one.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Rooted in Kampala and connected across Uganda, we know the best venues, trusted vendors, and how to navigate every logistical challenge with grace.",
  },
  {
    icon: CheckCircle,
    title: "Seamless Execution",
    description:
      "Our seasoned coordination team ensures everything runs like clockwork on the day — so you can be fully present and enjoy every moment.",
  },
];

const teamMembers = [
  {
    name: "Philip Travis Higiro",
    role: "Events Director",
    gradient: "from-primary to-primary-dark",
  },
  {
    name: "Benjamin Bicung",
    role: "Business Development",
    gradient: "from-accent to-accent-light",
  },
];

export default function AboutPage() {
  return (
    <div className="font-body">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0795.jpg",
            "/images/portfolio/oscar-sandra/IMG_2416.jpg",
            "/images/portfolio/oscar-sandra/IMG_1930.jpg",
            "/images/portfolio/allan-pauline/img_0748.jpg",
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
            Where Ugandan heritage meets modern elegance
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
                  src="/images/about-couple.jpg"
                  alt="Modern Charm Uganda - Couple portrait under floral arch"
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
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Transforming Spaces Into Extraordinary Experiences
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Modern Charm was born from a deep passion for beauty and a
                  conviction that every celebration deserves to be truly
                  extraordinary. Founded in the heart of Kampala, our journey
                  began with a simple vision: to bring world-class event styling
                  to Uganda while honouring the rich cultural tapestry that makes
                  our celebrations so special.
                </p>
                <p>
                  What started as a small styling studio has grown into one of
                  Kampala&apos;s most sought-after event design companies. We
                  draw inspiration from Uganda&apos;s breathtaking landscapes,
                  vibrant traditions, and the warmth of our people — weaving
                  these elements into designs that feel both timeless and
                  refreshingly modern.
                </p>
                <p>
                  From the intricate bark-cloth textures that nod to Buganda
                  heritage, to contemporary floral installations that rival any
                  global stage, we believe in a design philosophy where
                  tradition and innovation exist in beautiful harmony. Every
                  event we create tells a story — your story — through
                  thoughtful design, impeccable detail, and an unwavering
                  commitment to excellence.
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
              Our Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="relative rounded-2xl bg-cream p-8 md:p-10 border-l-4 border-accent group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 text-accent/20 font-heading text-7xl font-bold leading-none select-none">
                01
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed relative z-10">
                To craft extraordinary event experiences that celebrate
                Uganda&apos;s cultural richness while embracing modern
                sophistication. We are committed to making every client feel
                seen, heard, and utterly delighted — transforming their vision
                into breathtaking reality through meticulous styling, creative
                innovation, and heartfelt service.
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative rounded-2xl bg-cream p-8 md:p-10 border-l-4 border-accent group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 text-accent/20 font-heading text-7xl font-bold leading-none select-none">
                02
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed relative z-10">
                To be East Africa&apos;s most trusted and admired event styling
                brand — known for pushing creative boundaries, setting new
                standards of elegance, and proving that world-class celebrations
                belong right here in Uganda. We envision a future where every
                gathering, big or small, is an opportunity to create beauty and
                lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              The Modern Charm Difference
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Why Choose Us
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              We don&apos;t just decorate spaces — we create immersive
              environments that tell your story and leave your guests in awe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl bg-white p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-dark font-heading text-sm font-semibold tracking-widest uppercase mb-3">
              Meet the Creatives
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Our Team
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              A passionate team of designers, coordinators, and dreamers
              dedicated to making your celebration unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group text-center rounded-2xl bg-cream p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar Placeholder */}
                <div
                  className={`mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-white font-heading text-3xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-dark font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <Image
          src="/images/reception-decor.jpg"
          alt="Reception with floral installation"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/90" />
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
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 border border-white/30"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
