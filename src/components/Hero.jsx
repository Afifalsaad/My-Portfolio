import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const firstPart = "Hii, I'm";
  const namePart = " Afif Al Saad";
  const [showCursor, setShowCursor] = useState(true);


  const TYPING_SPEED = 0.2;
  const START_DELAY = 0.5; 

  useEffect(() => {
    const totalChars = firstPart.length + namePart.length;
    const totalTypingTime = (totalChars * TYPING_SPEED + START_DELAY) * 1000;


    const timer = setTimeout(() => {
      setShowCursor(false);
    }, totalTypingTime + 800);

    return () => clearTimeout(timer);
  }, [TYPING_SPEED, START_DELAY]);

  // Typewriter container variant
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: TYPING_SPEED,
        delayChildren: START_DELAY,
      },
    },
  };

  // Typewriter character variant
  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
    },
  };

  // Animation variants for other elements rising from the bottom (fadeUp)
  const slideUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: customDelay,
      },
    }),
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.88, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
      {/* Text Info */}
      <div className="order-2 lg:order-1 space-y-4">
        {/* Subtitle */}
        <motion.span
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
          MERN Stack Developer
        </motion.span>

        {/* Typewriter Title */}
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight select-none">
          {firstPart.split("").map((char, index) => (
            <motion.span key={`first-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
          <span className="text-primary text-glow">
            {namePart.split("").map((char, index) => (
              <motion.span key={`name-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </span>
          {/* Blinking Cursor with smooth hide out */}
          <motion.span
            animate={showCursor ? { opacity: [1, 1, 0, 0, 1] } : { opacity: 0 }}
            transition={
              showCursor
                ? {
                    duration: 0.8,
                    repeat: Infinity,
                    times: [0, 0.49, 0.5, 0.99, 1],
                    ease: "linear",
                  }
                : { duration: 0.4, ease: "easeOut" }
            }
            className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 translate-y-[0.1em]"
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          I build accessible, pixel-perfect, and performant web applications.
          Let's turn your digital vision into reality with clean code and modern
          design.
        </motion.p>

        {/* Buttons & Social Icons */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex flex-wrap items-center gap-4 pt-4">
          <a
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)]"
            href="#">
            Hire me
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              href="https://github.com/Afifalsaad">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              href="https://www.facebook.com/your.modric10">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              href="https://www.linkedin.com/in/afif-al-saad/">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Profile */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full p-2 border border-primary/30 glow-effect">
          {/* Rotating Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-primary"
          />
          <img
            alt="Afif Al Saad Professional Portrait"
            className="w-full h-full object-cover rounded-full border-4 border-gray-900 dark:border-black relative z-10"
            src="/hero-image.png"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
