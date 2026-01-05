import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home first, then scroll
      navigate('/');
      // Wait for the page to load, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        <button 
          className="w-12 h-12 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">About</Link>
          <button 
                        onClick={() => scrollToSection('about')}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        Services
                      </button>
          <button 
                        onClick={() => scrollToSection('portfolio')}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        Portfolio
                      </button>
          <button 
                        onClick={() => scrollToSection('contact')}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        Contact
                      </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={toggleDarkMode}
          >
            {darkMode ? <span className="material-symbols-outlined text-sm">light_mode</span> : <span className="material-symbols-outlined text-sm">dark_mode</span>}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-6 w-2/5 max-w-[200px] z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg py-4 transition-all duration-300">
          <div className="flex flex-col space-y-2 px-4">
            <Link to="/" className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>About</Link>
            <button 
                          onClick={() => {
                            scrollToSection('about');
                            setIsMenuOpen(false);
                          }}
                          className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Services
                        </button>
            <button 
                          onClick={() => {
                            scrollToSection('portfolio');
                            setIsMenuOpen(false);
                          }}
                          className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Portfolio
                        </button>
            <button 
                          onClick={() => {
                            scrollToSection('contact');
                            setIsMenuOpen(false);
                          }}
                          className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Contact
                        </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;