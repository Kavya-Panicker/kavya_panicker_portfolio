"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { scrollSlideInFromLeft, scrollSlideInFromRight } from "@/lib/motion";
import { SKILL_DATA } from "@/constants";

// Correct grouping based on your new layout
const FIRST_ROW_SKILLS = SKILL_DATA.slice(0, 9);   // 9 skills
const SECOND_ROW_SKILLS = SKILL_DATA.slice(9, 16); // 7 skills
const THIRD_ROW_SKILLS = SKILL_DATA.slice(16);     // 2 skills

export const Skills = () => {
  const { ref: row1Ref, inView: row1InView } = useInView({ threshold: 0.1 });
  const { ref: row2Ref, inView: row2InView } = useInView({ threshold: 0.1 });
  const { ref: row3Ref, inView: row3InView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-6 overflow-hidden py-10 sm:py-16 px-4 md:px-8 w-full"
    >
      <SkillText />

      {/* Row 1 - 9 skills */}
      <motion.div
        ref={row1Ref}
        initial="hidden"
        animate={row1InView ? "visible" : "hidden"}
        variants={scrollSlideInFromLeft}
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 max-w-6xl"
      >
        {FIRST_ROW_SKILLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </motion.div>

      {/* Row 2 - 7 skills */}
      <motion.div
        ref={row2Ref}
        initial="hidden"
        animate={row2InView ? "visible" : "hidden"}
        variants={scrollSlideInFromRight}
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 max-w-5xl"
      >
        {SECOND_ROW_SKILLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </motion.div>

      {/* Row 3 - 2 skills */}
      <motion.div
        ref={row3Ref}
        initial="hidden"
        animate={row3InView ? "visible" : "hidden"}
        variants={scrollSlideInFromLeft}
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 max-w-3xl"
      >
        {THIRD_ROW_SKILLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </motion.div>

      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none select-none z-[-10]">
        <div className="flex items-center justify-center w-full h-full bg-cover opacity-30">
          <video
            className="max-w-5xl w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
