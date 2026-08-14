// ─── Performance-first Framer Motion Variants ────────────────────────────────
// Symmetric: appear and disappear at the same speed

const easeOut = [0.25, 0.46, 0.45, 0.94];
const DURATION = 0.45;
// When leaving viewport (hidden), animate out quickly
const exitTransition = { duration: 0.32, ease: [0.55, 0, 0.75, 0.06] };

export const fadeUp = {
  hidden: { opacity: 0, y: 25, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: 25, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, y: 35, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, y: 35, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const zoomIn = {
  hidden: { opacity: 0, y: 28, scale: 0.92, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const rotateIn = {
  hidden: {
    opacity: 0,
    y: 28,
    rotate: -4,
    scale: 0.95,
    transition: exitTransition,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const rotateInRight = {
  hidden: {
    opacity: 0,
    y: 28,
    rotate: 4,
    scale: 0.95,
    transition: exitTransition,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const popUp = {
  hidden: { opacity: 0, y: -12, scale: 0.94, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const dropDown = {
  hidden: { opacity: 0, y: 48, scale: 0.96, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const slideRotateLeft = {
  hidden: { opacity: 0, y: 30, rotate: -2, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const slideRotateRight = {
  hidden: { opacity: 0, y: 30, rotate: 2, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: DURATION, ease: easeOut },
  },
};

export const springUp = {
  hidden: { opacity: 0, y: 30, scale: 0.93, transition: exitTransition },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 24, mass: 0.7 },
  },
};

// ── Stagger Container ─────────────────────────────────────────────────────────
// staggerDirection: -1 reverses stagger order on exit (children disappear in sequence too)
export function staggerContainer(staggerChildren = 0.08, delayChildren = 0.02) {
  return {
    hidden: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

// ── Viewport Settings ─────────────────────────────────────────────────────────
export const defaultViewport = {
  once: false,
  amount: 0.2,
  margin: "-100px 0px -100px 0px",
};

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
