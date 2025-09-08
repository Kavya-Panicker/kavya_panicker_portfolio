"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { scrollSlideInFromTop, scrollSlideInFromLeft, scrollSlideInFromRight } from "@/lib/motion";

export const Encryption = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="about-me"
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={scrollSlideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Me
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={scrollSlideInFromLeft}
        className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto"
      >
        <div className="max-w-4xl text-center text-3xl md:text-4xl text-white bg-gradient-to-br from-[#1a1a40cc] to-[#23235bcc] p-10 rounded-3xl shadow-2xl font-sans leading-relaxed tracking-wide border-2 border-purple-500/30">
          <span className="block mb-4 text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">Hello, I'm Kavya Panicker!</span>
          <span className="block mb-4 text-3xl font-bold text-purple-300">Developer & Designer</span>
          <span className="block mb-4 text-2xl font-semibold text-cyan-300">UI/UX Enthusiast</span>
          <span className="block mb-6 text-xl text-pink-200">B.Tech Student at Rai University</span>
          <span className="block text-2xl text-gray-200 font-medium mb-6">
            I specialize in building <span className="text-cyan-400 font-bold">modern web</span> and <span className="text-purple-400 font-bold">mobile applications</span> with a focus on <span className="text-pink-400 font-bold">beautiful</span> and <span className="text-cyan-300 font-bold">intuitive UI/UX</span> design.<br/><br/>
            My journey in tech is driven by a deep passion for <span className="text-purple-300 font-bold">creativity</span>, <span className="text-cyan-300 font-bold">innovation</span>, and <span className="text-pink-300 font-bold">continuous learning</span>.<br/><br/>
            I love transforming ideas into engaging digital experiences and am always eager to explore new technologies and design trends.
          </span>
          <span className="block text-2xl text-gray-300 font-semibold">Welcome to my portfolio!</span>
        </div>
      </motion.div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </motion.div>
  );
};
