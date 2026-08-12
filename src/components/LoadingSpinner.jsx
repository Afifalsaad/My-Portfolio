import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingSpinner = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 select-none cursor-none overflow-hidden"
        >
          {/* Modern DNA Helix / Orbit Spinner */}
          <div className="relative w-16 h-16 mb-8">
            {/* Outer orbit */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />

            {/* Spinning arc 1 */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
              style={{
                animation: "spin-smooth 1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
              }}
            />

            {/* Spinning arc 2 - reverse */}
            <div
              className="absolute inset-[6px] rounded-full border-2 border-transparent border-b-primary/70"
              style={{
                animation: "spin-smooth 0.75s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse",
              }}
            />

            {/* Center dot */}
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{
                animation: "pulse-dot 1.2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Name & Subtitle */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] text-primary uppercase">
              Afif Al Saad
            </h2>
            <span className="text-[10px] md:text-xs font-medium tracking-[0.15em] text-gray-500 dark:text-gray-400 uppercase">
              Loading
              <span className="inline-flex w-6 text-left">
                <span
                  style={{
                    animation: "loading-dots 1.2s steps(4, end) infinite",
                  }}
                >
                  ...
                </span>
              </span>
            </span>
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes spin-smooth {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
              50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            }
            @keyframes loading-dots {
              0% { content: ''; clip-path: inset(0 100% 0 0); }
              25% { clip-path: inset(0 66% 0 0); }
              50% { clip-path: inset(0 33% 0 0); }
              75% { clip-path: inset(0 0 0 0); }
              100% { clip-path: inset(0 100% 0 0); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingSpinner;