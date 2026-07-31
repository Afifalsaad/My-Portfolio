// ─── Performance-first Framer Motion Variants ────────────────────────────────
// শুধু GPU-accelerated properties ব্যবহার করা হয়েছে:
// opacity, translateX, translateY, scale — এগুলো compositor thread-এ চলে, main thread block করে না।
// ❌ এড়ানো হয়েছে: filter:blur, rotateX/Y (3D), বড় scale range, originX/Y

// ── Entry Transition Config ───────────────────────────────────────────────────
const easeOut = [0.25, 0.46, 0.45, 0.94]; // custom cubic-bezier — smooth easeOut
const DURATION = 0.55; // সব animation এর standard duration

export const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: easeOut } },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -36 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: easeOut } },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0,  transition: { duration: DURATION, ease: easeOut } },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0,  transition: { duration: DURATION, ease: easeOut } },
};

// scale শুধু 0.88 → 1 — ছোট range = কম compositing cost
export const zoomIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// হালকা rotate — শুধু 2D, GPU safe
export const rotateIn = {
  hidden:  { opacity: 0, rotate: -8, scale: 0.92 },
  visible: { opacity: 1, rotate: 0,  scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// ডান থেকে ঘুরে আসে — 2D rotate only
export const rotateInRight = {
  hidden:  { opacity: 0, rotate: 8, scale: 0.92 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// নিচ থেকে + হালকা scale — natural feel
export const popUp = {
  hidden:  { opacity: 0, y: 28, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// উপর থেকে নামে — header/title এর জন্য ভালো
export const dropDown = {
  hidden:  { opacity: 0, y: -28, scale: 0.96 },
  visible: { opacity: 1, y: 0,   scale: 1, transition: { duration: DURATION, ease: easeOut } },
};

// বাম থেকে + ছোট rotate — card এর জন্য ভালো লাগে
export const slideRotateLeft = {
  hidden:  { opacity: 0, x: -40, rotate: -4 },
  visible: { opacity: 1, x: 0,   rotate: 0, transition: { duration: DURATION, ease: easeOut } },
};

// ডান থেকে + ছোট rotate
export const slideRotateRight = {
  hidden:  { opacity: 0, x: 40, rotate: 4 },
  visible: { opacity: 1, x: 0,  rotate: 0, transition: { duration: DURATION, ease: easeOut } },
};

// Spring bounce — stiffness/damping calibrated যাতে overshoot বেশি না হয়
export const springUp = {
  hidden:  { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
  },
};

// ── Stagger Container ─────────────────────────────────────────────────────────
// delayChildren কমিয়ে রাখা হয়েছে — দ্রুত শুরু হয়
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0.05) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

// ── Viewport Settings ─────────────────────────────────────────────────────────
// once: true — বারবার re-animate করে না, performance ভালো থাকে
// amount: 0.15 — মাত্র ১৫% দেখা গেলেই trigger হয় — scroll করার সাথে সাথেই animation শুরু হয়
export const defaultViewport = { once: true, amount: 0.15 };

// ── Whimsy Variants Array (for index-based random picking) ───────────────────
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
