"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  scrollSlideInFromLeft,
  scrollSlideInFromRight,
  scrollSlideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full h-auto flex flex-col items-center justify-center"
    >

      <motion.div
        variants={scrollSlideInFromLeft}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        variants={scrollSlideInFromRight}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea.
      </motion.div>
    </motion.div>
  );
};
