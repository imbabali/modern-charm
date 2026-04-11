import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import HeroCarousel from "@/components/HeroCarousel";

/* Per-post hero image positioning for optimal cropping */
const heroPositions: Record<string, string> = {
  "the-ultimate-guide-to-planning-a-ugandan-wedding-in-2026": "center 30%",
  "top-10-wedding-decor-trends-in-uganda-for-2026": "center 35%",
  "how-to-plan-the-perfect-kwanjula-ceremony": "center 40%",
  "corporate-event-planning-a-complete-checklist": "center 45%",
  "choosing-the-right-color-palette-for-your-event": "center 40%",
  "behind-the-scenes-a-luxury-lakeside-wedding": "center 30%",
  "budget-friendly-event-styling-ideas": "center 45%",
};

const heroImagePositions: Record<string, string[]> = {
  "the-ultimate-guide-to-planning-a-ugandan-wedding-in-2026": [
    "center 20%",
    "center 20%",
    "center 30%",
  ],
  "top-10-wedding-decor-trends-in-uganda-for-2026": [
    "center 20%",
    "center 35%",
    "center 35%",
  ],
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Modern Charm Uganda`,
    description: post.excerpt,
    alternates: { canonical: `https://moderncharmevents.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://moderncharmevents.com/blog/${slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      tags: [post.category],
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero — near-black with hero carousel */}
      <section className="relative overflow-hidden bg-near-black min-h-[70vh] flex items-end">
        <HeroCarousel
          images={post.heroImages}
          objectPosition={heroPositions[slug] || "center"}
          imagePositions={heroImagePositions[slug]}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/40 via-near-black/20 to-near-black/90" />

        <div className="relative z-10 container-custom w-full pt-40 pb-20 md:pb-28 drop-shadow-hero">
          <nav
            className="label-mono-sm text-cream/60 flex items-center gap-2 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-cream transition-colors">Journal</Link>
            <span aria-hidden="true">/</span>
            <span className="text-cream">{post.category}</span>
          </nav>

          <span className="label-mono text-accent">
            {post.category} · {post.date}
          </span>
          <h1
            className="mt-6 font-heading text-cream max-w-5xl"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 6rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            {post.title}
          </h1>
          <p className="mt-8 max-w-2xl text-cream/80 text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-24 md:py-32 bg-cream">
        <div className="container-custom max-w-3xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-near-black prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-p:leading-relaxed prose-p:text-muted prose-p:font-body prose-a:text-primary prose-a:no-underline prose-a:font-semibold prose-strong:text-near-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://moderncharmevents.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://moderncharmevents.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://moderncharmevents.com/blog/${slug}` },
            ],
          }),
        }}
      />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://moderncharmevents.com${post.image}`,
            "datePublished": new Date(post.date).toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Modern Charm Uganda",
              "url": "https://moderncharmevents.com",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Modern Charm Uganda",
              "url": "https://moderncharmevents.com",
            },
            "mainEntityOfPage": `https://moderncharmevents.com/blog/${slug}`,
          }),
        }}
      />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <HeroCarousel
          images={post.heroImages}
          objectPosition={heroPositions[slug] || "center"}
          imagePositions={heroImagePositions[slug]}
        />
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <div className="max-w-4xl">
            <span className="label-mono text-accent">Start a project</span>
            <h2
              className="mt-6 font-heading text-cream"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to plan
              <br />
              your event?
            </h2>
            <p className="mt-8 text-cream/85 text-lg max-w-xl">
              Let us bring your vision to life with the same care and creativity.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-fluid btn-fluid-gold" data-cursor-label="GET IN TOUCH">
                Get in touch →
              </Link>
              <Link href="/blog" className="btn-fluid btn-fluid-glass" data-cursor-label="BACK TO JOURNAL">
                ← Back to Journal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
