import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    // Animate elements when component mounts
    gsap.fromTo(".detail-header", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    );
    
    gsap.fromTo(".detail-content", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
    );
    
    gsap.fromTo(".detail-sidebar", 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.6 }
    );
  }, []);

  if (!project) return null;



  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-y-auto"
      >
        {/* Technical Background Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] bg-[size:40px_40px] bg-grid-pattern z-0"></div>

        {/* Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#254632] bg-[#112117]/90 backdrop-blur-md px-4 sm:px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">DevPortfolio</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
            <div className="hidden sm:flex items-center gap-9">
              <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Projects</a>
              <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#254632] hover:bg-[#2f573f] transition-colors text-white">
              <span className="material-symbols-outlined text-[20px]">light_mode</span>
            </button>
          </div>
        </header>

        {/* Main Content Layout */}
        <main className="relative z-10 flex-1 flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
          <div className="w-full max-w-[1100px] flex flex-col gap-8">
            {/* Back Button */}
            <div className="flex justify-start">
              <button 
                onClick={onClose}
                className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-bold tracking-[0.015em]"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                <span>Back to Projects</span>
              </button>
            </div>

            {/* Project Header & Hero */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="detail-header text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">{project.title}</h1>
                <p className="detail-header text-[#95c6a8] text-lg sm:text-xl font-normal leading-normal max-w-3xl">{project.description}</p>
              </div>

              {/* Action Buttons Mobile (Visible only on small screens) */}
              <div className="flex gap-3 sm:hidden">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-[#122118] font-bold hover:bg-primary/90 transition-all">
                  <span className="material-symbols-outlined">captive_portal</span>
                  <span>Live Site</span>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 bg-[#254632] text-white font-bold hover:bg-[#2f573f] transition-all">
                  <span className="material-symbols-outlined">code</span>
                  <span>GitHub</span>
                </a>
              </div>

              {/* Hero Image */}
              <div className="w-full relative group rounded-xl overflow-hidden border border-[#254632] shadow-2xl bg-[#0f172a]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#112117] via-transparent to-transparent opacity-60 z-10"></div>
                <div 
                  className="w-full aspect-video bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                {/* Floating Badges on Image */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-primary border border-primary/30">v2.4.0</span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white border border-white/10">2023</span>
                </div>
              </div>
            </div>

            {/* Two Column Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-4">
              {/* LEFT COLUMN: Main Narrative */}
              <div className="lg:col-span-2 flex flex-col gap-10 detail-content">
                {/* Description */}
                <section>
                  <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">info</span>
                    Project Overview
                  </h3>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      This {project.title.toLowerCase()} was built to solve key challenges in {project.title.includes('E-Commerce') ? 'e-commerce' : 
                      project.title.includes('Task') ? 'project management' : 
                      project.title.includes('AI') ? 'AI content generation' : 'web development'}. 
                      {project.description}
                    </p>
                    <p>
                      <strong>Goal:</strong> {project.goal}
                    </p>
                  </div>
                </section>

                {/* Challenges */}
                <section className="bg-surface-dark border border-[#254632] rounded-xl p-6 relative overflow-hidden">
                  {/* Decor element */}
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">psychology</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-400">warning</span>
                    Key Challenges
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 size-2 rounded-full bg-orange-400 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Complex State Management</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Managing complex application state across multiple components required implementing robust state management solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 size-2 rounded-full bg-orange-400 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Performance Optimization</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Ensuring smooth performance with large datasets and complex UI interactions required performance optimization techniques.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Future Improvements */}
                <section className="bg-surface-dark border border-[#254632] rounded-xl p-6 relative overflow-hidden">
                  {/* Decor element */}
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">rocket_launch</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400">update</span>
                    Future Roadmap
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-[#112117]/50 border border-white/5">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-gray-300 text-sm">Enhanced user experience and interface improvements</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-[#112117]/50 border border-white/5">
                      <span className="material-symbols-outlined text-gray-500 text-sm">radio_button_unchecked</span>
                      <span className="text-gray-300 text-sm">Advanced features and functionality</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-[#112117]/50 border border-white/5">
                      <span className="material-symbols-outlined text-gray-500 text-sm">radio_button_unchecked</span>
                      <span className="text-gray-300 text-sm">Mobile application development</span>
                    </li>
                  </ul>
                </section>
              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-1 flex flex-col gap-8 detail-sidebar">
                {/* Desktop Actions */}
                <div className="hidden sm:flex flex-col gap-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 bg-primary text-[#122118] text-base font-bold tracking-[0.015em] shadow-[0_0_15px_rgba(54,226,120,0.3)] hover:shadow-[0_0_25px_rgba(54,226,120,0.5)] transition-all">
                    <span className="material-symbols-outlined">captive_portal</span>
                    <span>View Live Site</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 bg-[#254632] text-white text-base font-bold tracking-[0.015em] hover:bg-[#2f573f] transition-all">
                    <span className="material-symbols-outlined">code</span>
                    <span>GitHub Repo</span>
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider text-opacity-80 border-b border-white/10 pb-2">Technologies Used</h4>
                  <div className="text-gray-300">
                    <p><strong>Category:</strong> {project.category}</p>
                  </div>
                </div>

                {/* Project Info Card */}
                <div className="bg-[#1a2e22] rounded-lg p-5 border border-[#254632]">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider text-opacity-80 mb-4">Details</h4>
                  <div className="space-y-4">
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
            </div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="mt-auto border-t border-[#254632] py-8 text-center text-gray-500 text-sm">
          <p>© 2023 DevPortfolio. Built with Tailwind CSS.</p>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;