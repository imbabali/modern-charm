import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ClipboardList,
  Palette,
  Users,
  Lightbulb,
  Gift,
  Rocket,
  CalendarCheck,
  Brush,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Our Services | Modern Charm Uganda",
  description:
    "From event planning and coordination to styling and decor — discover Modern Charm Limited's full range of event management services in Kampala.",
  alternates: { canonical: "https://modern-charm.vercel.app/services" },
  openGraph: {
    title: "Our Services | Modern Charm Uganda",
    description:
      "Discover Modern Charm Limited's full range of event management services in Kampala.",
    url: "https://modern-charm.vercel.app/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Modern Charm Uganda",
    description:
      "Discover Modern Charm Limited's full range of event management services in Kampala.",
  },
};

const serviceCategories = [
  {
    id: "planning",
    icon: CalendarCheck,
    title: "Event Planning & Coordination",
    tagline: "From vision to flawless execution",
    description:
      "We take the stress out of event planning by handling every logistical detail — from initial concept to day-of coordination. Our experienced team manages budgets, timelines, vendor sourcing, and on-site operations so you can focus on enjoying your celebration. Whether it's a corporate conference, a product launch, or an intimate dinner, we plan with precision and care.",
    image: "/images/portfolio/oscar-sandra/IMG_2416.jpg",
    imageAlt:
      "Elegant reception venue with gold chandeliers and floral installations styled by Modern Charm",
    subServices: [
      {
        icon: ClipboardList,
        title: "Event Planning",
        highlights: [
          "Full event planning from concept to execution",
          "Budget planning & optimisation",
          "Detailed timeline coordination",
          "Trusted vendor sourcing & management",
          "Professional day-of management",
          "Post-event breakdown & wrap-up",
        ],
      },
      {
        icon: Users,
        title: "Event Management",
        highlights: [
          "End-to-end event coordination",
          "On-site management team",
          "Vendor & supplier liaison",
          "Guest management & flow",
          "Real-time problem solving",
          "Seamless event transitions",
        ],
      },
      {
        icon: Lightbulb,
        title: "Concept Development",
        highlights: [
          "Creative brainstorming sessions",
          "Mood boards & visual concepts",
          "Theme development & design",
          "Spatial planning & layout",
          "Brand integration for corporate events",
          "Cultural motif incorporation",
        ],
      },
      {
        icon: Rocket,
        title: "Product Launches",
        highlights: [
          "Launch event design & coordination",
          "Brand activation setups",
          "Stage design & AV coordination",
          "Media & press area setup",
          "Guest experience design",
          "Exhibition & display management",
        ],
      },
    ],
  },
  {
    id: "styling",
    icon: Brush,
    title: "Event Styling & Decor",
    tagline: "Transforming spaces into unforgettable experiences",
    description:
      "Transform any venue into a breathtaking experience. Our creative team designs immersive environments that reflect your vision and tell your story. From floral installations and lighting design to bespoke gift curation and statement backdrops — we style every detail to perfection, creating spaces that leave lasting impressions.",
    image: "/images/portfolio/david-michelle/dji_0436.jpg",
    imageAlt:
      "Aerial view of luxurious wedding reception with blush linens, gold chairs, and crystal chandeliers",
    subServices: [
      {
        icon: Palette,
        title: "Event Styling",
        highlights: [
          "Venue styling & transformation",
          "Bespoke floral arrangements & installations",
          "Atmospheric lighting design",
          "Elegant table settings & centrepieces",
          "Statement backdrops & arches",
          "Themed colour palettes & decor",
        ],
      },
      {
        icon: Gift,
        title: "Corporate Gifting",
        highlights: [
          "Bespoke gift box design & assembly",
          "Premium hamper curation",
          "Branded packaging solutions",
          "Bulk corporate gift orders",
          "Seasonal & holiday gifting",
          "Client appreciation packages",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="font-body">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/david-michelle/7b7a0757.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9477.jpg",
            "/images/portfolio/oscar-sandra/IMG_0918.jpg",
            "/images/portfolio/allan-pauline/img_0791.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Our Services</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            From event planning and coordination to styling and decor — we bring
            your vision to life
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-28 md:space-y-36">
            {serviceCategories.map((category, catIndex) => {
              const CatIcon = category.icon;
              const isReversed = catIndex % 2 !== 0;

              return (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  {/* Category Header with Image */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16`}
                  >
                    {/* Image */}
                    <div
                      className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="aspect-[4/3] rounded-2xl relative overflow-hidden group">
                        <Image
                          src={category.image}
                          alt={category.imageAlt}
                          fill
                          className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                          quality={80}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <CatIcon
                            className="h-6 w-6 text-accent"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-accent-dark font-heading text-xs font-semibold tracking-widest uppercase">
                          Service {String(catIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                        {category.title}
                      </h2>
                      <p className="text-lg text-accent-dark font-medium italic mb-4">
                        {category.tagline}
                      </p>
                      <p className="text-muted leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Get a Quote
                        <ArrowRight
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div
                    className={`grid gap-6 ${
                      category.subServices.length <= 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2"
                    }`}
                  >
                    {category.subServices.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sub.title}
                          className="rounded-2xl bg-white p-6 md:p-8 border border-gray-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <SubIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-dark">
                              {sub.title}
                            </h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {sub.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-dark"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://6jblcdd6pq0suc42.public.blob.vercel-storage.com/videos/cta-clips/cta-sammy-lala-E8PNxd83k6daHHr8FVFOwFfPI2gxG3.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Every event is unique, and we love a creative challenge. Let&apos;s
            work together to design something custom — tailored entirely to your
            vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-dark hover:bg-accent text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Let&apos;s Create Something Custom
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
