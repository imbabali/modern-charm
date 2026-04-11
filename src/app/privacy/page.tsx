import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Privacy Policy | Modern Charm Uganda",
  description:
    "Privacy Policy for Modern Charm Limited — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://moderncharmevents.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Modern Charm Uganda",
    description:
      "How Modern Charm Limited collects, uses, and protects your personal information.",
    url: "https://moderncharmevents.com/privacy",
    images: [{ url: "/images/portfolio/oscar-sandra/IMG_0795.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Modern Charm Uganda",
    description:
      "How Modern Charm Limited collects, uses, and protects your personal information.",
    images: ["/images/portfolio/oscar-sandra/IMG_0795.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="font-body">
      {/* Hero — near-black */}
      <section className="relative overflow-hidden bg-near-black pt-40 md:pt-48 pb-28 md:pb-36">
        <HeroCarousel
          images={[
            "/images/portfolio/bloomberg-launch/dsc_4497_pano.jpg",
            "/images/portfolio/hima-cement-event/898A8544.jpg",
            "/images/portfolio/unicaf-corporate/unicaf_setup_1.jpg",
          ]}
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-near-black/70" />
        <div className="relative z-10 container-custom drop-shadow-hero">
          <nav aria-label="Breadcrumb" className="label-mono-sm text-cream/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-cream">Privacy Policy</span>
          </nav>
          <span className="label-mono text-accent/80">Legal / 00</span>
          <h1
            className="mt-6 font-heading text-cream max-w-4xl"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
            }}
          >
            Privacy Policy
          </h1>
          <p className="mt-8 max-w-xl text-cream/75 text-lg leading-relaxed">
            How we handle and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-custom max-w-3xl">
          <div>
            <p className="label-mono-sm text-muted mb-10">
              Effective date: 30 March 2026
            </p>

            <div className="space-y-10">
              {/* Introduction */}
              <div>
                <p className="text-muted leading-relaxed">
                  Modern Charm Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                  &ldquo;our&rdquo;) operates the website{" "}
                  <a
                    href="https://moderncharmevents.com"
                    className="text-primary hover:text-primary-dark transition-colors underline"
                  >
                    moderncharmevents.com
                  </a>
                  . This Privacy Policy explains what information we collect,
                  how we use it, and the choices you have. We are based in
                  Kampala, Uganda and comply with the Uganda Data Protection and
                  Privacy Act, 2019. Where we process data of visitors from the
                  European Union, we also respect the requirements of the
                  General Data Protection Regulation (GDPR).
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  1. Information We Collect
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  We collect only the information you provide directly or that
                  is gathered automatically when you visit our website.
                </p>

                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Information you provide
                </h3>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1 mb-4">
                  <li>
                    <strong className="font-medium text-dark">
                      Contact form:
                    </strong>{" "}
                    name, email address, phone number, event type, event date,
                    and your message.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Newsletter:
                    </strong>{" "}
                    email address only.
                  </li>
                </ul>

                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Information collected automatically
                </h3>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    <strong className="font-medium text-dark">
                      Vercel Analytics:
                    </strong>{" "}
                    page views and visitor counts. This service is
                    privacy-respecting — it does not use cookies, does not log
                    IP addresses, and does not collect personally identifiable
                    information.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Vercel Speed Insights:
                    </strong>{" "}
                    page load performance metrics only. No personal data is
                    collected.
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    To respond to your enquiry and discuss your event
                    requirements.
                  </li>
                  <li>
                    To send you our newsletter if you have subscribed (you can
                    unsubscribe at any time).
                  </li>
                  <li>
                    To monitor website performance and improve the user
                    experience.
                  </li>
                </ul>
                <p className="text-muted leading-relaxed mt-3">
                  We do not sell, rent, or trade your personal information to
                  third parties.
                </p>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  3. Data Sharing
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  We share your data only with the following service providers,
                  strictly for the purposes described above:
                </p>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    <strong className="font-medium text-dark">Resend</strong>{" "}
                    — processes contact form submissions and manages newsletter
                    subscribers on our behalf.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">Vercel</strong>{" "}
                    — hosts our website and provides privacy-respecting
                    analytics.
                  </li>
                </ul>
                <p className="text-muted leading-relaxed mt-3">
                  These providers process data only as instructed by us and are
                  bound by their own privacy commitments.
                </p>
              </div>

              {/* Analytics */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  4. Cookies and Analytics
                </h2>
                <p className="text-muted leading-relaxed">
                  Our website does not set any cookies. Vercel Analytics
                  operates without cookies and without storing IP addresses. We
                  do not use any third-party tracking scripts, advertising
                  pixels, or social media trackers.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  5. Data Retention
                </h2>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    <strong className="font-medium text-dark">
                      Contact form submissions:
                    </strong>{" "}
                    retained in our email for as long as needed to respond to
                    your enquiry and follow up on your event, then deleted.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Newsletter subscribers:
                    </strong>{" "}
                    retained until you unsubscribe. You can unsubscribe at any
                    time by clicking the link in any newsletter email or by
                    contacting us directly.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Analytics data:
                    </strong>{" "}
                    aggregated and anonymous — no personal data is retained.
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  6. Your Rights
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  Under the Uganda Data Protection and Privacy Act, 2019 (and
                  the GDPR for EU visitors), you have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    Request access to the personal data we hold about you.
                  </li>
                  <li>
                    Request correction of any inaccurate data.
                  </li>
                  <li>
                    Request deletion of your personal data.
                  </li>
                  <li>
                    Withdraw consent for newsletter communications at any time.
                  </li>
                  <li>
                    Lodge a complaint with the National Information Technology
                    Authority of Uganda (NITA-U) or your local data protection
                    authority.
                  </li>
                </ul>
                <p className="text-muted leading-relaxed mt-3">
                  To exercise any of these rights, contact us using the details
                  below.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-muted leading-relaxed">
                  Our website and services are not directed at children under
                  the age of 18. We do not knowingly collect personal
                  information from children. If you believe a child has provided
                  us with personal data, please contact us and we will delete it
                  promptly.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  8. Changes to This Policy
                </h2>
                <p className="text-muted leading-relaxed">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated effective
                  date. We encourage you to review this page periodically.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  9. Contact Us
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  If you have questions about this Privacy Policy or wish to
                  exercise your data rights, contact us:
                </p>
                <ul className="text-muted leading-relaxed space-y-1">
                  <li>
                    <strong className="font-medium text-dark">Company:</strong>{" "}
                    Modern Charm Limited
                  </li>
                  <li>
                    <strong className="font-medium text-dark">Email:</strong>{" "}
                    <a
                      href="mailto:info@moderncharmevents.com"
                      className="text-primary hover:text-primary-dark transition-colors underline"
                    >
                      info@moderncharmevents.com
                    </a>
                  </li>
                  <li>
                    <strong className="font-medium text-dark">Phone:</strong>{" "}
                    <a
                      href="tel:+256779399409"
                      className="text-primary hover:text-primary-dark transition-colors underline"
                    >
                      +256 779 399 409
                    </a>
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Location:
                    </strong>{" "}
                    Kampala, Uganda
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
