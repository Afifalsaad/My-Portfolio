import React, { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ContactSectionWithHelpFormQuote,
  ContactSectionSkeleton,
  ContactSectionErrorBoundary,
} from "./wensity/blocks/contact-section-with-help-form-quote";
import { Mail, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

const portfolioQuotes = [
  {
    quote:
      "Afif engineered the Garments Master platform with remarkable speed and precision. The real-time workflow, intuitive dashboards, and responsive design elevated our entire operational efficiency.",
    author: "Operations Director",
    role: "Project Stakeholder",
    company: "Garments Master System",
    rating: 5,
  },
  {
    quote:
      "Working with Afif on Earth Clean was seamless. His focus on high-performance animations, clean architecture, and modern UX helped us deliver an impactful sustainability platform.",
    author: "Product Lead",
    role: "Platform Co-creator",
    company: "Earth Clean Initiative",
    rating: 5,
  },
  {
    quote:
      "The Skill Swap platform is exceptionally intuitive, fast, and resilient. Afif is a top-tier full-stack developer who consistently goes above and beyond.",
    author: "Technical Coordinator",
    role: "Engineering Lead",
    company: "Skill Swap Platform",
    rating: 5,
  },
];

const inquiryTopics = [
  "Full-Stack Web Development",
  "Frontend Architecture & React",
  "Freelance Project Collaboration",
  "Full-Time / Contract Opportunity",
  "General Inquiry",
];

const directChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "afifalsaad01@gmail.com",
    href: "mailto:afifalsaad01@gmail.com",
  },
  {
    icon: Phone,
    label: "Direct Phone",
    value: "+880 1720 085 585",
    href: "tel:+8801720085585",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+880 1720 085 585",
    href: "https://wa.me/8801720085585",
    external: true,
  },
];

const Contact = () => {
  const handleFormSubmit = async (formData) => {
    // Construct mailto link or trigger backend service
    console.log("Contact form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 800));
  };

  return (
    <div id="contact" className="relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Wensity Production Block with Error Boundary & Suspense */}
        <ContactSectionErrorBoundary>
          <Suspense fallback={<ContactSectionSkeleton />}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <ContactSectionWithHelpFormQuote
                badge="Let's Connect"
                heading="Ready to build your next project together?"
                description="Have an idea for a web platform, need full-stack architecture support, or want to discuss an exciting opportunity? Send a message and let's bring it to life."
                quotes={portfolioQuotes}
                topics={inquiryTopics}
                onSubmit={handleFormSubmit}
                className="py-6 sm:py-10"
              />
            </motion.div>
          </Suspense>
        </ContactSectionErrorBoundary>

        {/* Quick Direct Channels Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 py-8 border-b border-teal-300/40 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-muted-foreground">
                Prefer direct communication?
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-foreground">
                Reach out directly via email, phone, or instant messaging.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {directChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-muted-foreground dark:bg-[#0c1c1e] hover:bg-white dark:bg-card/60 dark:hover:bg-card border border-teal-700/90 dark:border-border/60 text-xs font-medium text-gray-800 dark:text-foreground shadow-xs transition-all duration-200 active:scale-95 hover:border-teal-500/40">
                    <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{channel.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-gray-400 dark:text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
