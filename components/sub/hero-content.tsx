"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import {
  scrollSlideInFromLeft,
  scrollSlideInFromRight,
  scrollSlideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col-reverse md:flex-row items-center justify-center px-2 sm:px-4 md:px-20 w-full z-[20] gap-8 md:gap-0"
      style={{ transform: 'translateY(-5vh)' }}
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-start items-center md:items-start">

        <motion.div
          variants={scrollSlideInFromLeft}
          className="flex flex-col gap-0 mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto text-center md:text-left"
        >
          <span style={{ whiteSpace: 'normal' }}>
            A passionate{" "}
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              full-stack
            </span>
          </span>
          <span>web developer.</span>
        </motion.div>

        <motion.p
          variants={scrollSlideInFromLeft}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-5 max-w-full md:max-w-[600px] text-center md:text-left"
        >
          A passionate full-stack developer with a strong focus on creating seamless user experiences. Skilled in crafting responsive and visually appealing interfaces (UI/UX) using modern frontend technologies, while also building robust and scalable backend systems. From wireframes to deployment, I bring ideas to life through clean code, thoughtful design, and efficient problem-solving.
        </motion.p>

        <motion.a
          variants={scrollSlideInFromLeft}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full"
        >
          Learn more
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={scrollSlideInFromRight}
        className="w-full h-full flex justify-center items-center mb-4 md:mb-0"
      >
        <img
          src="/girl-removebg-preview.png"
          alt="Kavya Panicker Icon"
          height={300}
          width={300}
          draggable={false}
          className="select-none rounded-full object-cover w-40 h-40 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>
    </motion.div>
  );
};
