"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlogan, setCurrentSlogan] = useState("");

  const slogans = [
    "Tvoj biznis počinje ovde...",
    "Vrijeme je za zaradu 💸",
    "Od nule do prve prodaje 🚀"
  ];

  useEffect(() => {
    setCurrentSlogan(slogans[0]); // inicijalni

    const sloganInterval = setInterval(() => {
      setCurrentSlogan((prev) => {
        const nextIndex = (slogans.indexOf(prev) + 1) % slogans.length;
        return slogans[nextIndex];
      });
    }, 800);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(sloganInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed top-0 left-0 w-full h-full bg-[#121212] z-[9999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/images/rocket.png"
            alt="Loader raketa"
            className="w-40 h-auto"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.p
            className="mt-4 text-white font-urbanist text-lg tracking-wider text-center"
            key={currentSlogan}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentSlogan}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
