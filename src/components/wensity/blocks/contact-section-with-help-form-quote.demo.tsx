import React, { Suspense, lazy } from "react";
import {
  ContactSectionWithHelpFormQuote,
  ContactSectionSkeleton,
  ContactSectionErrorBoundary,
  type QuoteItem,
  type ContactFormData,
} from "@/components/wensity/blocks/contact-section-with-help-form-quote";

// Lazy-loaded block for code-splitting & suspense demonstration
const LazyContactSection = lazy(
  () => import("@/components/wensity/blocks/contact-section-with-help-form-quote")
);

// Strongly typed enterprise quotes (Strict Mode Compatible)
const customTestimonials: readonly QuoteItem[] = [
  {
    quote:
      "Deploying the Wensity help form and social proof block reduced customer drop-off on our enterprise demo page by 38%. The UI feels like an extension of Linear or Vercel.",
    author: "Danielle Wright",
    role: "Chief Technology Officer",
    company: "ApexCloud Platforms",
    rating: 5,
  },
  {
    quote:
      "The combination of filled inputs, instant live validation states, and the glass quote card provides our customers with instant assurance when reaching out.",
    author: "Tariq Al-Mansoor",
    role: "VP of Product Design",
    company: "FinFlow Global",
    rating: 5,
  },
  {
    quote:
      "Fully accessible keyboard controls and zero layout thrashing made our compliance audit a breeze. Truly gold standard UI engineering.",
    author: "Clara Beauchamp",
    role: "Staff Accessibility Engineer",
    company: "OmniSystem",
    rating: 5,
  },
] as const;

const customTopics: readonly string[] = [
  "General Inquiry",
  "Product Architecture & Custom Pricing",
  "Enterprise SLA & Dedicated Support",
  "Security, SOC2 & Compliance Audit",
] as const;

export function ContactSectionWithHelpFormQuoteDemo() {
  const handleFormSubmit = async (data: ContactFormData): Promise<void> => {
    // Production async API submission simulation
    console.log("Submitting contact payload to backend API:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-teal-500/20 selection:text-teal-600 dark:selection:text-teal-400">
      {/* Page Header / Contextual Nav Banner */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight">
              Wensity UI Showcase
            </span>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            Block Integration Demo
          </span>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="relative flex flex-col items-center">
        {/* Intro Context Banner */}
        <div className="w-full max-w-4xl px-4 sm:px-6 pt-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            Contact & Support Center
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-ready help form paired with an interactive customer quotation carousel,
            engineered for high-conversion enterprise interfaces.
          </p>
        </div>

        {/* ====================================================================
            1 & 2. Production Integration: ErrorBoundary + Suspense Fallback
            ==================================================================== */}
        <ContactSectionErrorBoundary>
          <Suspense fallback={<ContactSectionSkeleton />}>
            <ContactSectionWithHelpFormQuote
              badge="Priority Support"
              heading="Let's build something remarkable together"
              description="Whether you have an architectural inquiry, want a custom enterprise deployment, or need technical assistance, our specialists are ready."
              quotes={customTestimonials}
              topics={customTopics}
              onSubmit={handleFormSubmit}
              className="my-8"
            />
          </Suspense>
        </ContactSectionErrorBoundary>

        {/* Additional Supporting Section for Realistic Page Spacing */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border/40">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/40">
              <h3 className="font-semibold text-base mb-1">Direct Email</h3>
              <p className="text-sm text-muted-foreground mb-3">Reach our technical desk directly</p>
              <a href="mailto:support@wensity.com" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
                support@wensity.com &rarr;
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-card/40">
              <h3 className="font-semibold text-base mb-1">Global Response Time</h3>
              <p className="text-sm text-muted-foreground mb-3">Enterprise SLA guarantee</p>
              <span className="text-sm font-medium text-foreground">&lt; 2 Hours Average</span>
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-card/40">
              <h3 className="font-semibold text-base mb-1">Office Hours</h3>
              <p className="text-sm text-muted-foreground mb-3">Worldwide coverage</p>
              <span className="text-sm font-medium text-foreground">24/7 Enterprise Support</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactSectionWithHelpFormQuoteDemo;

