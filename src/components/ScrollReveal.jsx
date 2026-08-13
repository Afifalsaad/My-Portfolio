/**
 * ScrollReveal.jsx
 * ─────────────────
 * Reliable in/out scroll animation using useInView + animate.
 * 
 * WHY: Framer Motion's `whileInView` exits back to `initial` but doesn't
 * always use the `transition` defined inside the hidden variant.
 * Using `animate={isInView ? "visible" : "hidden"}` gives us full control
 * so the exit transition in motionVariants plays correctly on BOTH scroll
 * directions (appear on scroll-up, disappear on scroll-down).
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * @param {object} variants   - Framer Motion variant object (from motionVariants.js)
 * @param {string} tag        - HTML tag / motion element type (div, article, a, section, …)
 * @param {number} amount     - How much of the element must be visible to trigger (0–1)
 * @param {number} margin     - Viewport root margin (e.g. "0px 0px -60px 0px")
 * @param {*}      custom     - Passed to variant factory functions (index for stagger delay)
 */
export function ScrollReveal({
  children,
  variants,
  tag = 'div',
  amount = 0.25,
  margin = '0px',
  custom,
  className = '',
  style,
  whileHover,
  whileTap,
  title,
  href,
  target,
  rel,
  id,
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount, margin });

  const Tag = motion[tag] ?? motion.div;

  return (
    <Tag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={custom}
      className={className}
      style={style}
      whileHover={whileHover}
      whileTap={whileTap}
      title={title}
      href={href}
      target={target}
      rel={rel}
      id={id}
      {...rest}
    >
      {children}
    </Tag>
  );
}
