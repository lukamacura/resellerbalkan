"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulira load od 2.5 sekunde, možeš koristiti isLoading dok se data ne učita
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
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
          <p className="mt-4 text-white font-urbanist text-lg tracking-wider">Pokrećem Reseller Balkan...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
