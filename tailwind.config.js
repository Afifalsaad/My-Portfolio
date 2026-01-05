/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39E079",
        "background-light": "#f6f8f7",
        "background-dark": "#122017"
      },
      fontFamily: {
        display: "Metropolis",
        body: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        // Replaced starry background with abstract web development code pattern
        stars: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')"
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      }
    }
  },
  plugins: [],
  darkMode: "class",
}