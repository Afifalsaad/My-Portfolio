import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  rotateIn,
  popUp,
  springUp,
  staggerContainer,
  defaultViewport,
} from '../lib/motionVariants';

const educationData = [
  {
    title: "Secondary School Certificate",
    year: "2019",
    description: "Completed with excellent academic standing, building a strong foundation in core subjects."
  },
  {
    title: "Higher Secondary School Certificate",
    year: "2021",
    description: "Advanced studies focusing on science and mathematics, preparing for higher education challenges."
  },
  {
    title: "University Of Chittagong",
    year: "Current Student",
    description: "Pursuing deep academic research and literary studies while maintaining a strong focus on technology.",
    subtitle: "Department Of Bengali Language And Literature"
  }
];

// প্রতিটা card এ ভিন্ন random entry — সব GPU-safe
const cardVariants = [fadeLeft, popUp, springUp];

const Education = () => {
  return (
    <div className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20 relative z-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2
            variants={rotateIn}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Education{' '}
            <span className="text-primary relative inline-block">
              Qualification
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full -z-10"></span>
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-300">
            A journey of continuous learning and academic milestones that shape my professional foundation.
          </motion.p>
        </motion.div>

        {/* Timeline — stagger দিয়ে একে একে আসে */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={staggerContainer(0.18, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 group"
              variants={cardVariants[index % cardVariants.length]}
              whileHover={{
                x: 5,
                transition: { type: 'spring', stiffness: 280, damping: 22 },
              }}
            >
              {/* Dot */}
              <motion.div
                className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-primary group-hover:scale-125 transition-transform duration-300"
                variants={zoomIn}
              />

              <div className="p-6 bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                  <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
                    {edu.year}
                  </span>
                </div>
                {edu.subtitle && (
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">{edu.subtitle}</p>
                )}
                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Education;