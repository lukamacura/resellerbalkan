import { motion } from "framer-motion";

export default function OfferVendor({ handleClick }) {
  const cards = [
    {
      title: "VENDOR",
      subtitle: "AirPods",
      image: "/images/airpods.png",
      features: [
        "Kontakt za provjerene dobavljače elektronike (AirPods, AirPods Max, Battery packs, MagSafe punjači)",
        "Dostupni dobavljači s Balkana i Europe",
        "Idealno za brzu preprodaju – uz opciju pouzeća",
      ],
      price: "15 €",
      id: "vendor-airpods",
    },
    {
      title: "VENDOR",
      subtitle: "Parfemi",
      image: "/images/parfemi.png",
      features: [
        "Kontakt za nabavu parfema",
        "Testirano u resell zajednici – visoka zarada",
      ],
      price: "15 €",
      id: "vendor-parfemi",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-24 font-inter">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-white mb-2">
          <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            Vendor
          </span>{" "}
          paketi
        </h2>
        <p className="text-gray-300 text-base mb-12">
          Idealno za brzi start: pristupi kontaktima za nabavku elektronike i parfema po nabavnim cijenama.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-400 uppercase mb-1">
                <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
                  {card.title}
                </span>
              </h3>
              <p className="text-lg text-white mb-4">{card.subtitle}</p>
              <img src={card.image} alt={card.subtitle} className="w-[180px] mb-6" />

              <div className="text-left space-y-3 mb-6">
                {card.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <img src="/icons/check.svg" alt="check" className="w-5 mt-1" />
                    <p className="text-sm text-white leading-snug">{f}</p>
                  </div>
                ))}
              </div>

              <p className="text-4xl font-bold text-yellow-400 mb-4">
                <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
                  {card.price}
                </span>
              </p>

              <motion.button
                onClick={() => handleClick(card.id)}
                className="block w-full sm:inline-block sm:w-auto text-center bg-yellow-400 font-urbanist text-black px-6 py-6 sm:py-3 rounded-lg font-bold shadow hover:opacity-90 transition"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                🛒 Kupi odmah
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
