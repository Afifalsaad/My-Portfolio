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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
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
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="#4ade80"
          style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.25))" }}>
          <circle
            cx="17"
            cy="17"
            r="11"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
          />
          <circle cx="17" cy="17" r="4" fill={`rgba(${glowColor}, 0.95)`} />
        </svg>
      )}
    </motion.div>
  );
}
