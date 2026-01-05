import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef();
  const skillRefs = useRef([]);

  useEffect(() => {
    // Animate the section when it mounts
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    );

    // Animate each skill card
    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.4 + (index * 0.1), stagger: 0.1 }
        );
      }
    });
  }, []);

  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      icon: (
        <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2"></circle>
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
          </g>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: (
        <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16.34L13.13 21.23C12.43 21.66 11.57 21.66 10.87 21.23L3 16.34C2.37 15.95 2 15.24 2 14.53V8.47C2 7.76 2.37 7.05 3 6.66L10.87 1.77C11.57 1.34 12.43 1.34 13.13 1.77L21 6.66C21.63 7.05 22 7.76 22 8.47V14.53C22 15.24 21.63 15.95 21 16.34Z" fill="none" stroke="currentColor" stroke-width="2"></path>
          <circle cx="12" cy="12" fill="currentColor" opacity="0.5" r="3"></circle>
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "Framework",
      icon: (
        <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.75 16.95l-8.5-11h-1.5v11h2.25v-7.25l7.25 9.5h2V6h-1.5v10.95z"></path>
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: (
        <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C12 2 6.5 8 6.5 13C6.5 17 9 20 12 22C15 20 17.5 17 17.5 13C17.5 8 12 2 12 2ZM12 4.5C12 4.5 14 9 14 13C14 16 13 18 12 19C11 18 10 16 10 13C10 9 12 4.5 12 4.5Z"></path>
        </svg>
      )
    },
    {
      name: "Vercel",
      category: "Deployment",
      icon: (
        <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L24 22H0L12 1Z"></path>
        </svg>
      )
    }
  ];

  return (
    <div ref={sectionRef} className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-primary relative inline-block">Skills<span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-1 rounded-full -z-10"></span></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I specialize in a modern full-stack environment, building fast, scalable, and secure applications using these core technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              ref={el => skillRefs.current[index] = el}
              className="group relative p-6 bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-primary/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300 shadow-inner">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-primary/80 transition-colors duration-300">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;