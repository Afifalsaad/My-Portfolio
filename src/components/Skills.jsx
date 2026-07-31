import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconCloud from "./IconCloud";
import {
  fadeUp,
  zoomIn,
  popUp,
  staggerContainer,
  defaultViewport,
  getVariantByIndex,
} from "../lib/motionVariants";

// ── Technology Brand Colors for hover highlight ─────────────────────────────
const BRAND_COLORS = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextdotjs: "#ffffff",
  html5: "#E34F26",
  css3: "#1572B6",
  tailwindcss: "#06B6D4",
  nodedotjs: "#339933",
  express: "#828282",
  mongodb: "#47A248",
  mysql: "#4479A1",
  firebase: "#FFCA28",
  git: "#F05032",
  github: "#a0a0a0",
  vercel: "#ffffff",
  docker: "#2496ED",
  npm: "#CB3837",
  vite: "#646CFF",
};

// ── Skills Data ───────────────────────────────────────────────────────────────
const SKILLS = [
  {
    name: "JavaScript",
    slug: "javascript",
    category: "Core",
    status: "Advanced",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    category: "Core",
    status: "Advanced",
  },
  { name: "React", slug: "react", category: "Frontend", status: "Expert" },
  {
    name: "Next.js",
    slug: "nextdotjs",
    category: "Frontend",
    status: "Advanced",
  },
  { name: "HTML5", slug: "html5", category: "Frontend", status: "Expert" },
  { name: "CSS3", slug: "css3", category: "Frontend", status: "Expert" },
  {
    name: "Tailwind",
    slug: "tailwindcss",
    category: "Frontend",
    status: "Expert",
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    category: "Backend",
    status: "Advanced",
  },
  { name: "Express", slug: "express", category: "Backend", status: "Advanced" },
  {
    name: "MongoDB",
    slug: "mongodb",
    category: "Database",
    status: "Intermediate",
  },
  {
    name: "MySQL",
    slug: "mysql",
    category: "Database",
    status: "Intermediate",
  },
  {
    name: "Firebase",
    slug: "firebase",
    category: "Database",
    status: "Advanced",
  },
  { name: "Git", slug: "git", category: "Tools", status: "Advanced" },
  { name: "GitHub", slug: "github", category: "Tools", status: "Expert" },
  { name: "Vercel", slug: "vercel", category: "Tools", status: "Advanced" },
  { name: "Docker", slug: "docker", category: "Tools", status: "Intermediate" },
  { name: "npm", slug: "npm", category: "Tools", status: "Advanced" },
  { name: "Vite", slug: "vite", category: "Tools", status: "Expert" },
];

const FILTERS = ["All", "Core", "Frontend", "Backend", "Database", "Tools"];

// ── Minimalist, Modern, Recruiter-Friendly Skill Card ─────────────────────────
const SkillCard = ({ skill, index }) => {
  const brandColor = BRAND_COLORS[skill.slug] || "#39E079";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={getVariantByIndex(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative cursor-default select-none">
      {/* Super clean glassmorphic design */}
      <div
        style={{
          borderColor: isHovered
            ? `${brandColor}40`
            : "rgba(255, 255, 255, 0.05)",
          boxShadow: isHovered ? `0 4px 20px -5px ${brandColor}15` : "none",
        }}
        className="flex items-center gap-4 rounded-xl border bg-slate-950/20 dark:bg-zinc-950/20 p-4 transition-all duration-300 backdrop-blur-md">
        {/* Tech Icon Container */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-900/50 dark:bg-zinc-900/50 border border-white/5 transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}>
          <img
            src={`https://cdn.simpleicons.org/${skill.slug}`}
            alt={skill.name}
            className="h-6 w-6 object-contain filter saturate-[0.85] dark:saturate-[0.9] group-hover:saturate-100 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Tech Information */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-[14px] font-semibold text-slate-200 dark:text-slate-100">
              {skill.name}
            </h3>
          </div>
          <p className="mt-0.5 truncate text-[11px] text-slate-500 dark:text-slate-400">
            {skill.category} •{" "}
            <span
              className="font-medium"
              style={{ color: isHovered ? brandColor : "inherit" }}>
              {skill.status}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ── Filter Tab Button ─────────────────────────────────────────────────────────
const FilterTab = ({ label, isActive, onClick, count }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "relative flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
        isActive
          ? "bg-slate-200 text-slate-900 dark:bg-zinc-100 dark:text-zinc-900"
          : "bg-slate-900/20 text-slate-400 hover:bg-slate-900/40 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 border border-white/5 hover:text-slate-200",
      ].join(" ")}>
      {label}
      <span
        className={[
          "rounded px-1 py-0.5 text-[10px] font-bold",
          isActive
            ? "bg-slate-900/10 text-slate-900 dark:bg-zinc-900/10 dark:text-zinc-900"
            : "bg-slate-900/40 text-slate-500 dark:bg-zinc-900/40 dark:text-zinc-500",
        ].join(" ")}>
        {count}
      </span>
    </motion.button>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  const getCategoryCount = (cat) =>
    cat === "All"
      ? SKILLS.length
      : SKILLS.filter((s) => s.category === cat).length;

  return (
    <section
      id="skills"
      className="relative z-10 border-t border-slate-200/50 pb-24 pt-20 dark:border-zinc-800/50">
      <div className="container mx-auto px-4">
        {/* ── Section Header ── */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
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
            className="text-sm text-slate-400 max-w-lg mx-auto">
            A clean list of tools and technologies I use to build full-stack web
            applications.
          </motion.p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
          variants={popUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {FILTERS.map((f) => (
            <FilterTab
              key={f}
              label={f}
              isActive={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              count={getCategoryCount(f)}
            />
          ))}
        </motion.div>

        {/* ── Stats Summary Row ── */}
        <motion.div
          className="mx-auto flex max-w-2xl justify-around gap-6 my-10 pb-5 border-b border-white/5 text-center"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {[
            { label: "Technologies", value: SKILLS.length },
            {
              label: "Frontend",
              value: SKILLS.filter((s) => s.category === "Frontend").length,
            },
            {
              label: "Backend",
              value: SKILLS.filter((s) => s.category === "Backend").length,
            },
            {
              label: "Databases",
              value: SKILLS.filter((s) => s.category === "Database").length,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={popUp}
              className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-300 md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-slate-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Skill Cards Grid ── */}
        <div className="mx-auto max-w-5xl mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
              variants={staggerContainer(0.04, 0.02)}
              initial="hidden"
              animate="visible">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.slug} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Icon Cloud ── */}
        <motion.div
          className="mx-auto h-[340px] sm:h-[400px] md:h-[500px] max-w-xl flex items-center justify-center"
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
