import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  fadeUp,
  fadeLeft,
  rotateIn,
  popUp,
  springUp,
  staggerContainer,
  defaultViewport,
} from "../lib/motionVariants";

const educationData = [
  {
    title: "Secondary School Certificate",
    year: "2019",
    description:
      "Completed with excellent academic standing, building a strong foundation in core subjects.",
  },
  {
    title: "Higher Secondary School Certificate",
    year: "2021",
    description:
      "Advanced studies focusing on science and mathematics, preparing for higher education challenges.",
  },
  {
    title: "University Of Chittagong",
    year: "Current Student",
    description:
      "Pursuing deep academic research and literary studies while maintaining a strong focus on technology.",
    subtitle: "Department Of Bengali Language And Literature",
  },
];

const cardVariants = [fadeLeft, popUp, springUp];

// ── Per-card component with useInView for symmetric scroll animation ──────────
const EduCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.35,
    margin: "-150px 0px -150px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 group"
      variants={popUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { type: "spring", stiffness: 260, damping: 22 },
      }}>
      {/* Timeline dot */}
      <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-primary group-hover:scale-125 transition-transform duration-300" />

      <div className="p-6 bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-primary/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {edu.title}
          </h3>
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
            {edu.year}
          </span>
        </div>
        {edu.subtitle && (
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
            {edu.subtitle}
          </p>
        )}
        <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="py-16 border-gray-200 dark:border-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-150px 0px -150px 0px",
          }}>
          <motion.h2
            variants={popUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education{" "}
            <span className="text-primary relative inline-block">
              Qualification
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full -z-10"></span>
            </span>
          </motion.h2>
          <motion.p
            variants={popUp}
            className="text-lg text-gray-600 dark:text-gray-300">
            A journey of continuous learning and academic milestones that shape
            my professional foundation.
          </motion.p>
        </motion.div>

        {/* Timeline — each card independently animates in/out via useInView */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EduCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
