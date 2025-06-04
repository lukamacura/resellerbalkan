import { motion } from "framer-motion";

export default function OfferCoaching({ handleClick }) {
  const items = [
    "2x tjedno live pozivi (strategije, analiza, optimizacija)",
    "Detaljno izrađena marketinška strategija",
    "Obuka i izgradnja vlastitog brenda",
    "Pomoć pri pokretanju proizvoda / ponude",
    "24/7 direktan kontakt i podrška",
    "30+ video lekcija"
  ];

  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-24 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Slika levo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/discord_pro.png"
            alt="Coaching program knjiga"
            className="w-[280px] md:w-[340px]"
          />
        </motion.div>

        {/* Tekst desno */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-urbanist mb-4">
            <span className="text-white">1 na 1 Coaching </span>
            <span className="font-light">program</span>
          </h2>

          <p className="text-4xl mb-4">
            <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">150 €</span>
          </p>

          <p className="text-gray-300 text-base mb-6">
            Personalizirani program uz mentora – strategija, analiza i direktna pomoć u rastu tvog brenda.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <img src="/icons/check.svg" alt="check" className="w-5 mt-1" />
                <p className="text-sm text-white leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => handleClick("coaching")}
            className="block w-full sm:inline-block sm:w-auto text-center bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            🛒 Kupi odmah
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
