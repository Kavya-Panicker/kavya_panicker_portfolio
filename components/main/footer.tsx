"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scrollSlideInFromTop, scrollSlideInFromRight } from "@/lib/motion";

export const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-8 md:p-[15px]"
    >
      <motion.div
        variants={scrollSlideInFromTop}
        className="w-full flex flex-col items-center justify-center m-auto gap-4"
      >
        <motion.div
          variants={scrollSlideInFromRight}
          className="mb-4 md:mb-[20px] text-xs md:text-[15px] text-center"
        >
          &copy; Kavya Panicker {new Date().getFullYear()} Inc. All rights reserved.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
