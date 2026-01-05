import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const About = () => {
  const headerRef = useRef();
  const codeBlockRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  
  useEffect(() => {
    // Animate elements when component mounts
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    );
    
    gsap.fromTo(codeBlockRef.current, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5 }
    );
    
    gsap.fromTo(textRef1.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.7 }
    );
    
    gsap.fromTo(textRef2.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.9 }
    );
  }, []);
  
  return (
    <div className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <div ref={codeBlockRef} className="about-code-block relative bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 font-mono text-sm md:text-base overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex">
                <span className="text-purple-600 dark:text-purple-400 mr-2">const</span> 
                <span className="text-blue-600 dark:text-blue-400">aboutMe</span> 
                <span className="mx-2">=</span> 
                <span className="text-gray-500">{'{'}</span>
              </div>
              <div className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">name</span>
                : <span className="text-green-600 dark:text-green-400">'Afif Al Saad'</span>,
              </div>
              <div className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">role</span>
                : <span className="text-green-600 dark:text-green-400">'MERN Stack Developer'</span>,
              </div>
              <div className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">skills</span>
                : [
              </div>
              <div className="pl-12 text-green-600 dark:text-green-400">'JavaScript', 'React', 'Node.js',</div>
              <div className="pl-12 text-green-600 dark:text-green-400">'Nest.js', 'MongoDB',</div>
              <div className="pl-12 text-green-600 dark:text-green-400">'Vercel', 'GitHub'</div>
              <div className="pl-6">],</div>
              <div className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">passion</span>
                : <span className="text-green-600 dark:text-green-400">'Solving problems with code'</span>
              </div>
              <div className="text-gray-500">{'}}'};</div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-gray-400 dark:text-gray-600 font-sans tracking-widest opacity-20">
              DEV.PROFILE
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <h2 ref={headerRef} className="about-header text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-primary relative inline-block">
              Me
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-2 rounded-full -z-10"></span>
            </span>
          </h2>
          <p ref={textRef1} className="about-text text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey began over 6 months ago, fueled by an insatiable curiosity for how the web connects people. What started as simple HTML experiments has evolved into a career of architecting complex, scalable web applications. I pride myself on bridging the gap between sophisticated backend logic and intuitive frontend design.
          </p>
          <p ref={textRef2} className="about-text text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I thrive in dynamic environments where technology meets creativity. Whether optimizing server performance or crafting pixel-perfect user interfaces, I approach every challenge with a solution-oriented mindset. My passion for web development drives me to constantly learn and adapt to the ever-changing digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;