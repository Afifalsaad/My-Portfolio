import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const defaultSpringConfig = {
  damping: 50,
  stiffness: 450,
  mass: 0.8,
};

export function Pointer({
  children,
  className,
  glowColor = "74, 222, 128",
  glowSize = 72,
  glowOpacity = 0.22,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, defaultSpringConfig);
  const ySpring = useSpring(y, defaultSpringConfig);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show immediately (avoid "missing cursor" on initial load)
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      // keep visible; just stop updating position
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: xSpring,
        top: ySpring,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
      className={`hidden md:block ${className || ""}`}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      {...props}>
      {/* ambient glow behind the cursor */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          translateX: "-50%",
          translateY: "-50%",
          width: glowSize,
          height: glowSize,
          borderRadius: "9999px",
          background: `radial-gradient(circle, rgba(${glowColor}, ${glowOpacity}) 0%, rgba(${glowColor}, 0) 62%)`,
          filter: "blur(2px)",
          mixBlendMode: "screen",
          willChange: "transform, opacity",
        }}
        animate={{
          scale: isVisible ? 1 : 0.9,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      />

      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          style={{ transform: "rotate(-135deg)", transformOrigin: "16px 16px" }}>
          <path
            d="M3 7.5C3 7.1 3.22 6.73 3.57 6.55C3.91 6.37 4.33 6.41 4.63 6.66L29.6 14.66C29.98 14.98 30.06 15.54 29.78 15.96C29.68 16.11 29.54 16.23 29.38 16.3L4.63 24.34C4.33 24.59 3.91 24.63 3.57 24.45C3.22 24.27 3 23.9 3 23.5V18.2L12.6 16L3 13.8V7.5Z"
            fill="#4ade80"
          />
          <path
            d="M12.6 16L3 13.8V11.4L25.2 15.2L12.6 16Z"
            fill="#38c56a"
            opacity="0.55"
          />
        </svg>
      )}
    </motion.div>
  );
}
