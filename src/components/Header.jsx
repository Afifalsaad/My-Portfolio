import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center">
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <button 
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
        onClick={toggleDarkMode}
      >
        <span className="material-symbols-outlined text-sm">dark_mode</span>
      </button>
    </header>
  );
};

export default Header;