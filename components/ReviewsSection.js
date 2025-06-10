import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      quote:
        "Evo me posle 3–4 nedelje resellinga. Lik koji je mislio da je skam priča, zaradio sam ukupno 600€ od 3–4 prodaje patika... Mogu da kažem da sam zadovoljan grupom – već od prve prodaje isplatite članarinu za admina. Sve 5 👏🏼",
      name: "Miksa",
      rating: 5,
    },
    {
      quote:
        "Cekao prvu prodaju da napišem recenziju... Cena premiuma je smešna jer sam je duplo zaradio jednom prodajom patika.",
      name: "Luka",
      rating: 5,
    },
  ];

  const images = [
    "/images/review1.webp",
    "/images/review2.webp",
    "/images/review3.webp",
    "/images/review4.webp",
    "/images/review5.webp",
    "/images/review6.webp",
    "/images/review7.webp",
    "/images/review8.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="recenzije"
      className="bg-[#121212] text-white py-20 px-6 md:px-24 font-inter"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-12">
          Zadovoljni{" "}
          <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            korisnici
          </span>
          , pravi{" "}
          <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            rezultati
          </span>
          .
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div className="space-y-6">
            {reviews.map((card, i) => (
              <motion.div
                key={i}
                className="border border-[#333] p-6 rounded-xl bg-[#1a1a1a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl mb-4">"{card.quote}"</p>
                <p className="text-yellow-400 font-bold mb-2">{card.name}</p>
                <div className="text-yellow-400">
                  {"★".repeat(card.rating)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-start h-[400px] md:h-[600px] lg:h-[800px] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Rezultat"
                className=" max-w-full max-h-full sm:w-[300px] md:w-[400px] lg:w-[500px] rounded-xl border border-[#333] absolute"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
