import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  popUp,
  zoomIn,
  springUp,
  rotateInRight,
  staggerContainer,
  defaultViewport,
} from '../lib/motionVariants';

const projectsData = [
  {
    id: 1,
    title: "Garments Master",
    description: "Garments Order & Production Tracker System is a web-based management platform built to help small and medium-sized garment factories efficiently handle their production workflow. The system enables factories to track buyer orders, manage different production stages such as cutting, sewing, and finishing, and monitor inventory levels to ensure smooth operations and timely delivery. The platform allows users to add, view, sell, and update product information with ease.",
    goal: "To simplify garment production management, improve workflow transparency, and ensure timely delivery.",
    category: "Production Management",
    image: "/Garments Master.png",
    github: "https://github.com/Afifalsaad/garments-master",
    live: "https://assignment11-196f4.web.app"
  },
  {
    id: 2,
    title: "Earth Clean",
    description: "This project is a web-based Issue Tracking and Collaboration platform designed to help users report, manage, and collaborate on issues in a transparent and organized way. Users can create and manage their own issues, contribute to others' issues through comments and updates, and work together to resolve problems efficiently.",
    goal: "To improve communication, accountability, and collaborative problem solving.",
    category: "Productivity & Collaboration",
    image: "/Earth Clean.png",
    github: "https://github.com/Afifalsaad/earth-clean",
    live: "https://assignment-10communitycleaning.web.app/"
  },
  {
    id: 3,
    title: "Skill Swap",
    description: "Skill Swap is a skill marketplace platform that allows users to discover and explore courses across a wide range of skills, purchase them easily, and learn directly from experienced instructors. The platform is designed to make knowledge sharing more accessible while enabling instructors to monetize their expertise through a simple and user-friendly interface.",
    goal: "To create an accessible marketplace for knowledge sharing and skill monetization.",
    category: "Education & Marketplace",
    image: "/Skill Swap.png",
    github: "https://github.com/Afifalsaad/skill-swap",
    live: "https://assignment-9skillwrap.web.app/"
  }
];

// ৩টা card এ ৩টা আলাদা smooth effect
const cardVariants = [popUp, springUp, rotateInRight];

const Projects = () => {
  return (
    <div className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20 relative z-10">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2
            variants={zoomIn}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured{' '}
            <span className="text-primary relative inline-block">
              Projects
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full -z-10"></span>
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my recent work and technical expertise through various projects.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.16, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative flex flex-col bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-primary/50 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-primary/10"
              variants={cardVariants[index % cardVariants.length]}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 260, damping: 22 },
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-300 z-10"></div>
                <motion.img
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.image}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                </div>
                <Link
                  to={`/project/${project.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-lg text-sm"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;