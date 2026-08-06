import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import IconCloud from "./IconCloud";
import {
  fadeUp,
  zoomIn,
  popUp,
  staggerContainer,
  defaultViewport,
  getVariantByIndex,
} from "../lib/motionVariants";

// ── Technology Brand Colors ──────────────────────────────────────────────────
const BRAND_COLORS = {
  javascript: "#f0dd43",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextdotjs: "#ffffff",
  html5: "#E34F26",
  tailwindcss: "#06B6D4",
  nodedotjs: "#339933",
  express: "#828282",
  mongodb: "#47A248",
  mysql: "#4479A1",
  postgresql: "#4479A1",
  firebase: "#FFCA28",
  git: "#F05032",
  github: "#a0a0a0",
  vercel: "#ffffff",
};

// Mixes each brand color with white to create a slightly lighter, solid card bg.
const getLightBrandColor = (hex, amount = 0.9) => {
  const normalizedHex = hex.replace("#", "");
  const value = parseInt(normalizedHex, 16);

  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  const mixChannel = (channel) =>
    Math.round(channel + (255 - channel) * amount);

  return `rgb(${mixChannel(red)}, ${mixChannel(green)}, ${mixChannel(blue)})`;
};

// ── Skills Data ───────────────────────────────────────────────────────────────
const SKILLS = [
  {
    name: "JavaScript",
    slug: "javascript",
    category: "Core",
    level: 90,
    status: "Advanced",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    category: "Core",
    level: 85,
    status: "Advanced",
  },
  {
    name: "React",
    slug: "react",
    category: "Frontend",
    level: 92,
    status: "Expert",
  },
  {
    name: "Next.js",
    slug: "nextdotjs",
    category: "Frontend",
    level: 88,
    status: "Advanced",
  },
  {
    name: "HTML5",
    slug: "html5",
    category: "Frontend",
    level: 95,
    status: "Expert",
  },
  {
    name: "Tailwind",
    slug: "tailwindcss",
    category: "Frontend",
    level: 92,
    status: "Expert",
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    category: "Backend",
    level: 85,
    status: "Advanced",
  },
  {
    name: "Express",
    slug: "express",
    category: "Backend",
    level: 83,
    status: "Advanced",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    category: "Database",
    level: 82,
    status: "Intermediate",
  },
  {
    name: "MySQL",
    slug: "mysql",
    category: "Database",
    level: 80,
    status: "Intermediate",
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    level: 80,
    status: "Intermediate",
  },
  {
    name: "Firebase",
    slug: "firebase",
    category: "Database",
    level: 85,
    status: "Advanced",
  },
  {
    name: "Git",
    slug: "git",
    category: "Tools",
    level: 88,
    status: "Advanced",
  },
  {
    name: "GitHub",
    slug: "github",
    category: "Tools",
    level: 90,
    status: "Expert",
  },
  {
    name: "Vercel",
    slug: "vercel",
    category: "Tools",
    level: 88,
    status: "Advanced",
  },
];

const FILTERS = ["All", "Core", "Frontend", "Backend", "Database", "Tools"];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Mouse coordinates tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring options for trailing lag effect
  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.2,
  });
  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.2,
  });

  // Map velocity of mouse movement to card rotation/skew
  const velocityX = useVelocity(springX);
  const cardRotate = useTransform(velocityX, [-2000, 2000], [-10, 10]);

  // Global mouse position listener
  useEffect(() => {
    const handleGlobalMouseMove = (event) => {
      mouseX.set(event.clientX - 100);
      mouseY.set(event.clientY - 120);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  const filteredSkills =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeFilter);

  const getCategoryCount = (category) =>
    category === "All"
      ? SKILLS.length
      : SKILLS.filter((skill) => skill.category === category).length;

  return (
    <section
      id="skills"
      className="relative z-10 border-t border-slate-200/50 pb-16 pt-12 sm:pb-24 sm:pt-20 dark:border-zinc-800/50">
      <div className="container mx-auto px-0 md:px-2">
        {/* ── Section Header ── */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          <motion.h2
            variants={zoomIn}
            className="mb-3 text-3xl font-bold tracking-tight text-slate-100 dark:text-white md:text-5xl">
            Technical{" "}
            <span className="relative inline-block text-primary">
              Skills
              <span className="absolute bottom-2 left-0 -z-10 h-2.5 w-full -rotate-1 rounded-full bg-primary/20" />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-lg text-sm text-slate-400">
            Interactive list grid — hover over any technology to trigger the
            cursor-follow card.
          </motion.p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          variants={popUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={[
                "relative flex items-center gap-1.5 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold transition-all duration-200",
                activeFilter === filter
                  ? "bg-slate-200 text-slate-900 dark:bg-zinc-100 dark:text-zinc-900"
                  : "border border-white/5 bg-slate-900/20 text-slate-400 hover:bg-slate-900/40 hover:text-slate-200 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40",
              ].join(" ")}>
              {filter}
              <span
                className={[
                  "rounded px-1.5 py-0.5 text-[10px] font-bold",
                  activeFilter === filter
                    ? "bg-slate-900/10 text-slate-900 dark:bg-zinc-900/10 dark:text-zinc-900"
                    : "bg-slate-900/40 text-slate-500 dark:bg-zinc-900/40 dark:text-zinc-500",
                ].join(" ")}>
                {getCategoryCount(filter)}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Stats Summary Row ── */}
        <motion.div
          className="mx-auto mb-2 flex flex-wrap justify-center gap-4 sm:gap-6 sm:justify-around max-w-2xl text-center"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {[
            { label: "Technologies", value: SKILLS.length },
            {
              label: "Frontend",
              value: SKILLS.filter((skill) => skill.category === "Frontend")
                .length,
            },
            {
              label: "Backend",
              value: SKILLS.filter((skill) => skill.category === "Backend")
                .length,
            },
            {
              label: "Databases",
              value: SKILLS.filter((skill) => skill.category === "Database")
                .length,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={popUp}
              className="mb-4 flex flex-col items-center">
              <span className="text-2xl font-bold text-cyan-400 md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-green-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Dynamic Cursor-Follow Hover Card ── */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              style={{
                x: springX,
                y: springY,
                rotate: cardRotate,
                backgroundColor: getLightBrandColor(
                  BRAND_COLORS[hoveredSkill.slug] || "#828282",
                  0.5
                ),
              }}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-0 top-0 z-[9999] hidden h-[220px] w-[200px] pointer-events-none flex-col items-center justify-between rounded-lg border border-black/10 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)] md:flex">
              {/* Tech Image */}
              <div className="flex w-full flex-1 items-center justify-center">
                <img
                  src={`https://cdn.simpleicons.org/${hoveredSkill.slug}`}
                  alt={hoveredSkill.name}
                  className="h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.18)]"
                />
              </div>

              {/* Title & Level Indicator */}
              <div className="mt-2 w-full border-t border-black/10 pt-2">
                <h4 className="text-sm font-bold text-slate-950">
                  {hoveredSkill.name}
                </h4>
                <div className="mt-1 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-900">
                    {hoveredSkill.status}
                  </span>
                  <span className="font-semibold text-slate-700">
                    {hoveredSkill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Large Size List Grid Box ── */}
        <div className="mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 md:gap-x-12 lg:grid-cols-4"
              variants={staggerContainer(0.04, 0.02)}
              initial="hidden"
              animate="visible">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.slug}
                  variants={getVariantByIndex(index)}
                  className="group grid w-full cursor-none select-none grid-cols-[24px_minmax(0,120px)] items-center justify-center gap-3 py-6 transition-colors duration-300  sm:gap-6 lg:px-0">
                  {/* Tech Logo */}
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={`https://cdn.simpleicons.org/${skill.slug}`}
                      alt={skill.name}
                      className="h-6 w-6"
                    />
                  </div>

                  {/* Tech Title */}
                  <div className="min-w-0">
                    <h3
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      title={skill.name}
                      className="w-full truncate text-left text-base font-bold tracking-tight text-slate-300 transition-colors duration-200 hover:cursor-pointer group-hover:text-white dark:text-zinc-200 sm:text-lg md:text-xl">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Icon Cloud ── */}
        <motion.div
          className="mx-auto mt-16 flex h-[340px] max-w-xl items-center justify-center sm:h-[400px] md:h-[500px]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          <IconCloud />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
