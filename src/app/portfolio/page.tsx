"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Instagram, ExternalLink } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

type Category = "all" | "weddings" | "corporate" | "traditional" | "celebrations";

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  image?: string;
  gradient?: string;
  aspect: string;
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "corporate", label: "Corporate" },
  { key: "traditional", label: "Traditional" },
  { key: "celebrations", label: "Celebrations" },
];

const portfolioItems: PortfolioProject[] = [
  // === Oscar & Sandra's Wedding — Black & White Luxury ===
  {
    id: 1,
    title: "Oscar & Sandra's Grand Reception",
    description: "Dramatic black & white reception with gold arches, cascading white florals and crystal chandeliers",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0795.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: 2,
    title: "Groomsmen's Toast",
    description: "Black-tie groomsmen raising glasses in a timeless moment of camaraderie",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0267.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Bridesmaids in Gold",
    description: "Bridesmaids dancing joyfully in champagne satin gowns against a dramatic backdrop",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0882.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "A Family Portrait",
    description: "Couple with their daughter in a heartwarming family moment beneath crystal chandeliers",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0941.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "The Couple's Entrance",
    description: "Groom in white tuxedo and bride in beaded gown, framed by floral installations",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0868.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    title: "Bridal Preparation",
    description: "Intimate mirror reflection as the bride gets ready for her big day",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_1884.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    title: "The Bridal Party",
    description: "Bride and bridesmaids in matching silk robes sharing a joyful pre-ceremony moment",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_1930.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    title: "Dapper Groomsmen",
    description: "Groomsmen in black tie with the grooms in white, posing against the stunning reception decor",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0947.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    title: "First Dance",
    description: "The couple's intimate first dance under golden arches and crystal chandeliers",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_2416.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: 10,
    title: "Through the Looking Glass",
    description: "Creative framing of the couple through elegant oval-back chairs at the reception",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/oscar-sandra/IMG_0834.jpg",
    aspect: "aspect-[4/3]",
  },
  // === Wedding Highlights — Sage Green & Candle Wall Elegance ===
  {
    id: 11,
    title: "Sage & Peach Bridesmaids",
    description: "Bridesmaids in elegant sage green gowns with peach rose bouquets against a candle wall",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3876.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 12,
    title: "The Wedding Party",
    description: "Full bridal party portrait with sage bridesmaids, navy groomsman and candle wall backdrop",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3879.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 13,
    title: "A Sacred Vow",
    description: "Intimate moment as the couple holds hands before the candle wall and floral backdrop",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3893.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 14,
    title: "Love Among the Roses",
    description: "The couple walking through their beautifully styled reception with blush bouquet",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3884.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 15,
    title: "Groom & The Bridesmaids",
    description: "Groom posing playfully with bridesmaids in sage gowns at the candle-lit reception",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3900.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 16,
    title: "Garden Party Portrait",
    description: "Full bridal party with flower girls posing outdoors in a beautiful garden setting",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/wedding-highlights/IMG_3888.jpg",
    aspect: "aspect-[4/5]",
  },
  // === Allan & Pauline — Lavender Garden Wedding ===
  {
    id: 17,
    title: "Allan & Pauline's Tablescape",
    description: "Lavender floral tablescape with rustic wooden farm tables under white tents",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/allan-pauline/img_0748.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 18,
    title: "Enchanted Floral Arch",
    description: "Statement floral backdrop with lavender, pink and white blooms",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/allan-pauline/img_0767.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 19,
    title: "First Dance Under the Arch",
    description: "Romantic first dance under a custom wooden arch with hanging lanterns",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/allan-pauline/img_0614.jpg",
    aspect: "aspect-square",
  },
  {
    id: 20,
    title: "A Royal Embrace",
    description: "Tender moment between bride and groom, crowned in elegance",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/images/portfolio/allan-pauline/img_0646.jpg",
    aspect: "aspect-[3/4]",
  },
  // === Placeholders for other categories ===
  {
    id: 21,
    title: "Corporate Gala Night",
    description: "Black-tie elegance with crystal centrepieces and ambient uplighting",
    category: "corporate",
    categoryLabel: "Corporate",
    gradient: "from-primary-dark via-primary to-primary-light",
    aspect: "aspect-square",
  },
  {
    id: 22,
    title: "Product Launch Event",
    description: "Bold brand activation with dynamic lighting and modular staging",
    category: "corporate",
    categoryLabel: "Corporate",
    gradient: "from-primary-dark via-accent/20 to-primary",
    aspect: "aspect-[3/4]",
  },
  {
    id: 23,
    title: "Traditional Kwanjula Ceremony",
    description: "Traditional bark-cloth inspired decor with modern floral installations",
    category: "traditional",
    categoryLabel: "Traditional",
    gradient: "from-accent via-accent-light to-primary/30",
    aspect: "aspect-[4/5]",
  },
  {
    id: 24,
    title: "Golden Anniversary Celebration",
    description: "An intimate 50th anniversary celebration in gold and ivory",
    category: "celebrations",
    categoryLabel: "Celebration",
    gradient: "from-accent-light via-cream-dark to-accent/40",
    aspect: "aspect-[3/4]",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <div className="font-body">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <HeroCarousel
          images={[
            "/images/portfolio/oscar-sandra/IMG_0834.jpg",
            "/images/portfolio/allan-pauline/img_0748.jpg",
            "/images/portfolio/wedding-highlights/IMG_3876.jpg",
            "/images/portfolio/oscar-sandra/IMG_1930.jpg",
          ]}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Portfolio</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            A showcase of celebrations we&apos;ve had the honour of styling
          </p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === cat.key
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image or Gradient Placeholder */}
                <div className={`${project.aspect} w-full`}>
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                    >
                      {/* Subtle pattern inside */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-16 h-16 rounded-full border-2 border-white/40" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 text-accent-light text-sm font-medium">
                      View Project <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Always-visible tag (mobile-friendly) */}
                <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">
                No projects found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
            <Instagram className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Want to See More?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Follow us on Instagram for daily inspiration, behind-the-scenes
            moments, and our latest event transformations.
          </p>
          <a
            href="https://instagram.com/moderncharm_events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-5 w-5" />
            @moderncharm_events
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Let us create a celebration that&apos;s uniquely yours. Reach out
            today and let&apos;s begin planning something beautiful.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
