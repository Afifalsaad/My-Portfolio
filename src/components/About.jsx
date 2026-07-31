import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  rotateIn,
  popUp,
  slideRotateLeft,
  staggerContainer,
  defaultViewport,
} from '../lib/motionVariants';

const About = () => {
  return (
    <div className="pb-24 border-t border-gray-200 dark:border-gray-800 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Code block — বাম থেকে আসে */}
        <motion.div
          className="order-2 lg:order-1 relative group"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 font-mono text-sm md:text-base overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Code lines — stagger দিয়ে একে একে আসে */}
            <motion.div
              className="space-y-2 text-gray-700 dark:text-gray-300"
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {[
                <div className="flex" key="const">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">const</span>
                  <span className="text-blue-600 dark:text-blue-400">aboutMe</span>
                  <span className="mx-2">=</span>
                  <span className="text-gray-500">{'{'}</span>
                </div>,
                <div className="pl-6" key="name">
                  <span className="text-blue-600 dark:text-blue-400">name</span>
                  {': '}<span className="text-green-600 dark:text-green-400">'Afif Al Saad'</span>,
                </div>,
                <div className="pl-6" key="role">
                  <span className="text-blue-600 dark:text-blue-400">role</span>
                  {': '}<span className="text-green-600 dark:text-green-400">'MERN Stack Developer'</span>,
                </div>,
                <div className="pl-6" key="skills-label">
                  <span className="text-blue-600 dark:text-blue-400">skills</span>{': ['}
                </div>,
                <div className="pl-12 text-green-600 dark:text-green-400" key="s1">'JavaScript', 'React', 'Node.js',</div>,
                <div className="pl-12 text-green-600 dark:text-green-400" key="s2">'Nest.js', 'MongoDB',</div>,
                <div className="pl-12 text-green-600 dark:text-green-400" key="s3">'Vercel', 'GitHub'</div>,
                <div className="pl-6" key="close-arr">],</div>,
                <div className="pl-6" key="passion">
                  <span className="text-blue-600 dark:text-blue-400">passion</span>
                  {': '}<span className="text-green-600 dark:text-green-400">'Solving problems with code'</span>
                </div>,
                <div className="text-gray-500" key="end">{'}}'};</div>,
              ].map((line, i) => (
                <motion.div key={i} variants={fadeLeft}>
                  {line}
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute bottom-4 right-4 text-xs text-gray-400 dark:text-gray-600 font-sans tracking-widest opacity-20">
              DEV.PROFILE
            </div>
          </div>
        </motion.div>

        {/* Text — ডান থেকে আসে */}
        <motion.div
          className="order-1 lg:order-2 space-y-6"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2
            variants={fadeRight}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            About{' '}
            <span className="text-primary relative inline-block">
              Me
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -rotate-2 rounded-full -z-10"></span>
            </span>
          </motion.h2>

          <motion.p variants={popUp} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey began over 6 months ago, fueled by an insatiable curiosity for how the web connects people. What started as simple HTML experiments has evolved into a career of architecting complex, scalable web applications. I pride myself on bridging the gap between sophisticated backend logic and intuitive frontend design.
          </motion.p>

          <motion.p variants={slideRotateLeft} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I thrive in dynamic environments where technology meets creativity. Whether optimizing server performance or crafting pixel-perfect user interfaces, I approach every challenge with a solution-oriented mindset. My passion for web development drives me to constantly learn and adapt to the ever-changing digital landscape.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
