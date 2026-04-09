import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Pointer } from "./Pointer";

const defaultSpringConfig = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001,
};

export function SmoothCursor({ springConfig }) {
  const config = { ...defaultSpringConfig, ...springConfig };
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const xSpring = useSpring(cursorX, config);
  const ySpring = useSpring(cursorY, config);

  const [isHovering, setIsHovering] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsPointerDown(true);
    const handleMouseUp = () => setIsPointerDown(false);

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a, button, input, textarea, select, [role="button"], [onclick]') ||
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <Pointer glowSize={0} glowOpacity={0}>
        <motion.div
          style={{
            position: "relative",
            width: 24,
            height: 24,
          }}
          animate={{ scale: isPointerDown ? 0.92 : 1 }}
          transition={{ type: "spring", stiffness: 520, damping: 32 }}
        >
          {/* pointer styled like provided design */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              left: 1,
              top: 0,
              transform: "rotate(-135deg)",
              transformOrigin: "16px 16px",
              willChange: "transform",
            }}
          >
            {/* same shape as provided image (filled green) */}
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
        </motion.div>
      </Pointer>
    </>
  );
}
