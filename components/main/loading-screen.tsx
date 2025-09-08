"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Fallback timer in case video doesn't load or play
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isVideoEnded && !isFading) {
        console.log("Video fallback triggered");
        handleVideoEnded();
      }
    }, 10000); // 10 seconds fallback

    return () => clearTimeout(fallbackTimer);
  }, [isVideoEnded, isFading]);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    // Add a small delay before starting the fade out
    setTimeout(() => {
      setIsFading(true);
      // Call the completion callback after fade animation
      setTimeout(() => {
        onLoadingComplete();
      }, 1000); // Match the fade out duration
    }, 500);
  };

  const handleVideoError = () => {
    console.log("Video error, using fallback");
    setVideoError(true);
    handleVideoEnded();
  };

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            {!videoError ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                onEnded={handleVideoEnded}
                onError={handleVideoError}
                playsInline
              >
                <source src="/videos/loading.webm" type="video/webm" />
              </video>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="text-white text-4xl font-bold mb-4">
                    Kavya Panicker
                  </div>
                  <div className="text-gray-300 text-xl">
                    Portfolio Loading...
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 