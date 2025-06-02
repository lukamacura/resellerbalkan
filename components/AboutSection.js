export default function AboutSection(){
    return(
<section className="bg-[#181818] text-white py-16 px-6 md:px-20 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* TEKST LEVO */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 font-urbanist">
            Tko sam {" "}
            <span className="bg-gradient-to-r font-bold from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
            ja?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Znam da je teško krenuti od nule, i baš zato sam osmislio prvi Reselling program na Balkanu.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            Ja sam <strong>Marko</strong> i u online svijetu prodaje sam već preko 6 godina. Krenuo sam s raznim dropshipping metodama, a <strong>reselling</strong> u ovom obliku radim već sigurno 3 godine. Svoju strast prema patikama i odjeći sam iskoristio na najbolji mogući način. Oduvijek me zanimao taj omjer cijene i kvalitete koja se zapravo dobije kupnjom u klasičnim dućanima. Tako je i sve krenulo → istraživao sam i isprobavao stotine dobavljača dok nisam stupio u kontakt s provjereno najboljima. I dan danas radim s njima, a s vremenom nakon otvaranja reselling programa, upoznao sam i naše ljude s Balkana koji se bave istim poslom te s njima također surađujem u smislu balkanskih dobavljača koji nude dostavu i u 24 sata.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            U mom <strong>reselling programu</strong> naučit ćeš sve o resellingu, prodaji i marketingu. Dobit ćeš pristup kontaktima provjerenih dobavljača s Balkana i ostatka svijeta. Također tu je i zajednica s ostalim članovima i Staff timom koji su uvijek otvoreni za bilo koji oblik pomoći. Omogućio sam i rad 1 na 1 gdje ti otkrivam sve one male detalje o marketingu i brendiranju koje će ti uveliko pomoći u početku tvog rada. Također tu su i live sastanci, kompletan angažman i još mnogo toga...
          </p>
        </div>

        {/* SLIKA DESNO */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/tkosamja.jpg"
            alt="Marko - osnivač"
            className="w-[350px] h-[350px] object-cover rounded-full shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    );
} 