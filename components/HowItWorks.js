// components/HowItWorks.js
import { motion } from "framer-motion";

export default function HowItWorks() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-20 font-inter">
      <div className="text-left max-w-6xl mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 font-urbanist"
        >
          Kako funkcionira{" "}
          <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            reselling?
          </span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Tri koraka */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            {
              step: "1.",
              icon: "/icons/korak1.png",
              text: "Kupiš proizvod po nižoj cijeni",
            },
            {
              step: "2.",
              icon: "/icons/korak2.png",
              text: "Povišiš cijenu i prodaš",
            },
            {
              step: "3.",
              icon: "/icons/korak3.png",
              text: "Ostvaruješ profit",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <p className="text-yellow-400 text-3xl font-bold mb-4">
                {item.step}
              </p>
              <img
                src={item.icon}
                alt={`Korak ${i + 1}`}
                className="mx-auto h-[80px] mb-4"
              />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Objašnjenja */}
        <div className="text-left max-w-6xl mx-auto text-gray-300 space-y-6">
          {[
            <>
              <span className="text-xl mr-2">ℹ️</span>
              <strong>Reselling</strong> (ili preprodaja) je poslovni model u kojem kupuješ proizvode po nižoj cijeni i prodaješ ih po višoj – ostvarujući <strong>profit</strong>. Možeš raditi s odjećom, elektronikom, parfemima, pa čak i digitalnim proizvodima.
            </>,
            <>
              <span className="text-xl mr-2">➕</span>
              Bilo da si student, početnik ili netko tko već ima svoj brend – reselling ti omogućava <strong>fleksibilan</strong> i <strong>skalabilan</strong> način zarade, uz minimalna ulaganja.
            </>,
            <>Spreman za početak? Ovaj sustav je testiran – sada je red na tebi.</>,
          ].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          <motion.a
            href="#ponuda"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="block w-full sm:inline-block sm:w-auto text-center bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
          >
            Spreman sam
          </motion.a>
        </div>
      </div>
    </section>
  );
}
