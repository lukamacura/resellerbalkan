import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Moram li biti punoljetan?",
    answer:
      "Ne! Čak je i preporučljivo početi što prije – što ranije steknete iskustvo, to bolje. Program je otvoren za sve s navršenih 15 godina, bez obzira na dob. Jedini uvjet je sposobnost komunikacije s kupcima i posvećenost poslu.",
  },
  {
    question: "Mogu li raditi sve preko mobitela?",
    answer:
      "Da. Većina procesa može se voditi s mobitela, uključujući komunikaciju s kupcima, naručivanje i promociju."
  },
  {
    question: "Je li sve ovo legalno?",
    answer:
      "Da, reselling je potpuno legalan poslovni model koji podrazumeva kupovinu i preprodaju robe."
  },
  {
    question: "Treba li mi početni kapital?",
    answer:
      "Ne. Imaš strategije za početak bez kapitala. Plaćaš tek kada dobiješ uplatu."
  },
  {
    question: "Već imam svoj brend – je li program za mene?",
    answer:
      "Da! Naučićeš kako da skaliraš svoj brend i unaprjediš marketing kroz provjeren sistem."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-[#121212] text-white py-20 px-6 md:px-24 font-inter">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-urbanist mb-8">
            <span className="text-yellow-400">FAQ</span> - Česta pitanja
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold hover:bg-[#222] transition"
                >
                  {faq.question}
                  <span className="text-yellow-400 text-xl font-bold">
                    {openIndex === i ? "-" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="px-4 pb-4 text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/box.png"
            alt="Reseller Balkan Box"
            className="max-w-full w-[420px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
