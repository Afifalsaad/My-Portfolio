import React from "react";
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
import LoginForm from "./components/LoginForm";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const viewport = { once: true, amount: 0.1 };

function App() {
  return (
    <Router>
      <div className="font-body bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 min-h-screen relative overflow-x-hidden transition-colors duration-300 cursor-none">
        <SmoothCursor />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                className="min-h-screen relative overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}>
                <div className="fixed inset-0 z-0 pointer-events-none opacity-10 dark:opacity-20 bg-stars bg-cover bg-center mix-blend-screen"></div>
                <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>
                <Navbar />
                <main className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[calc(100vh-4rem)] pt-16 sm:pt-16 md:pt-20 ">
                  {/* Hero — page load এ animate, scroll trigger নেই */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}>
                    <div id="home">
                      <Hero />
                    </div>
                  </motion.div>
                  <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}>
                    <div id="about">
                      <About />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}>
                    <Skills />
                  </motion.div>

                  <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}>
                    <div id="education">
                      <Education />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}>
                    <div id="portfolio">
                      <Projects />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}>
                    <div id="contact">
                      <Contact />
                    </div>
                  </motion.div>

                  <Footer />
                </main>
              </motion.div>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<LoginForm />} />
          <Route
            path="/project/garments-master"
            element={<GarmentsMasterPage />}
          />
          <Route path="/project/earth-clean" element={<EarthCleanPage />} />
          <Route path="/project/skill-swap" element={<SkillSwapPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
