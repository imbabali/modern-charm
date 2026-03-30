import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Terms of Service | Modern Charm Uganda",
  description:
    "Terms of Service for Modern Charm Limited — conditions governing our event planning and styling services.",
  alternates: { canonical: "https://moderncharmevents.com/terms" },
  openGraph: {
    title: "Terms of Service | Modern Charm Uganda",
    description:
      "Terms and conditions governing Modern Charm Limited's event planning and styling services.",
    url: "https://moderncharmevents.com/terms",
    images: [{ url: "/images/portfolio/oscar-sandra/IMG_0795.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Modern Charm Uganda",
    description:
      "Terms and conditions governing Modern Charm Limited's event planning and styling services.",
    images: ["/images/portfolio/oscar-sandra/IMG_0795.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 md:py-40 lg:py-44">
        <HeroCarousel
          images={[
            "/images/portfolio/psfu-business-summit/IMG_4870.jpg",
            "/images/portfolio/hima-cement/IMG_5129.jpg",
            "/images/portfolio/bloomberg-philanthropies/IMG_4524.jpg",
          ]}
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/47 via-primary-dark/27 to-primary-dark/47" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center drop-shadow-hero">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/90"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Terms of Service</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-[0.025em]">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Conditions governing our event planning and styling services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-muted text-sm mb-8">
              Effective date: 30 March 2026
            </p>

            <div className="space-y-10">
              {/* Introduction */}
              <div>
                <p className="text-muted leading-relaxed">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern the
                  relationship between Modern Charm Limited
                  (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
                  and you (&ldquo;the Client&rdquo;) when you engage our event
                  planning, styling, or related services. By booking our
                  services, you agree to these Terms.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  1. Services
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  Modern Charm Limited provides event planning and coordination,
                  event styling and decor, concept development, corporate
                  gifting, and product launch management. The specific services
                  for your event will be outlined in a written proposal or
                  service agreement provided before work begins.
                </p>
                <p className="text-muted leading-relaxed">
                  We reserve the right to subcontract specific tasks (such as
                  floral arrangements, lighting, or catering) to trusted
                  third-party vendors. We remain responsible for coordinating
                  these vendors on your behalf.
                </p>
              </div>

              {/* Booking & Deposits */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  2. Booking and Deposits
                </h2>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
                  <li>
                    A <strong className="font-medium text-dark">40% deposit</strong>{" "}
                    of the agreed total is required to confirm your booking and
                    secure your event date.
                  </li>
                  <li>
                    The deposit covers initial consultations, concept
                    development, and the sourcing of materials and vendors.
                  </li>
                  <li>
                    The <strong className="font-medium text-dark">remaining
                    balance</strong> is due no later than{" "}
                    <strong className="font-medium text-dark">two weeks
                    before the event date</strong>.
                  </li>
                  <li>
                    For large or multi-day events, we can arrange a flexible
                    payment schedule by mutual agreement.
                  </li>
                  <li>
                    We accept mobile money, bank transfer, and other payment
                    methods agreed in advance.
                  </li>
                </ul>
                <p className="text-muted leading-relaxed mt-3">
                  Your event date is not confirmed until we receive the deposit
                  and issue a written confirmation.
                </p>
              </div>

              {/* Cancellation & Refunds */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  3. Cancellation and Refund Policy
                </h2>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
                  <li>
                    <strong className="font-medium text-dark">
                      More than 60 days before the event:
                    </strong>{" "}
                    you may cancel and receive a refund of the deposit, less any
                    costs already incurred for materials, vendor bookings, or
                    other non-recoverable expenses.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      30 to 60 days before the event:
                    </strong>{" "}
                    50% of the deposit is refundable, less costs already
                    incurred.
                  </li>
                  <li>
                    <strong className="font-medium text-dark">
                      Less than 30 days before the event:
                    </strong>{" "}
                    the deposit is non-refundable. Payments made above the
                    deposit will be refunded, less costs already incurred.
                  </li>
                  <li>
                    Date changes are subject to availability. We will make
                    reasonable efforts to accommodate rescheduling at no
                    additional charge, provided the new date is within six
                    months of the original.
                  </li>
                </ul>
              </div>

              {/* Client Responsibilities */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  4. Client Responsibilities
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  To allow us to deliver our best work, we ask that you:
                </p>
                <ul className="list-disc pl-6 text-muted leading-relaxed space-y-1">
                  <li>
                    Provide accurate information about your event requirements,
                    guest count, venue, and preferences.
                  </li>
                  <li>
                    Respond to communications and approve concepts within
                    agreed timelines.
                  </li>
                  <li>
                    Ensure venue access for setup and breakdown as agreed.
                  </li>
                  <li>
                    Inform us promptly of any changes to the event scope, date,
                    or venue.
                  </li>
                  <li>
                    Make payments on the agreed schedule.
                  </li>
                </ul>
                <p className="text-muted leading-relaxed mt-3">
                  Delays caused by late responses, late payments, or incomplete
                  information may affect the quality or scope of deliverables.
                  We are not liable for issues arising from circumstances
                  outside our control.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  5. Intellectual Property
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  Photos and videos taken at events we plan or style may be
                  used in our portfolio, website, social media, and marketing
                  materials unless you request otherwise in writing before the
                  event.
                </p>
                <p className="text-muted leading-relaxed">
                  Design concepts, mood boards, and creative materials produced
                  by Modern Charm remain our intellectual property. These
                  materials are provided for your event only and may not be
                  reproduced, shared, or used by other vendors without our
                  written consent.
                </p>
              </div>

              {/* Force Majeure */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  6. Force Majeure
                </h2>
                <p className="text-muted leading-relaxed">
                  Neither party is liable for failure to perform obligations
                  caused by circumstances beyond reasonable control, including
                  natural disasters, pandemics, government restrictions, civil
                  unrest, severe weather, or power outages. In such cases, we
                  will work with you to reschedule or adjust the scope of
                  services.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  Our total liability for any claim arising from our services is
                  limited to the amount you have paid us for the specific event
                  in question.
                </p>
                <p className="text-muted leading-relaxed">
                  We are not liable for indirect, incidental, or consequential
                  losses, including loss of enjoyment, lost profits, or
                  emotional distress. We are also not liable for the
                  performance of third-party vendors we recommend, although we
                  exercise care in selecting vendors we trust.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  8. Confidentiality
                </h2>
                <p className="text-muted leading-relaxed">
                  We treat all client information as confidential. Personal
                  details, event plans, budgets, and guest lists will not be
                  shared with anyone outside our team and contracted vendors
                  without your consent, except where required by law.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  9. Governing Law
                </h2>
                <p className="text-muted leading-relaxed">
                  These Terms are governed by and interpreted in accordance with
                  the laws of the Republic of Uganda.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  10. Dispute Resolution
                </h2>
                <p className="text-muted leading-relaxed">
                  In the event of a dispute, both parties agree to first attempt
                  resolution through good-faith negotiation. If negotiation does
                  not resolve the matter within 30 days, either party may refer
                  the dispute to mediation in Kampala, Uganda. If mediation
                  fails, the dispute will be submitted to the courts of
                  competent jurisdiction in Uganda.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  11. Changes to These Terms
                </h2>
                <p className="text-muted leading-relaxed">
                  We may update these Terms from time to time. Changes will be
                  posted on this page with an updated effective date. Existing
                  bookings remain subject to the Terms in effect at the time of
                  booking.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-dark mb-4 tracking-[0.025em]">
                  12. Contact Us
                </h2>
                <p className="text-muted leading-relaxed mb-3">
                  If you have questions about these Terms, contact us:
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
