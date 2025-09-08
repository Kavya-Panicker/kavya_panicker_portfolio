"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "@/components/sub/project-card";
import { scrollSlideInFromLeft, scrollSlideInFromTop } from "@/lib/motion";
import { ContactInfo } from "./contact-info";

// ✅ Corrected image paths (note: /projects/, not /project/)
const PROJECTS = [
  {
    title: "Face Recognition Attendance System",
    description:
      "An AI-based system that uses facial recognition to mark attendance. It improves accuracy, saves time, and eliminates proxy attendance.",
    image: "/projects/face-reco-employee.jpg",
    link: "https://github.com/MrShekh/react-native-face-reco-project/releases/download/v1.0.0/application-fa62b3be-8de6-4969-a790-5b400bf1ef8b.apk",
  },
  {
    title: "DTC Management System",
    description:
      "A smart solution for Delhi Transport Corporation that automates route scheduling, bus tracking, and improves commuter convenience using GIS and data analytics.",
    image: "/projects/DTC-admin.jpg",
    link: "https://dtc-admin.netlify.app/",
  },
  {
    title: "Job Portal",
    description:
      "A job search platform that connects recruiters and job seekers with features like resume upload, job filters, and interview scheduling.",
    image: "/projects/job-portal.jpg",
    link: "https://github.com/MrShekh/kavya_panicker_mini_project/releases/download/v1.0.0/app-release.apk",
  },
  {
    title: "SkillSwape Platform",
    description:
      "A peer-to-peer platform where users can exchange skills like coding, dance, or photography by offering their own skills in return.",
    image: "/projects/skillswap.jpg",
    link: "https://skill-swap-admin.netlify.app/",
  },
  {
    title: "3D Furniture Catalog",
    description:
      "A 3D AR-based furniture catalog where customers can visualize furniture in their space, customize options, and get real-time pricing.",
    image: "/projects/coming-soon.jpg",
    link: "#",
  },
];

export const Projects = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-2 sm:px-4 md:px-10 w-full"
    >
      <motion.h1
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={scrollSlideInFromTop}
        className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 sm:py-12 md:py-20 text-center"
      >
        My Projects
      </motion.h1>

      <motion.div
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={scrollSlideInFromLeft}
        className="h-full w-full flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 px-0 sm:px-2 md:px-10 items-center md:items-stretch"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.div>

      <div className="mt-10 sm:mt-16 md:mt-20 w-full">
        <ContactInfo />
      </div>
    </section>
  );
};
