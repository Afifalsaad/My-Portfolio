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
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB50lEQVR4nO2YzU4CQQzH52JCfACD+BgePEGLwZNcmW7EyM0nAH0APegj+C66HeLHibMe9Am8CR40wWC6QILAIMIujji/pMmG7m7+bWdnSpXyeDwej2cAYCoC6ysw+hUNdRyxlmjCMNhVkwDWpw6I7XxjJxbxVJQbwNAbMFWz9fK6coRsvbwOTDXRFgUxrhLIFEYBMFWVo6DRR12N+mqMk1pdZymtHAW4lI4qwNQccfbXmHIctOlcmgAwDLaUo2AYbNkDYLrr7UJtYDoHrqSUIwBXUpEmQ21rACM3sb53oRooWRctveR+u9S/PMD6A1hfFBvF1YWqVv2E6rMB0Y85Q9mpvtXhh8Hop3xd5xYlHick8UebzaKrAZasT7sLXYv91reBQ2vdtpHMfA4kVQ2YIuuxBJDEt4EzJCWWk3jeavw064m0ErNWY97gMe5eaFpB82Q98WZu9KjXD3lDezu3+2tici2/xdGqYJLd6GA1LDZT1hfaTm82DlewXqqAIYNMz2JynTf6QHzzvh+X/v+Achz0AfwyuLwBMDXF4dJAa5jty9JG78B8GXFGs8fuYKumHAUNHdsHW2Gw2x8tygSscBNklCMUboKMiAemd+toUZDB6Z8d7vaR6HrLKRo1/qnxusfj8Xj+HZ8ggr4/d/7j+gAAAABJRU5ErkJggg==",
    label: "Email",
    value: "afifalsaad01@gmail.com",
    href: "mailto:afifalsaad01@gmail.com",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWElEQVR4nO1Za2hcVRA+rQpatVSKWBUUxEdRKmKlaI07595UqRgbBc/MTSIIIvXRH75/iEj/iBVRUPujaAWDVXy3glisTXbmJsVGDSoFwfpDpfhGQa3a2qors/fc7s1Nsm6x2RwxH+yvM3c58/5mjjEzmEF7EA26s4Cp3wp9DYw7rdAdpmZmmdBx6ZZrj7aCa4DpdytUK/6A8X4TMoCTayzjLn/ZP63QkxXpOSOSZIUV2m8Z9wG7001oWLptxbEg+FrD2vhenLolRRkrtN4r9oIJCjUzyzJV65cT+t6meKOprZ5dFosH3MmW6TfL9BdwcoEJBbaaXOEt++WyYXdKM1lgfDBTFAdMKACmh70C9/yTbMdw73HA9IPKRyldZkIAMD7iY//W1uTp7ro84/sThVrbAYw3+MR9vRX5C992RxUqVWKmG/FAcgII/WEF9ywf6Zvbyjea6D7p3zQhAIQks6jraUXeVvFir8CHJgTYNFnl82BrKyGUK2yF1pkQANw9DwR/0RqvHKhpzxDa5K3/hYafCQXA+IS36uOTyVQkudon709NFZ0OxEPJuVmXpV+B3YKJZHK6AZzcbkKEZdzoLfzoJOef1JvYYHKOCREVcYsyFop7JqIVwPSR90A4XKgMYHzOd9qN5TMr+HQzDwWBOGOdP+tFK0KXF8/U8nUPMe6LUqyYUGEF7/T04rNyd7ZCD3hG+o0qa0IEMBxumd7NwoX6i2fuJXcYMG7xSox0jXbNMSECuGdhfYBRT6RExbPOrVfNt0yfegXfWDy68ggTIqzgLb657Y6H3NnFM52VgfFbf74hCGo9EYDpWU8dPlbLF8/iFM/XruyVeD5IT3SNds2xQh/4S27XtUvxHNh1gNCPvvRuDjInlm1LTspjXi9ZtjSwO0+rkvfUaLPZGtgt0HWNUnGdJ+r51Y7wGxvz+Ex5S9c5RGfmVMMyfVcRjMZfvmehLg/KCzMdT9syY0dVtzhvcqrEeE90z1MP+Yvtt4Jro5SWKlGsz9KcfavzREXcRZHQynw8zbcdU05TgMkeUIJxczknNBx0Bek3e2MtLXUa8moxT4CvOxKY7sq3HZ4Rv6gen1JPFEro9nJ1KlSopyzTDq1gVvDliuCVTYcq3Tvlvae+xqT7pmyhrBZqNDPceagodqxcTGh9tmjQJpqsMlNanRoldvehXLPYKnX7kNph2tAnNjRinPpbXc80Q+dw72k+lHaZdgDY3aTjqK8mn5ep+MHC+m24ziCmza867xSqzqZosPfUg/2fOHVLtIrpI0vblwdKxXXozzkSCO0FxscmWxSMQ231bH2f8NZfY6YLl6R9J2qzy/tBFl64VrtxK2tLjf1xPWY6oOUVhF7RBmXzRiU4YFPsKye7hlve0PS5y4QEVcQKrdNy26AOtFe34sB4mxW61zJ+leeOCRXLR/rmAtPN+qx1oFmNJXZvAbtjzH8BHUPu+Ejc9dkjCz70b0vvDGbwf8Df9zYJSKV3B0MAAAAASUVORK5CYII=",
    label: "Direct Phone",
    value: "+880 1720 085 585",
    href: "tel:+8801720085585",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nO1ZXWhcVRA+qfX/31pBERGr+G4Vi6Q7Z5ukxDbWIN6Z26aliihoQF8UsQhRCJYqWoN/L0XrQ0UrVanQoiE7s0la+1Dxr/jQKlqR+lsRrKT1b2XuZpOzN/dm9+7e3X3ZD/KQ5Zw5M3PmzPedc41po4026kdhaAEwLrNCm4BxFwgesoy/Wca/rOCUZTxmGb8EpreA6WGb8282BdNhWg3ggSut4GYQ+t4KFZL94TdW6KnuSf+KpjveNdq/yAq9Akynkjs+J5ApYBzpHPcWN8V5YPRB6Nc5jjAeA8ZtwLRhRR5v0CCXHrzvdOCNZy3PD1yuvwF791qhV6PmA+NPWaE7Gug4LNSsz3WcclnBVd5O77RqbRUDoz5g3Dc3EHopia2qsGy/d7YVfD+U8cMZ8XvqtZ0VXAVMR0NJ2d13sO+cFDMfcl7wtdQWMMb0Hhi4ABh3hINIZSfCZQOMj5tGoGA6gHE4lKiX6z6wTXHeQTiImg+2dhG3WwDTdtMMFEyHFXrD7U41tdiy0mE83PPB+nNNk9A96l1oGb9zSumBxAzrklQ2TyujxvXsW3+ZtlHL9B8Ifqv/pxWEzXkQyJCA6Pwbk00W3OxEz5GDCkMLLON46Iw8aVJE12j/opX7vUsSTdLWVaZtcv7quP4dxcZKUqaVgKKqdOQBLIwZNxKlbbLioWklrNAmpyS2zTNuZ4w422taCWDc5bTODXHjrNDWqACA8XnTSoBeRqadUQUZN87miSKE2MeNaLc2723UbgeM/ZUDYDpecki7QNy43j29ZyrJlNe/vyZt571iUzk5vcYP1QQw0/+9Q94Z8421ebqnbAcED6QthaEo40tr/F15wmy0Bc1yZdpHDpXREyn6b9SH2QTRyYoTLNPPpQnVaBBgutotu4CVGe9OK4DOcW+x0+F+qTgBhCanM/mnXgerWQQYu3V7nU70LzA+FvXyAIzPWsZ3gL3OamxnBG9ykvN5xQnZMVpiBZ8BJlvNArOO0f2a/RAzf5gd864vG1Nebnlgv7eC3bucHXjbNBJW6KFwECD0DzC+GRBk8E4USX7PzRPAdmfsow0NoLigfycInoh2NPoPYhhfO5DbqhOr0lqhZajlUX0AFMn4GcHbnDFHVQFX7YQeYL1I6PNHrYFkhG7VNquHep4A3o3jDis04ezScKLFreDTs22xvq3rnvCuAqZH9FBrK1SyBKFP9aErLqsq450zMpX4CdIKHSkZyAgtN00EsHceMH7tZH8kkYFiK53Z4j8qSYq0Ac4bUXCpn1h3cSIDNu8POuSxu2GeRsAKDtX9rKJOzxjJ+4OmRc5DLXcLLRctm5kMjNES05ya3xFStu/VpGwzglnH0JH412WvM/jSUidszl/tHtiS8/qgXJNBYNribOGLpd+7JtZdo1pGjbs7ZIU+0ptSktcIZdhpkpqIYOWRuu4UVugTx+BWK/iCvsxVwabH9dVae3s25y3VjxpKhlqSwGsvVS5RYabaJnyTs8Ws/5jKBw6V0VXRv+BXIPR7Es0z3ycm4Nsvqtv54g7g3hiHTwTdKe8PAnvX6thbJtecHyhQoS+SOq7aBhiHdadMmlCDlnGPOlyke9qSzfsrKpFZRtZeZ8V/EJhe13nBp9Ugu3RKywsYP1M9r5JYLymJhFkbbbRh4vA/G60YADov9PwAAAAASUVORK5CYII=",
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
          className="mb-8 py-8 border-b border-teal-300/40 max-w-5xl mx-auto text-muted-foreground dark:text-[#708769]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider">
                Prefer direct communication?
              </p>
              <p className="text-sm">
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
                    {channel.image ? (
                      <img
                        src={channel.image}
                        alt={channel.label}
                        className="h-4 w-4 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    ) : null}
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
