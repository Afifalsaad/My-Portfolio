import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GarmentsMasterPage = () => {
  const navigate = useNavigate();
  const project = {
    id: 1,
    title: "Garments Master",
    description: "Garments Order & Production Tracker System is a web-based management platform built to help small and medium-sized garment factories efficiently handle their production workflow. The system enables factories to track buyer orders, manage different production stages such as cutting, sewing, and finishing, and monitor inventory levels to ensure smooth operations and timely delivery. The platform allows users to add, view, sell, and update product information with ease.",
    goal: "To simplify garment production management, improve workflow transparency, and ensure timely delivery.",
    category: "Production Management",
    image: "/Garments Master.png",
    github: "https://github.com/Afifalsaad/garments-master",
    live: "https://assignment11-196f4.web.app"
  };

  return (
    <motion.div 
      className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 py-6 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10 dark:opacity-20 bg-stars bg-cover bg-center mix-blend-screen"></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Detail Content */}
          <motion.div
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Image and Project Info */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-[#122118] font-bold hover:bg-primary/90 transition-all"
                  >
                    <span className="material-symbols-outlined">captive_portal</span>
                    <span>Live Site</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] flex items-center justify-center gap-2 rounded-lg h-12 bg-[#254632] text-white font-bold hover:bg-[#2f573f] transition-all"
                  >
                    <span className="material-symbols-outlined">code</span>
                    <span>GitHub</span>
                  </a>
                </div>

                <div className="bg-[#1a2e22] rounded-lg p-5 border border-[#254632]">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider text-opacity-80 mb-4">Project Details</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Category</p>
                      <p className="text-white text-sm">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Role</p>
                      <p className="text-white text-sm">Full-Stack Developer</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Timeline</p>
                      <p className="text-white text-sm">2-4 Months</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Team</p>
                      <p className="text-white text-sm">Solo Project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Project Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {project.title}
                </h1>
                
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">info</span>
                    Project Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Goal</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.goal}
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check_circle</span>
                      <span>Order tracking and management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check_circle</span>
                      <span>Production stage monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check_circle</span>
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check_circle</span>
                      <span>User-friendly interface for garment factories</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                      Express
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GarmentsMasterPage;