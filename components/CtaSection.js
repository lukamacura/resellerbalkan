"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-24 font-inter">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* TEXT LEVO */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold font-urbanist mb-4">
            Postani{" "}
            <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
              član
            </span>{" "}
            već danas.
          </h2>
          <p className="text-lg text-white mb-6">Započni svoj projekt sa nama.</p>

          <a
            href="#ponuda"
            className="block w-full sm:inline-block sm:w-auto text-center bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
          >
            🚀 Započni odmah
          </a>
        </div>

        {/* SLIKA DESNO */}
        <motion.div
          className="flex-1 flex justify-center"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/rocket.png"
            alt="Raketa - Reseller Balkan"
            className="w-[300px] md:w-[360px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
