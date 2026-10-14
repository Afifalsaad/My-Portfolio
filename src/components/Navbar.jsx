import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // If we're on the home page, scroll to the section
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If we're on a different page, navigate to home first, then scroll
      navigate("/");
      // Wait for the page to load, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 20px for styling
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide / Show on Scroll Logic
      if (currentScrollY > 400) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down -> Hide navbar
        } else {
          setIsVisible(true); // Scrolling up -> Show navbar
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-2 left-0 right-0 z-50 w-full md:w-[50%] mx-auto px-6 py-2 flex justify-between items-center transition-all duration-500 ease-in-out rounded-2xl ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0 pointer-events-none"
        } ${
          scrolled
            ? "bg-emerald-950/10 dark:bg-emerald-950/30 backdrop-blur-xl border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.3)] dark:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            : "bg-emerald-900/10 backdrop-blur-md border border-emerald-500/20 "
        }`}>
        <button
          className="md:hidden items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>

        <div className="hidden w-full mx-auto md:flex items-center justify-center space-x-10">
          <button
            onClick={() => scrollToSection("top")}
            className="relative py-1 text-gray-500 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto">
            Home
          </button>
          <Link
            to="/about"
            className="relative py-1 text-gray-500 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto">
            About
          </Link>
          <button
            onClick={() => scrollToSection("about")}
            className="relative py-1 text-gray-500 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto">
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="relative py-1 text-gray-500 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto">
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="relative py-1 text-gray-500 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto">
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <AnimatedThemeToggler />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-6 w-56 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-800/80 rounded-2xl shadow-2xl p-2 transition-all duration-300 animate-in fade-in zoom-in-95">
          <div className="flex flex-col space-y-1">
            <button
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/80 dark:hover:bg-gray-800/60 rounded-xl transition-all duration-200"
              onClick={() => {
                scrollToSection("top");
                setIsMenuOpen(false);
              }}>
              Home
            </button>

            <Link
              to="/about"
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/80 dark:hover:bg-gray-800/60 rounded-xl transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/80 dark:hover:bg-gray-800/60 rounded-xl transition-all duration-200">
              Services
            </button>

            <button
              onClick={() => {
                scrollToSection("portfolio");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/80 dark:hover:bg-gray-800/60 rounded-xl transition-all duration-200">
              Portfolio
            </button>

            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/80 dark:hover:bg-gray-800/60 rounded-xl transition-all duration-200">
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
