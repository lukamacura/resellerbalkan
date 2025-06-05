// components/HeroSection.js
"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-6 py-28">
      
      {/* TEXT LEFT */}
      <motion.div
        className="max-w-xxl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-md leading-tight mb-4 font-urbanist">
          <span className="inline-block mr-2">💸 </span>
          Pokreni svoj{" "}
          <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            online biznis
          </span>
          <br /> već danas
        </h1>
        <motion.p
          className="text-white text-lg mb-6 font-light font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Odaberi svoj <span className="font-bold">program</span> i kreni s{" "}
          <span className="font-bold">resellingom</span>.
        </motion.p>
        <motion.a
          href="#ponuda"
          className="block w-full sm:inline-block sm:w-auto text-center bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          🚀 Započni odmah
        </motion.a>
      </motion.div>

      {/* IMAGE RIGHT */}
      <motion.div
  className="relative mt-12 w-[220px] sm:w-[260px] md:w-[300px] ml-auto md:mt-0"

        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/images/discord.png"
          alt="Discord"
          className="w-full relative z-10"
          initial={{ y: -10 }}
          animate={{ y: [ -10, 0, -10 ] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src="/images/Iphone.png"
          alt="iPhone"
          className="absolute top-[50px] left-[-150px] w-full z-20"
        />
      </motion.div>
    </section>
  );
}
