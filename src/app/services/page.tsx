import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Heart,
  Building2,
  Drum,
  PartyPopper,
  Baby,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Modern Charm Uganda",
  description:
    "From intimate gatherings to grand celebrations — discover Modern Charm Uganda's full range of event styling, decor, and planning services in Kampala.",
};

const services = [
  {
    icon: Heart,
    title: "Wedding Styling & Decor",
    description:
      "Your wedding day deserves to be nothing short of magical. At Modern Charm, we specialise in creating breathtaking wedding environments that reflect your unique love story. From intimate garden ceremonies on the shores of Lake Victoria to grand ballroom receptions at Kampala's finest venues, our team transforms every space into a romantic masterpiece.",
    highlights: [
      "Venue styling & transformation",
      "Elegant table settings & centrepieces",
      "Bespoke floral arrangements & installations",
      "Atmospheric lighting design",
      "Statement backdrops & arches",
      "Aisle decor & ceremony styling",
    ],
    gradient: "from-primary/30 via-accent/20 to-primary-light/30",
    image: "/images/portfolio/oscar-sandra/IMG_0795.jpg",
    imageAlt: "Grand wedding reception with black & white decor, gold arches and floral installations",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Make a powerful impression with corporate events that reflect your brand's excellence. We understand that business gatherings require a perfect balance of professionalism and creativity. Our team designs sophisticated environments that elevate your corporate identity while ensuring your guests have a memorable, polished experience.",
    highlights: [
      "Product launches & brand activations",
      "Conference & seminar styling",
      "Gala dinners & awards ceremonies",
      "Team building event setups",
      "Brand integration & themed decor",
      "Exhibition & trade show design",
    ],
    gradient: "from-primary-dark/30 via-primary/20 to-accent/20",
    image: "/images/portfolio/oscar-sandra/IMG_0947.jpg",
    imageAlt: "Dapper groomsmen in black tie with grooms in white tuxedos at luxury reception",
  },
  {
    icon: Drum,
    title: "Traditional Ceremonies",
    description:
      "Uganda's cultural ceremonies are rich in meaning and tradition. We honour this heritage by creating stunning decor that respects tradition while infusing contemporary elegance. Whether it's a Kiganda kwanjula, an Ankole kuhingira, or any of Uganda's beautiful introduction ceremonies, we ensure your cultural celebration is both authentic and visually spectacular.",
    highlights: [
      "Kwanjula ceremony styling",
      "Kuhingira & introduction ceremony decor",
      "Cultural motif integration",
      "Traditional-meets-modern design concepts",
      "Themed colour palettes & cultural fabrics",
      "Ceremonial area setup & styling",
    ],
    gradient: "from-accent/30 via-primary/20 to-accent-light/30",
    image: "/images/portfolio/wedding-highlights/IMG_3893.jpg",
    imageAlt: "Intimate moment as couple holds hands before the candle wall and floral backdrop",
  },
  {
    icon: PartyPopper,
    title: "Birthday & Anniversary Celebrations",
    description:
      "Every milestone deserves a celebration as special as the person being honoured. From a child's whimsical first birthday to an elegant golden anniversary dinner, we design celebrations that capture the spirit of the occasion. Our creative team brings themes to life with stunning detail and infectious energy.",
    highlights: [
      "Milestone birthday celebrations",
      "Custom themed party design",
      "Elegant anniversary dinners",
      "Surprise event coordination",
      "Balloon artistry & installations",
      "Photo-worthy decor moments",
    ],
    gradient: "from-primary-light/30 via-cream-dark to-accent/20",
    image: "/images/portfolio/oscar-sandra/IMG_0882.jpg",
    imageAlt: "Bridesmaids dancing joyfully in champagne gowns against dramatic reception backdrop",
  },
  {
    icon: Baby,
    title: "Bridal Showers & Baby Showers",
    description:
      "Celebrate life's most beautiful transitions with intimate, thoughtfully designed gatherings. We create warm, stylish settings for bridal showers that pamper the bride-to-be and baby showers that welcome new life with joy. Every detail — from floral arches to curated party favours — is designed to make the guest of honour feel truly special.",
    highlights: [
      "Intimate & elegant venue styling",
      "Custom themed decor concepts",
      "Curated party favours & gifts",
      "Instagram-worthy photo backdrops",
      "Dessert table & display styling",
      "Games & activity area setup",
    ],
    gradient: "from-accent-light/30 via-cream-dark to-primary/20",
    image: "/images/portfolio/oscar-sandra/IMG_1930.jpg",
    imageAlt: "Bride and bridesmaids in matching silk robes during pre-ceremony preparations",
  },
  {
    icon: ClipboardList,
    title: "Event Planning & Coordination",
    description:
      "Behind every seamless event is meticulous planning. Our experienced coordination team takes the stress out of event management, handling every detail from initial concept to final farewell. We work closely with Kampala's best vendors to ensure quality, reliability, and value — so you can relax and enjoy your celebration.",
    highlights: [
      "Full event planning from concept to execution",
      "Trusted vendor sourcing & management",
      "Detailed timeline coordination",
      "Professional day-of management",
      "Budget planning & optimisation",
      "Post-event breakdown & wrap-up",
    ],
    gradient: "from-primary/20 via-primary-light/20 to-accent/30",
    image: "/images/portfolio/wedding-highlights/IMG_3879.jpg",
    imageAlt: "Full bridal party portrait with sage bridesmaids and candle wall backdrop at styled venue",
  },
];

export default function ServicesPage() {
  return (
    <main className="font-body">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Our Services</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision
            to life
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
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
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-accent font-heading text-xs font-semibold tracking-widest uppercase">
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
                      <ArrowRight className="h-4 w-4" />
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
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Every event is unique, and we love a creative challenge. Let&apos;s
            work together to design something custom — tailored entirely to your
            vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Let&apos;s Create Something Custom
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
