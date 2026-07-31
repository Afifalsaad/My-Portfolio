// ─── Performance-first Framer Motion Variants ────────────────────────────────
// All variants translate from bottom to top (positive y -> 0)
// as requested: "scroll korar sathe sathe jeno niche theke ashe"

const easeOut = [0.25, 0.46, 0.45, 0.94]; // smooth easeOut
const DURATION = 0.55; 

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: easeOut } },
};

// Formerly fadeDown, now animates from bottom (y: 35) with a slight overshoot ease
export const fadeDown = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: easeOut } },
};

// Formerly fadeLeft, now slides from bottom (y: 45)
export const fadeLeft = {
  hidden:  { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0,  transition: { duration: DURATION, ease: easeOut } },
};

// Formerly fadeRight, now slides from bottom (y: 45)
export const fadeRight = {
  hidden:  { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0,  transition: { duration: DURATION, ease: easeOut } },
};

// scale + bottom translation (y: 30)
export const zoomIn = {
  hidden:  { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// rotate + bottom translation (y: 32)
export const rotateIn = {
  hidden:  { opacity: 0, y: 32, rotate: -4, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotate: 0,  scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// rotate + bottom translation (y: 32)
export const rotateInRight = {
  hidden:  { opacity: 0, y: 32, rotate: 4, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// popUp (y: 28 + scale: 0.94)
export const popUp = {
  hidden:  { opacity: 0, y: 28, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// Formerly dropDown, now bottom translation (y: 30)
export const dropDown = {
  hidden:  { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0,   scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// Formerly slideRotateLeft, now bottom translation + tilt (y: 36)
export const slideRotateLeft = {
  hidden:  { opacity: 0, y: 36, rotate: -2 },
  visible: { opacity: 1, y: 0,   rotate: 0, transition: { duration: DURATION, ease: easeOut } },
};

// Formerly slideRotateRight, now bottom translation + tilt (y: 36)
export const slideRotateRight = {
  hidden:  { opacity: 0, y: 36, rotate: 2 },
  visible: { opacity: 1, y: 0,  rotate: 0, transition: { duration: DURATION, ease: easeOut } },
};

// Spring bounce from bottom (y: 40)
export const springUp = {
  hidden:  { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
  },
};

// ── Stagger Container ─────────────────────────────────────────────────────────
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0.05) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

// ── Viewport Settings ─────────────────────────────────────────────────────────
export const defaultViewport = { once: true, amount: 0.15 };

// ── Cards/Items Variants Array ───────────────────────────────────────────────
export const CARD_VARIANTS = [
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  rotateIn,
  rotateInRight,
  popUp,
  slideRotateLeft,
  slideRotateRight,
  springUp,
  dropDown,
];

export function getVariantByIndex(index) {
  return CARD_VARIANTS[index % CARD_VARIANTS.length];
}
