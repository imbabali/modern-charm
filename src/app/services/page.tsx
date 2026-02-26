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
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Our Services | Modern Charm Uganda",
  description:
    "From event planning and styling to corporate gifting and product launches — discover Modern Charm Limited's full range of event management services in Kampala.",
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

const services = [
  {
    id: "planning",
    icon: ClipboardList,
    title: "Event Planning",
    description:
      "From concept to execution, our experienced team takes the stress out of event planning. We handle every detail — budgets, timelines, vendor coordination, and logistics — so you can focus on enjoying your celebration. Whether it's an intimate dinner or a large-scale conference, we plan with precision and care.",
    highlights: [
      "Full event planning from concept to execution",
      "Budget planning & optimisation",
      "Detailed timeline coordination",
      "Trusted vendor sourcing & management",
      "Professional day-of management",
      "Post-event breakdown & wrap-up",
    ],
    image: "/images/portfolio/oscar-sandra/IMG_0795.jpg",
    imageAlt: "Grand reception venue with elegant table settings and floral installations",
  },
  {
    id: "styling",
    icon: Palette,
    title: "Event Styling",
    description:
      "Transform any venue into a breathtaking experience. Our creative team designs immersive environments that reflect your vision and tell your story. From floral installations and lighting design to table settings and statement backdrops — we style every detail to perfection.",
    highlights: [
      "Venue styling & transformation",
      "Bespoke floral arrangements & installations",
      "Atmospheric lighting design",
      "Elegant table settings & centrepieces",
      "Statement backdrops & arches",
      "Themed colour palettes & decor",
    ],
    image: "/images/portfolio/oscar-sandra/IMG_2416.jpg",
    imageAlt: "Beautifully styled event space with elegant decor and floral arrangements",
  },
  {
    id: "management",
    icon: Users,
    title: "Event Management",
    description:
      "Our seasoned coordination team ensures everything runs like clockwork. We manage all moving parts of your event — from setup to teardown — with meticulous attention to detail. Our on-site team handles every challenge with grace, so you can be fully present and enjoy every moment.",
    highlights: [
      "End-to-end event coordination",
      "On-site management team",
      "Vendor & supplier liaison",
      "Guest management & flow",
      "Real-time problem solving",
      "Seamless event transitions",
    ],
    image: "/images/portfolio/wedding-highlights/IMG_3879.jpg",
    imageAlt: "Full bridal party portrait at a beautifully styled venue",
  },
  {
    id: "concept",
    icon: Lightbulb,
    title: "Concept Development",
    description:
      "Every great event starts with a compelling concept. We work closely with you to understand your vision, then develop unique creative concepts that bring it to life. From mood boards and theme design to spatial planning — we craft experiences that leave lasting impressions.",
    highlights: [
      "Creative brainstorming sessions",
      "Mood boards & visual concepts",
      "Theme development & design",
      "Spatial planning & layout",
      "Brand integration for corporate events",
      "Cultural motif incorporation",
    ],
    image: "/images/portfolio/oscar-sandra/IMG_0947.jpg",
    imageAlt: "Elegant event setup showcasing creative concept development",
  },
  {
    id: "gifting",
    icon: Gift,
    title: "Corporate Gifting",
    description:
      "Make a lasting impression with thoughtfully curated corporate gifts. We design and assemble bespoke gift packages for your team, clients, or event guests. From premium hampers to branded packaging — every gift is crafted to reflect your brand's values and appreciation.",
    highlights: [
      "Bespoke gift box design & assembly",
      "Premium hamper curation",
      "Branded packaging solutions",
      "Bulk corporate gift orders",
      "Seasonal & holiday gifting",
      "Client appreciation packages",
    ],
    image: "/images/portfolio/oscar-sandra/IMG_0882.jpg",
    imageAlt: "Beautifully curated corporate gift packages with premium items",
  },
  {
    id: "launches",
    icon: Rocket,
    title: "Product Launches",
    description:
      "Launch your product with impact. We create show-stopping environments that spotlight your brand and create buzz. From staging and AV coordination to media setup and brand activations — we ensure your launch event makes the impression it deserves.",
    highlights: [
      "Launch event design & styling",
      "Brand activation setups",
      "Stage design & AV coordination",
      "Media & press area setup",
      "Guest experience design",
      "Exhibition & display styling",
    ],
    image: "/images/portfolio/allan-pauline/img_0748.jpg",
    imageAlt: "Professionally styled product launch event with elegant setup",
  },
];

export default function ServicesPage() {
  return (
    <div className="font-body">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0795.jpg",
            "/images/portfolio/wedding-highlights/IMG_3879.jpg",
            "/images/portfolio/oscar-sandra/IMG_0947.jpg",
            "/images/portfolio/allan-pauline/img_0791.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90">
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
            From event planning and styling to corporate gifting and product
            launches — we bring your vision to life
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.title}
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div
                    className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="aspect-[4/3] rounded-2xl relative overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-accent-dark font-heading text-xs font-semibold tracking-widest uppercase">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-dark"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
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
