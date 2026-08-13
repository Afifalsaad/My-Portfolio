import React, { useMemo } from "react";

function FallingStarsBg() {
  // Generate slowly falling and twinkling background stars
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,

      // Stars start from different vertical positions
      top: `${Math.random() * 110 - 10}%`,

      size: `${Math.random() * 2 + 3}px`,

      // Slower falling speed for background stars
      fallDuration: `${Math.random() * 10 + 20}s`,

      // Negative delay ensures stars are visible immediately
      delay: `${Math.random() * -18}s`,

      opacity: Math.random() * 0.7 + 0.3,

      // Slight horizontal movement while falling
      drift: `${Math.random() * 100 - 50}px`,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background-light dark:bg-[#0a0c10] transition-colors duration-300">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-background-light to-background-light dark:from-emerald-950/20 dark:via-[#0a0c10] dark:to-[#07080b]" />

      {/* Slowly falling and twinkling background stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-emerald-600 dark:bg-emerald-400"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,

            // Pass random horizontal drift to the animation
            "--star-drift": star.drift,

            animation: `background-star-fall ${star.fallDuration} linear infinite`,
            animationDelay: star.delay,

            boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* CSS animations */}
      <style>{`
        /*
         * Small background stars:
         * Move downward, drift slightly sideways and twinkle.
         */
        @keyframes background-star-fall {
          0% {
            transform: translate3d(0, -15vh, 0);
            opacity: 0;
          }

          10% {
            opacity: 0.35;
          }

          25% {
            opacity: 1;
          }

          45% {
            opacity: 0.4;
          }

          65% {
            opacity: 0.9;
          }

          85% {
            opacity: 0.3;
          }

          100% {
            transform: translate3d(
              var(--star-drift),
              115vh,
              0
            );
            opacity: 0;
          }
        }

        /*
         * Large shooting stars
         */
        @keyframes falling-star {
          0% {
            transform: translate3d(0, 0, 0) rotate(-35deg);
            opacity: 0;
          }

          15% {
            opacity: 0.95;
          }

          75% {
            opacity: 0.95;
          }

          100% {
            transform: translate3d(-450px, 550px, 0) rotate(-35deg);
            opacity: 0;
          }
        }

        /*
         * Accessibility: stop animations when the user has requested
         * reduced motion in their operating system.
         */
        @media (prefers-reduced-motion: reduce) {
          [style*="background-star-fall"],
          [style*="falling-star"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default React.memo(FallingStarsBg);
