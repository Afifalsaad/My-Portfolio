import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

export function SmoothCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorOpacity = useMotionValue(0);
  const cursorScale = useMotionValue(0.95);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const moveCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        cursorOpacity.set(1);
      }
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover], [onclick], label, .cursor-pointer"
      );
      const hovering = Boolean(target);
      if (isHoveringRef.current !== hovering) {
        isHoveringRef.current = hovering;
        setIsHovering(hovering);
        cursorScale.set(hovering ? 1.15 : 0.95);
      }
    };

    const handlePointerDown = () => {
      isClickingRef.current = true;
      cursorScale.set(0.85);
    };
    const handlePointerUp = () => {
      isClickingRef.current = false;
      cursorScale.set(isHoveringRef.current ? 1.15 : 0.95);
    };
    const handlePointerLeave = () => {
      isVisibleRef.current = false;
      cursorOpacity.set(0);
    };
    const handlePointerEnter = () => {
      isVisibleRef.current = true;
      cursorOpacity.set(1);
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    document.documentElement.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handlePointerEnter
      );
    };
  }, [cursorX, cursorY, cursorOpacity, cursorScale]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: cursorOpacity,
        scale: cursorScale,
      }}>
      <div className="relative w-7 h-7">
        {/* Custom Glowing Arrow Cursor for normal state */}
        <div
          className={`absolute inset-0 transition-all duration-150 ease-out ${
            isHovering
              ? "opacity-0 scale-75 rotate-[-10deg]"
              : "opacity-100 scale-100 rotate-0"
          }`}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_8px_rgba(74,222,128,0.9)]">
            <path
              d="M4.5 3.5L19.5 12L13.2 13.6L10.2 20.2L4.5 3.5Z"
              fill="#4ade80"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Custom Glowing Hand Pointer SVG for hover state */}
        <div
          className={`absolute inset-0 transition-all duration-150 ease-out ${
            isHovering
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 rotate-[10deg]"
          }`}
          style={{ transform: "translate(-5px, -2px)" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_10px_rgba(74,222,128,1)]">
            <path
              d="M22 14a8 8 0 0 1-8 8h-2c-3.1 0-5.8-1.8-7.1-4.4L2.3 12.4c-.6-.9-.3-2.1.6-2.6.9-.6 2.1-.3 2.6.6L7 13V4a2 2 0 0 1 4 0v6.5a2 2 0 0 1 3.5 1.3v-1.3a2 2 0 0 1 3.5 1.3v-1.3a2 2 0 0 1 3.5 1.3V14z"
              fill="#4ade80"
              fillOpacity="0.75"
              stroke="#4ade80"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
