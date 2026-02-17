import { motion } from "framer-motion";

export default function OfferPremium({ handleClick }) {
  const items = [
    "Potpuni uvod u reselling",
    "Strategije za rad bez kapitala",
    "Alati za analizu tržišta",
    "Izgradnja brenda + SMM",
    "Tehnike oglašavanja i prodaje",
    "Psihologija kupaca i skaliranje",
    "24/7 pristup grupi + podrška admina",
    "Popusti i kontakti dobavljača",
    "Dobavljači s Balkana (1–3 dana)",
    "Dobavljači iz Europe (3–7 dana)",
    "Dobavljači iz Azije (7–14 dana)"
  ];

  return (
    <section id="ponuda" className="bg-[#121212] text-white py-10 sm:py-20 px-6 md:px-24 font-inter">
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
            src="/images/discord.png"
            alt="Premium program knjiga"
            className="w-[280px] md:w-[440px] md:max-h-[440px]  max-h-[240px] object-contain"
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
            <span className="text-white">Premium</span>{" "}
            <span className="font-light">program</span>
          </h2>

          <p className="text-yellow-400 text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
              40 €{" "}
            </span>
            <span className="text-white text-sm font-normal">Lifetime pristup</span>
          </p>

          <p className="text-gray-300 text-base mb-6">
            Sve što ti treba da pokreneš profitabilan reselling biznis – od dobavljača do brandiranja.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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

            <div className="flex gap-2 flex-col sm:flex-row items-center">
          <motion.button
            onClick={() => handleClick("premium")}
            className="w-full whitespace-nowrap sm:w-auto bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            🛒 Kupi odmah
          </motion.button>

          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 shadow-sm ">
            <span className="text-xs text-gray-300 font-medium">
              Plaćanje se vrši sigurno uz {" "}
              <img src="/icons/stripe.png" alt="Stripe" className="w-16 h-auto inline-block" />

            </span>
          </div>
        </div>

        </motion.div>
      </div>
    </section>
  );
}
