"use client";

import React, {
  useState,
  useId,
  useCallback,
  type FormEvent,
  type ReactNode,
  type ComponentType,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Send,
  CheckCircle2,
  AlertCircle,
  Star,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// TypeScript Interfaces & Types (Strict Mode Compatible)
// ============================================================================

export interface QuoteItem {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
  readonly avatarUrl?: string;
  readonly logoUrl?: string;
  readonly rating?: number;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly topic: string;
  readonly message: string;
}

export interface ContactSectionWithHelpFormQuoteProps {
  /** Section badge pill label */
  readonly badge?: string;
  /** Main primary heading */
  readonly heading?: string;
  /** Subheading / supporting description */
  readonly description?: string;
  /** Array of customer quotes / social proof items */
  readonly quotes?: readonly QuoteItem[];
  /** Topic options for the inquiry dropdown/selector */
  readonly topics?: readonly string[];
  /** Async or sync submission handler */
  readonly onSubmit?: (data: ContactFormData) => Promise<void> | void;
  /** Optional custom CSS classes for the root container */
  readonly className?: string;
}

// ============================================================================
// Default Constants
// ============================================================================

export const DEFAULT_QUOTES: readonly QuoteItem[] = [
  {
    quote:
      "Wensity components slashed our frontend build time in half. The attention to detail in animations, accessibility, and Tailwind CSS v4 design tokens is extraordinary.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Vanguard Tech",
    rating: 5,
  },
  {
    quote:
      "Integrating the help form block was seamless. Our enterprise customers constantly compliment how intuitive and responsive the support flow feels on all screen sizes.",
    author: "Marcus Chen",
    role: "Head of Product Experience",
    company: "SaaSify Studio",
    rating: 5,
  },
  {
    quote:
      "The polished frosted card styling and smooth carousel transitions gave our landing page an instant Tier-1 startup finish. Truly production grade.",
    author: "Sophia Alvarez",
    role: "Lead UI Architect",
    company: "HyperScale Cloud",
    rating: 5,
  },
];

export const DEFAULT_TOPICS: readonly string[] = [
  "General Inquiry",
  "Product Demo & Pricing",
  "Enterprise Support",
  "Partnership & Custom Work",
];

// ============================================================================
// Production Skeleton / Suspense Loading Component
// ============================================================================

export function ContactSectionSkeleton({ className }: { readonly className?: string }) {
  return (
    <section
      className={cn(
        "relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none",
        className
      )}
      aria-busy="true"
      aria-label="Loading contact section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-pulse">
        {/* Left Form Column Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-6 w-28 rounded-full bg-muted" />
          <div className="h-10 w-3/4 rounded-xl bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />

          <div className="pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-12 rounded-xl bg-muted" />
              <div className="h-12 rounded-xl bg-muted" />
            </div>
            <div className="h-12 rounded-xl bg-muted" />
            <div className="h-32 rounded-xl bg-muted" />
            <div className="h-12 w-40 rounded-xl bg-muted" />
          </div>
        </div>

        {/* Right Quote Card Skeleton */}
        <div className="lg:col-span-5">
          <div className="h-[420px] rounded-3xl bg-muted/60 border border-border/30 p-8 flex flex-col justify-between">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-5/6 rounded bg-muted" />
              <div className="h-4 w-4/6 rounded bg-muted" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="space-y-2">
                <div className="h-4 w-28 rounded bg-muted" />
                <div className="h-3 w-20 rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Production Error Boundary
// ============================================================================

interface ContactSectionErrorBoundaryProps {
  readonly children: ReactNode;
  readonly fallback?: ReactNode;
}

interface ContactSectionErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null;
}

export class ContactSectionErrorBoundary extends React.Component<
  ContactSectionErrorBoundaryProps,
  ContactSectionErrorBoundaryState
> {
  public override state: ContactSectionErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ContactSectionErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (typeof console !== "undefined" && console.error) {
      console.error("ContactSectionWithHelpFormQuote Error:", error, errorInfo);
    }
  }

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <section className="w-full max-w-4xl mx-auto my-12 p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-center backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-2">Unable to load the contact section</h3>
          <p className="text-sm opacity-90 mb-4">
            An unexpected error occurred while rendering the form and customer quote module.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="inline-flex items-center justify-center rounded-xl bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
          >
            Retry Section
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

// ============================================================================
// Main Block Component: ContactSectionWithHelpFormQuote
// ============================================================================

export function ContactSectionWithHelpFormQuote({
  badge = "We're here to help",
  heading = "Let's build something remarkable together",
  description = "Have a question, need enterprise assistance, or want to explore tailored integrations? Drop us a line and our technical specialists will respond within 24 hours.",
  quotes = DEFAULT_QUOTES,
  topics = DEFAULT_TOPICS,
  onSubmit,
  className,
}: ContactSectionWithHelpFormQuoteProps) {
  // Unique accessible IDs for form fields
  const nameId = useId();
  const emailId = useId();
  const topicId = useId();
  const messageId = useId();
  const formFeedbackId = useId();

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topic: topics[0] ?? "General Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Testimonial carousel state
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const totalQuotes = quotes.length;

  const handlePrevQuote = useCallback(() => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? totalQuotes - 1 : prev - 1));
  }, [totalQuotes]);

  const handleNextQuote = useCallback(() => {
    setCurrentQuoteIndex((prev) => (prev === totalQuotes - 1 ? 0 : prev + 1));
  }, [totalQuotes]);

  // Keyboard navigation for quote carousel
  const handleQuoteKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevQuote();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextQuote();
      }
    },
    [handlePrevQuote, handleNextQuote]
  );

  // Accessible Form Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Fallback default network simulation
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        topic: topics[0] ?? "General Inquiry",
        message: "",
      });
    } catch (err) {
      setFormStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message. Please try again."
      );
    }
  };

  const currentQuote = quotes[currentQuoteIndex] ?? DEFAULT_QUOTES[0];

  return (
    <section
      aria-label="Contact and assistance section"
      className={cn(
        "relative w-full overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
        className
      )}
    >
      {/* Subtle Teal / Mint Ambient Corner Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-bl from-teal-500/15 via-emerald-500/10 to-transparent blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-transparent blur-3xl -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* ==================================================================
            Left Column: Help & Contact Form
            ================================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Mint Pill Badge */}
          {badge && (
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 mb-4 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{badge}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] text-balance">
            {heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
            {description}
          </p>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 space-y-4"
            aria-describedby={formStatus !== "idle" ? formFeedbackId : undefined}
          >
            {/* Live Feedback Banner */}
            <div
              id={formFeedbackId}
              role="status"
              aria-live="polite"
              className="min-h-[1.5rem]"
            >
              <AnimatePresence mode="wait">
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor={nameId}
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  disabled={formStatus === "submitting"}
                  className="w-full rounded-xl bg-muted/60 dark:bg-muted/30 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:bg-background focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor={emailId}
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Work Email <span className="text-destructive">*</span>
                </label>
                <input
                  id={emailId}
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  disabled={formStatus === "submitting"}
                  className="w-full rounded-xl bg-muted/60 dark:bg-muted/30 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:bg-background focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                />
              </div>
            </div>

            {/* Row 2: Topic Selection */}
            {topics.length > 0 && (
              <div className="space-y-1.5">
                <label
                  htmlFor={topicId}
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Inquiry Topic
                </label>
                <div className="relative">
                  <select
                    id={topicId}
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, topic: e.target.value }))
                    }
                    disabled={formStatus === "submitting"}
                    className="w-full appearance-none rounded-xl bg-muted/60 dark:bg-muted/30 border border-border/60 px-4 py-3 text-sm text-foreground transition-all duration-200 focus:bg-background focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t} className="bg-background text-foreground">
                        {t}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </div>
            )}

            {/* Row 3: Message */}
            <div className="space-y-1.5">
              <label
                htmlFor={messageId}
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id={messageId}
                required
                rows={4}
                placeholder="Tell us about your project requirements or support question..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                disabled={formStatus === "submitting"}
                className="w-full resize-y rounded-xl bg-muted/60 dark:bg-muted/30 border border-border/60 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:bg-background focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50 min-h-[120px]"
              />
            </div>

            {/* Submit Pill Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={cn(
                  "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-md transition-all duration-200 active:scale-95",
                  "bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-60"
                )}
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Sending inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ==================================================================
            Right Column: Interactive Glass Quote Card & Social Proof
            ================================================================== */}
        <div className="lg:col-span-5 w-full">
          <div
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
            onKeyDown={handleQuoteKeyDown}
            className="group relative rounded-3xl bg-card/75 dark:bg-card/40 backdrop-blur-2xl border border-border/60 p-7 sm:p-9 shadow-xl shadow-teal-950/[0.04] dark:shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            {/* Top Bar: Quote Mark + Carousel Arrows */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                <Quote className="h-6 w-6" />
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevQuote}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/80 hover:bg-muted text-foreground transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextQuote}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/80 hover:bg-muted text-foreground transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Testimonial Quote Carousel Content */}
            <div className="relative min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${currentQuoteIndex + 1} of ${totalQuotes}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Rating Stars */}
                  {currentQuote.rating && (
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: currentQuote.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                  )}

                  {/* Quote Body */}
                  <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-foreground tracking-tight">
                    &ldquo;{currentQuote.quote}&rdquo;
                  </blockquote>

                  {/* Author Attribution */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {currentQuote.avatarUrl ? (
                        <img
                          src={currentQuote.avatarUrl}
                          alt={currentQuote.author}
                          className="h-11 w-11 rounded-full object-cover border border-border/50"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-emerald-600 text-white font-bold text-sm shadow-sm">
                          {currentQuote.author.slice(0, 1)}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-sm text-foreground">
                          {currentQuote.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {currentQuote.role} &bull; {currentQuote.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Pagination Dots */}
            <div className="mt-8 flex items-center justify-center gap-1.5" aria-hidden="true">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setCurrentQuoteIndex(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    currentQuoteIndex === idx ? "w-6 bg-teal-500" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionWithHelpFormQuote;

