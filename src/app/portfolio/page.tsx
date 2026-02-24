"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Instagram, ExternalLink } from "lucide-react";

type Category = "all" | "weddings" | "corporate" | "traditional" | "celebrations";

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  gradient: string;
  aspect: string;
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "corporate", label: "Corporate" },
  { key: "traditional", label: "Traditional" },
  { key: "celebrations", label: "Celebrations" },
];

const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "The Nakasero Garden Wedding",
    description: "A lush garden ceremony with cascading florals and gold accents",
    category: "weddings",
    categoryLabel: "Wedding",
    gradient: "from-primary via-primary-light to-accent/40",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "MTN Product Launch",
    description: "Bold brand activation with dynamic lighting and modular staging",
    category: "corporate",
    categoryLabel: "Corporate",
    gradient: "from-primary-dark via-primary to-primary-light",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "The Buganda Royal Kwanjula",
    description: "Traditional bark-cloth inspired decor with modern floral installations",
    category: "traditional",
    categoryLabel: "Traditional",
    gradient: "from-accent via-accent-light to-primary/30",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "Golden Anniversary Dinner",
    description: "An intimate 50th anniversary celebration in gold and ivory",
    category: "celebrations",
    categoryLabel: "Celebration",
    gradient: "from-accent-light via-cream-dark to-accent/40",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Lake Victoria Sunset Wedding",
    description: "Waterside reception with floating candles and draped fabric canopies",
    category: "weddings",
    categoryLabel: "Wedding",
    gradient: "from-primary-light via-accent/30 to-primary",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    title: "Stanbic Bank Gala Night",
    description: "Black-tie elegance with crystal centrepieces and ambient uplighting",
    category: "corporate",
    categoryLabel: "Corporate",
    gradient: "from-primary-dark to-primary via-primary/80",
    aspect: "aspect-square",
  },
  {
    id: 7,
    title: "Ankole Kuhingira Ceremony",
    description: "Vibrant Ankole cultural colours woven into contemporary design",
    category: "traditional",
    categoryLabel: "Traditional",
    gradient: "from-accent via-primary/30 to-accent-light",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    title: "Princess Themed 5th Birthday",
    description: "A fairytale wonderland with balloon installations and pastel florals",
    category: "celebrations",
    categoryLabel: "Celebration",
    gradient: "from-primary-light via-accent-light/40 to-cream-dark",
    aspect: "aspect-[4/5]",
  },
  {
    id: 9,
    title: "The Munyonyo Ballroom Wedding",
    description: "Grand ballroom transformation with towering floral centrepieces",
    category: "weddings",
    categoryLabel: "Wedding",
    gradient: "from-primary via-accent/30 to-primary-dark",
    aspect: "aspect-square",
  },
  {
    id: 10,
    title: "Kampala Fashion Week Stage",
    description: "Runway styling and experiential design for East Africa's fashion elite",
    category: "corporate",
    categoryLabel: "Corporate",
    gradient: "from-primary-dark via-accent/20 to-primary",
    aspect: "aspect-[3/4]",
  },
  {
    id: 11,
    title: "Tooro Introduction Ceremony",
    description: "A regal fusion of Tooro tradition with contemporary tablescaping",
    category: "traditional",
    categoryLabel: "Traditional",
    gradient: "from-accent-light via-primary/20 to-accent",
    aspect: "aspect-[4/5]",
  },
  {
    id: 12,
    title: "Elegant Bridal Shower",
    description: "Blush and gold intimate celebration with a floral photo wall",
    category: "celebrations",
    categoryLabel: "Celebration",
    gradient: "from-accent/40 via-cream-dark to-primary-light/30",
    aspect: "aspect-[3/4]",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
                {/* Placeholder Image */}
                <div
                  className={`${project.aspect} bg-gradient-to-br ${project.gradient} w-full`}
                >
                  {/* Subtle pattern inside */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-16 h-16 rounded-full border-2 border-white/40" />
                  </div>
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
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
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
    </main>
  );
}
