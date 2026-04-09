import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const defaultSpringConfig = {
  damping: 50,
  stiffness: 450,
  mass: 0.8,
};

export function Pointer({ children, className, ...props }) {
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
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="drop-shadow-lg">
          <path
            d="M9 2L9 22L13.5 17.5L18 26L21 24.5L16.5 16L22 16L9 2Z"
            fill="#4ade80"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.div>
  );
}
