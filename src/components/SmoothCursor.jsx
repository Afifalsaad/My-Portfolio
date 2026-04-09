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
      <Pointer>
        <motion.div
          style={{
            width: isHovering ? 60 : 40,
            height: isHovering ? 60 : 40,
            borderRadius: "50%",
            border: "2px solid rgba(74, 222, 128, 0.5)",
            backgroundColor: isHovering ? "rgba(74, 222, 128, 0.1)" : "transparent",
          }}
          animate={{
            scale: isPointerDown ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
              width: isHovering ? 12 : 8,
              height: isHovering ? 12 : 8,
              borderRadius: "50%",
              backgroundColor: "#4ade80",
            }}
            animate={{
              scale: isPointerDown ? 0.5 : 1,
              opacity: isHovering ? 0.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </motion.div>
      </Pointer>
    </>
  );
}
