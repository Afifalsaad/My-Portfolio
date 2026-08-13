import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IconCloud from "./IconCloud";

import {
  fadeUp,
  zoomIn,
  popUp,
  staggerContainer,
  defaultViewport,
} from "../lib/motionVariants";

// ── Technology Brand Colors ──────────────────────────────────────────────────
const BRAND_COLORS = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextdotjs: "#000000",
  html5: "#E34F26",
  tailwindcss: "#06B6D4",
  redux: "#764ABC",
  nodedotjs: "#5FA04E",
  express: "#000000",
  mongodb: "#47A248",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  firebase: "#DD2C00",
  git: "#F05032",
  github: "#181717",
  vercel: "#000000",
  postman: "#FF6C37",
  figma: "#F24E1E",
  vscode: "#007ACC",
  msoffice: "#D83B01",
  skeleton: "#000000",
};

// ── Skills Data ───────────────────────────────────────────────────────────────
const SKILLS = [
  {
    name: "JavaScript",
    slug: "javascript",
    category: "Core",
    level: 90,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Postman",
    slug: "postman",
    category: "Tools",
    level: 90,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    website: "https://www.postman.com/",
  },
  {
    name: "Figma",
    slug: "figma",
    category: "Tools",
    level: 90,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    website: "https://www.figma.com/",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    category: "Core",
    level: 85,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    slug: "react",
    category: "Frontend",
    level: 92,
    status: "Expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    website: "https://react.dev/",
  },
  {
    name: "Next.js",
    slug: "nextdotjs",
    category: "Frontend",
    level: 88,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    website: "https://nextjs.org/",
  },
  {
    name: "HTML5",
    slug: "html5",
    category: "Frontend",
    level: 95,
    status: "Expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    category: "Frontend",
    level: 92,
    status: "Expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    website: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    slug: "redux",
    category: "Frontend",
    level: 92,
    status: "Expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    website: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    category: "Backend",
    level: 85,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    website: "https://nodejs.org/",
  },
  {
    name: "Express",
    slug: "express",
    category: "Backend",
    level: 83,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    website: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    category: "Database",
    level: 82,
    status: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    website: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    slug: "mysql",
    category: "Database",
    level: 80,
    status: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    website: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    level: 80,
    status: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    website: "https://www.postgresql.org/",
  },
  {
    name: "Firebase",
    slug: "firebase",
    category: "Database",
    level: 85,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    website: "https://firebase.google.com/",
  },
  {
    name: "Git",
    slug: "git",
    category: "Tools",
    level: 88,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    website: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    slug: "github",
    category: "Tools",
    level: 90,
    status: "Expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    website: "https://github.com/",
  },
  {
    name: "Vercel",
    slug: "vercel",
    category: "Tools",
    level: 88,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    website: "https://vercel.com/",
  },
  {
    name: "VS Code",
    slug: "vscode",
    category: "Tools",
    level: 90,
    status: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    website: "https://code.visualstudio.com/",
  },
  {
    name: "MS Office",
    slug: "msoffice",
    category: "Tools",
    level: 90,
    status: "Advanced",
    logo: "https://img.icons8.com/color/48/microsoft-office-2019.png",
    website: "https://www.microsoft.com/en-us/microsoft-365/microsoft-office",
  },
];

const FILTERS = ["All", "Core", "Frontend", "Backend", "Database", "Tools"];

// ── Desktop Pyramid Configuration ─────────────────────────────────────────────

const PYRAMID_PATTERN = [8, 6, 4, 2];

const createPyramidRows = (skills) => {
  if (!Array.isArray(skills) || skills.length === 0) {
    return [];
  }

  const rows = [];

  let currentIndex = 0;
  let patternIndex = 0;

  while (currentIndex < skills.length) {
    const requestedRowSize =
      PYRAMID_PATTERN[Math.min(patternIndex, PYRAMID_PATTERN.length - 1)];

    const remainingSkills = skills.length - currentIndex;

    const actualRowSize = Math.min(requestedRowSize, remainingSkills);

    rows.push(skills.slice(currentIndex, currentIndex + actualRowSize));

    currentIndex += actualRowSize;
    patternIndex += 1;
  }

  return rows;
};

// ── Card Animation ─────────────────────────────────────────────────────────────

const skillScrollCard = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },

  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      delay: index * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  exit: {
    opacity: 0,
    y: 14,
    scale: 0.98,

    transition: {
      duration: 0.14,
      ease: "easeOut",
    },
  },
};

// ── Skills Component ──────────────────────────────────────────────────────────

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return SKILLS;
    }

    const normalizedFilter = activeFilter.trim().toLowerCase();

    return SKILLS.filter((skill) => {
      const normalizedCategory = skill.category.trim().toLowerCase();

      return normalizedCategory === normalizedFilter;
    });
  }, [activeFilter]);

  const pyramidRows = useMemo(
    () => createPyramidRows(filteredSkills),
    [filteredSkills]
  );

  const categoryCounts = useMemo(() => {
    return SKILLS.reduce(
      (counts, skill) => {
        counts.All += 1;

        counts[skill.category] = (counts[skill.category] || 0) + 1;

        return counts;
      },
      {
        All: 0,
        Core: 0,
        Frontend: 0,
        Backend: 0,
        Database: 0,
        Tools: 0,
      }
    );
  }, []);

  const getCategoryCount = (category) => {
    return categoryCounts[category] || 0;
  };

  const renderSkillCard = (skill, absoluteIndex, layoutType = "mobile") => {
    const brandColor = BRAND_COLORS[skill.slug] || "#a855f7";

    const isDesktopPyramid = layoutType === "desktop";

    return (
      <motion.article
        title={skill.name}
        key={`${skill.slug}-${absoluteIndex}`}
        custom={absoluteIndex}
        target="_blank"
        rel="noopener noreferrer"
        variants={skillScrollCard}
        style={{
          willChange: "transform, opacity",
        }}>
        <a href=""></a>
        <motion.a
          href={skill.website}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -2,
            scale: 1.075,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 24,
          }}
          style={{
            "--skill-color": `${brandColor}90`,
            "--skill-bg": `${brandColor}17`,
            willChange: "transform",
          }}
          className={[
            "group relative flex",
            "flex-col items-center justify-center",
            "overflow-hidden rounded-md",
            "border border-emerald-400/15",
            "bg-white/[0.045]",
            "px-2",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]",
            "backdrop-blur-sm",
            "transition-[border-color,background-color,box-shadow]",
            "duration-300",
            "hover:border-emerald-300/90",
            isDesktopPyramid
              ? [
                  "h-[82px] w-[82px] py-3",
                  "xl:h-[96px] xl:w-[96px]",
                  "2xl:h-[106px] 2xl:w-[106px]",
                ].join(" ")
              : [
                  "h-[70px] w-full min-w-0 py-1.5",
                  "sm:h-[85px] sm:py-2",
                  "md:h-[95px] md:py-3",
                ].join(" "),
          ].join(" ")}>
          {/* Technology logo */}
          <div
            className={[
              "relative z-10",
              "flex shrink-0",
              "items-center justify-center",
              "transition-transform duration-300",
              "group-hover:scale-110",
              isDesktopPyramid
                ? [
                    "mb-2.5 h-8 w-8",
                    "sm:h-9 sm:w-9",
                    "md:h-10 md:w-10",
                    "lg:h-10 lg:w-10",
                  ].join(" ")
                : [
                    "mb-1 h-7 w-7",
                    "sm:mb-1.5 sm:h-9 sm:w-9",
                    "md:mb-2.5 md:h-10 md:w-10",
                  ].join(" "),
            ].join(" ")}>
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="
              h-7 w-7 object-contain
              opacity-80 grayscale
              transition-all duration-300
              group-hover:opacity-100
              group-hover:grayscale-0
              sm:h-8 sm:w-8
              md:h-9 md:w-9
              lg:h-9 lg:w-9
            "
            />
          </div>
          {/* Technology name */}
          <h3
            className="
            relative z-10
            block w-full min-w-0
            truncate px-0.5
            text-center text-[9px]
            leading-tight
            font-semibold tracking-tight
            text-slate-400
            transition-colors duration-300
            group-hover:text-slate-100
            dark:text-zinc-400
            dark:group-hover:text-white
            sm:text-[10px]
            md:text-[11px]
            lg:text-xs
          ">
            {skill.name}
          </h3>
        </motion.a>
      </motion.article>
    );
  };

  return (
    <section
      id="skills"
      className="
        relative z-10
        border-t border-slate-200/50
        pb-16 pt-12
        sm:pb-24 sm:pt-20
        dark:border-zinc-800/50
      ">
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
            className="
              mb-3 text-3xl font-bold
              tracking-tight text-slate-100
              dark:text-white
              md:text-5xl
            ">
            Technical{" "}
            <span className="relative inline-block text-primary">
              Skills
              <span
                className="
                  absolute bottom-2 left-0
                  -z-10 h-2.5 w-full
                  -rotate-1 rounded-full
                  bg-primary/20
                "
              />
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
          className="
            mb-10 flex flex-wrap
            items-center justify-center gap-2
          "
          variants={popUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={[
                  "relative flex items-center gap-1.5",
                  "rounded-lg px-3 py-1.5",
                  "text-[10px] font-semibold",
                  "transition-all duration-200",
                  "sm:px-4 sm:py-2 sm:text-xs",

                  isActive
                    ? [
                        "bg-slate-200 text-slate-900",
                        "dark:bg-zinc-100",
                        "dark:text-zinc-900",
                      ].join(" ")
                    : [
                        "border border-white/5",
                        "bg-slate-900/20",
                        "text-slate-400",
                        "hover:bg-slate-900/40",
                        "hover:text-slate-200",
                        "dark:bg-zinc-900/20",
                        "dark:hover:bg-zinc-900/40",
                      ].join(" "),
                ].join(" ")}>
                {filter}

                <span
                  className={[
                    "rounded px-1.5 py-0.5",
                    "text-[10px] font-bold",
                    isActive
                      ? [
                          "bg-slate-900/10",
                          "text-slate-900",
                          "dark:bg-zinc-900/10",
                          "dark:text-zinc-900",
                        ].join(" ")
                      : [
                          "bg-slate-900/40",
                          "text-slate-500",
                          "dark:bg-zinc-900/40",
                          "dark:text-zinc-500",
                        ].join(" "),
                  ].join(" ")}>
                  {getCategoryCount(filter)}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Stats Summary Row ── */}
        <motion.div
          className="
            mx-auto mb-2
            flex max-w-2xl flex-wrap
            justify-center gap-4
            text-center
            sm:justify-around sm:gap-6
          "
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}>
          {[
            {
              label: "Technologies",
              value: getCategoryCount("All"),
            },
            {
              label: "Frontend",
              value: getCategoryCount("Frontend"),
            },
            {
              label: "Backend",
              value: getCategoryCount("Backend"),
            },
            {
              label: "Databases",
              value: getCategoryCount("Database"),
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={popUp}
              className="mb-4 flex flex-col items-center">
              <span
                className="
                  text-2xl font-bold
                  text-cyan-400 md:text-3xl
                ">
                {stat.value}
              </span>

              <span
                className="
                  mt-0.5 text-[9px]
                  font-semibold uppercase
                  tracking-widest text-green-300
                ">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Skills Grid ── */}
        <div className="mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 16,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full">
              {filteredSkills.length === 0 ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="
                    flex min-h-[180px]
                    w-full items-center
                    justify-center text-center
                  ">
                  <p className="text-sm text-slate-400">
                    No technologies were found in this category.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Mobile and Tablet Grid */}
                  <motion.div
                    key={`mobile-${activeFilter}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.12,
                      margin: "0px 0px -50px 0px",
                    }}
                    className="
                      grid w-full
                      grid-cols-3 gap-2.5
                      px-2
                      sm:grid-cols-4 sm:gap-3
                      sm:px-0
                      md:grid-cols-5 md:gap-4
                      lg:hidden
                    ">
                    {filteredSkills.map((skill, index) =>
                      renderSkillCard(skill, index, "mobile")
                    )}
                  </motion.div>

                  {/* Desktop Pyramid Grid */}
                  <motion.div
                    key={`desktop-${activeFilter}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.1,
                      margin: "0px 0px -50px 0px",
                    }}
                    className="
                      hidden w-full
                      flex-col items-center
                      gap-2.5
                      lg:flex
                      xl:gap-6
                      2xl:gap-4
                    ">
                    {pyramidRows.map((rowSkills, rowIndex) => {
                      const previousSkillsCount = pyramidRows
                        .slice(0, rowIndex)
                        .reduce(
                          (total, previousRow) => total + previousRow.length,
                          0
                        );

                      return (
                        <div
                          key={`${activeFilter}-row-${rowIndex}`}
                          className="
                              grid w-max max-w-full
                              justify-center gap-2.5
                              [grid-template-columns:repeat(var(--column-count),82px)]
                              xl:gap-6
                              xl:[grid-template-columns:repeat(var(--column-count),96px)]
                              2xl:gap-4
                              2xl:[grid-template-columns:repeat(var(--column-count),106px)]
                            "
                          style={{
                            "--column-count": rowSkills.length,
                          }}>
                          {rowSkills.map((skill, index) =>
                            renderSkillCard(
                              skill,
                              previousSkillsCount + index,
                              "desktop"
                            )
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Icon Cloud ── */}
        <motion.div
          className="
            mx-auto mt-16 flex
            h-[340px] max-w-xl
            items-center justify-center
            sm:h-[400px]
            md:h-[500px]
          "
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
