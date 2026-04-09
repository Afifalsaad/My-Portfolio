import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GarmentsMasterPage from "./components/GarmentsMasterPage";
import EarthCleanPage from "./components/EarthCleanPage";
import SkillSwapPage from "./components/SkillSwapPage";
import { SmoothCursor } from "./components/SmoothCursor";

function App() {
  return (
    <Router>
      <div className="font-body bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 min-h-screen relative overflow-x-hidden transition-colors duration-300 cursor-none">
        <SmoothCursor />
        <Routes>
          {/* Home Route with all sections */}
          <Route
            path="/"
            element={
              <motion.div
                className="min-h-screen relative overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <div className="fixed inset-0 z-0 pointer-events-none opacity-10 dark:opacity-20 bg-stars bg-cover bg-center mix-blend-screen"></div>
                <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>
                <Navbar />
                <main className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[calc(100vh-4rem)] pt-16 sm:pt-16 md:pt-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <div id="home">
                      <Hero />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <div id="about">
                      <About />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}>
                    <Skills />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}>
                    <div id="education">
                      <Education />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}>
                    <div id="portfolio">
                      <Projects />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}>
                    <div id="contact">
                      <Contact />
                    </div>
                  </motion.div>
                  <Footer />
                </main>
              </motion.div>
            }
          />

          {/* About Page Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Project Detail Routes */}
          <Route
            path="/project/garments-master"
            element={<GarmentsMasterPage />}
          />
          <Route path="/project/earth-clean" element={<EarthCleanPage />} />
          <Route path="/project/skill-swap" element={<SkillSwapPage />} />

          {/* Redirect any other route to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
