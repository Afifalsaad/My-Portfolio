import { motion } from "framer-motion";

const firstPart = "Hii, I'm";
const namePart = " Afif Al Saad";
const fullText = `${firstPart}${namePart}`;

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.12,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function TypewriterText() {
  return (
    <section>
      <motion.h1
        aria-label={fullText}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        className="whitespace-nowrap text-left text-6xl font-bold tracking-tight leading-tight">
        {/* Hii, I'm */}
        <span aria-hidden="true" className="text-[#f5f5f5]">
          {Array.from(firstPart).map((character, index) => (
            <motion.span
              key={`first-${index}`}
              variants={letterVariants}
              className="whitespace-pre">
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </span>

        {/* Afif Al Saad */}
        <span aria-hidden="true" className="text-green-500">
          {Array.from(namePart).map((character, index) => (
            <motion.span
              key={`name-${index}`}
              variants={letterVariants}
              className="whitespace-pre">
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </span>
      </motion.h1>
    </section>
  );
}
