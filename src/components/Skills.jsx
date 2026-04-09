import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import IconCloud from './IconCloud';

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

        <div className="max-w-2xl mx-auto h-[400px] md:h-[500px]">
          <IconCloud />
        </div>
      </div>
    </div>
  );
};

export default Skills;