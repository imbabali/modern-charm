import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import BackgroundVideo from "@/components/BackgroundVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CDN_BASE } from "@/lib/cdn";

export const metadata: Metadata = {
  title: "Our Journal | Modern Charm Uganda",
  description:
    "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda. Your guide to unforgettable celebrations.",
  alternates: { canonical: "https://modern-charm.vercel.app/blog" },
  openGraph: {
    title: "Our Journal | Modern Charm Uganda",
    description:
      "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda.",
    url: "https://modern-charm.vercel.app/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Journal | Modern Charm Uganda",
    description:
      "Tips, trends, and behind-the-scenes stories from the world of event styling in Uganda.",
  },
};

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const gridPosts = blogPosts.filter((post) => !post.featured);

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold tracking-wide text-accent-dark uppercase">
      {category}
    </span>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative overflow-hidden px-6 py-32 text-center text-white md:py-40 lg:py-44">
        <BackgroundVideo
          src={`${CDN_BASE}/videos/cta-clips/cta-chris-philomera-b.mp4`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Journal
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Tips, trends, and behind-the-scenes stories from the world of event
            styling
          </p>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl md:flex">
              <div className="relative h-64 w-full md:min-h-[320px] md:h-auto md:w-1/2">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                <CategoryBadge category={featuredPost.category} />
                <h2 className="mt-4 font-heading text-2xl font-bold text-dark transition-colors group-hover:text-primary md:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 font-body text-sm text-muted">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
            Latest Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-muted">
            Insights and inspiration for your next unforgettable event
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full overflow-hidden rounded-xl bg-cream transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <CategoryBadge category={post.category} />
                    <h3 className="mt-3 font-heading text-lg font-bold text-dark transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-body text-xs text-muted">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{post.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-primary transition-colors group-hover:text-primary-dark">
                        Read More
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
        <HeroCarousel
          images={[
            "/images/portfolio/lornas-kuhingira/7b7a9603.jpg",
            "/images/portfolio/oscar-sandra/IMG_0951.jpg",
            "/images/portfolio/lornas-kuhingira/7b7a9581.jpg",
          ]}
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-primary-dark/57" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Have a Story to Tell?
          </h2>
          <p className="mt-4 font-body text-lg text-white/90">
            Let us help you create an event worth writing about.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent-dark px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl"
          >
            Start Planning
          </Link>
        </div>
      </section>

    </div>
  );
}
