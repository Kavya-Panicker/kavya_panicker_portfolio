"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/main/loading-screen";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="h-full w-full">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-20"
          >
            <Hero />
            <Encryption />
            <Skills />
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
