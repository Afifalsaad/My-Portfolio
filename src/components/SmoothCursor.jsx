import React, { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

export function SmoothCursor() {
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorOpacity = useMotionValue(0);
  const cursorScale = useMotionValue(0.8);

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
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );
      const hovering = Boolean(target);
      if (isHoveringRef.current !== hovering) {
        isHoveringRef.current = hovering;
        cursorScale.set(hovering ? 0.7 : 0.8);
      }
    };

    const handlePointerDown = () => {
      isClickingRef.current = true;
      cursorScale.set(0.78);
    };
    const handlePointerUp = () => {
      isClickingRef.current = false;
      cursorScale.set(isHoveringRef.current ? 0.7 : 0.8);
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
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
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
    <>
      {/* Smooth trailing circle */}
      {/* <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:flex"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.65 : isHovering ? 0.6 : 0.5,
        }}
        transition={{
          opacity: { duration: 0.16 },
          scale: { type: "spring", stiffness: 300, damping: 18 },
        }}>
        <motion.div
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-green-300/70 bg-cyan-300/5 shadow-[0_0_18px_rgba(34,211,238,0.35),inset_0_0_12px_rgba(34,211,238,0.12)] backdrop-blur-[2px]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 0 12px rgba(34,211,238,.25), inset 0 0 8px rgba(34,211,238,.08)",
                    "0 0 25px rgba(34,211,238,.5), inset 0 0 14px rgba(34,211,238,.16)",
                    "0 0 12px rgba(34,211,238,.25), inset 0 0 8px rgba(34,211,238,.08)",
                  ],
                }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <span className="h-1 w-1 rounded-full bg-cyan-100 shadow-[0_0_8px_#a5f3fc]" />
        </motion.div>
      </motion.div> */}

      {/* Real mouse pointer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: cursorOpacity,
          scale: cursorScale,
        }}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_7px_rgba(34,211,238,0.9)]">
          <path
            d="M4.5 3.5L19.5 12L13.2 13.6L10.2 20.2L4.5 3.5Z"
            fill="#4ade80"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </motion.div>

    </>
  );
}

// export default function App() {
//   return (
//     <main className="relative min-h-screen cursor-none overflow-hidden bg-[#06111f] text-white">
//       <SmoothCursor />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.13),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,.12),transparent_30%)]" />

//       <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
//         <span className="mb-5 rounded-full border border-cyan-200/20 bg-cyan-200/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100/80">
//           Modern pointer cursor
//         </span>

//         <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
//           A cursor that feels
//           <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
//             fast and alive.
//           </span>
//         </h1>

//         <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
//           Move the mouse, hover over the controls and click anywhere to test the pointer animation.
//         </p>

//         <div className="mt-10 flex flex-wrap justify-center gap-4">
//           <button
//             data-cursor-text="Open"
//             className="rounded-full bg-cyan-200 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-white"
//           >
//             Hover button
//           </button>

//           #preview
//             View preview
//           </a>

//           <div
//             data-cursor-hover
//             data-cursor-text="Drag"
//             className="rounded-full border border-dashed border-cyan-200/30 px-7 py-3.5 text-cyan-100/70"
//           >
//             Custom target
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
