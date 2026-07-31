import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeLeft,
  zoomIn,
  popUp,
  springUp,
  slideRotateLeft,
  staggerContainer,
  defaultViewport,
} from '../lib/motionVariants';

const contactItems = [
  {
    href: "mailto:afifalsaad01@gmail.com",
    label: "Email",
    sublabel: "afifalsaad01@gmail.com",
    cta: "Send an email",
    icon: <span className="material-symbols-outlined text-3xl">mail</span>,
  },
  {
    href: "tel:+8801720085585",
    label: "Phone",
    sublabel: "+880 1720 085 585",
    cta: "Call me now",
    icon: <span className="material-symbols-outlined text-3xl">call</span>,
  },
  {
    href: "https://wa.me/8801720085585",
    label: "WhatsApp",
    sublabel: "Chat on WhatsApp",
    cta: "Message me",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
];

// ৩টা card এ ৩টা ভিন্ন smooth effect
const cardVariants = [zoomIn, popUp, springUp];

const Contact = () => {
  return (
    <div
      className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20 relative z-10"
      id="contact"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact{' '}
            <span className="text-primary relative inline-block">
              Me
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full -z-10"></span>
            </span>
          </motion.h2>
          <motion.p variants={slideRotateLeft} className="text-lg text-gray-600 dark:text-gray-300">
            Ready to start your next project? Let's connect and discuss how we can work together.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                className="group relative flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-primary/10"
                href={item.href}
                target={item.target}
                rel={item.rel}
                variants={cardVariants[index % cardVariants.length]}
                whileHover={{
                  y: -7,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 260, damping: 22 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Icon — hovered হলে হালকা bounce */}
                <motion.div
                  className="w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                  whileHover={{
                    scale: 1.18,
                    rotate: [0, -8, 8, -4, 0],
                    transition: { duration: 0.45 },
                  }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">{item.sublabel}</p>
                <span className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.cta}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;