import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SmoothCursor } from "./components/SmoothCursor";
import LoadingSpinner from "./components/LoadingSpinner";
import FallingStarsBg from "./components/FallingStarsBg";

// Lazy load route-level components
const AboutPage = lazy(() => import("./components/AboutPage"));
const LoginForm = lazy(() => import("./components/LoginForm"));
const GarmentsMasterPage = lazy(() => import("./components/GarmentsMasterPage"));
const EarthCleanPage = lazy(() => import("./components/EarthCleanPage"));
const SkillSwapPage = lazy(() => import("./components/SkillSwapPage"));

const sectionReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const viewport = { once: false, amount: 0.35 };

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Initial site load preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Route change loading spinner
  useEffect(() => {
    if (isInitialLoad) return;

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="font-body bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 min-h-screen relative overflow-x-hidden transition-colors duration-300 cursor-none">
      <FallingStarsBg />
      <LoadingSpinner isLoading={isLoading} />
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
              <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-background-light dark:to-background-dark/80"></div>
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
                <div id="about">
                  <About />
                </div>
                <Skills />
                <div id="education">
                  <Education />
                </div>
                <div id="portfolio">
                  <Projects />
                </div>
                <div id="contact">
                  <Contact />
                </div>

                <Footer />
              </main>
            </motion.div>
          }
        />

        <Route path="/about" element={<Suspense fallback={null}><AboutPage /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={null}><LoginForm /></Suspense>} />
        <Route
          path="/project/garments-master"
          element={<Suspense fallback={null}><GarmentsMasterPage /></Suspense>}
        />
        <Route path="/project/earth-clean" element={<Suspense fallback={null}><EarthCleanPage /></Suspense>} />
        <Route path="/project/skill-swap" element={<Suspense fallback={null}><SkillSwapPage /></Suspense>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

