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
            Zovem se <strong>Marko</strong>, i već preko 6 godina bavim se online prodajom. Kroz različite metode – od dropshippinga do resellinga – pronašao sam ono što stvarno radi. Strast prema patikama i odjeći pretvorio sam u posao, istražio stotine dobavljača i došao do provjerenih <strong>kontakata</strong> koji danas dostavljaju i u 24h.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            Baš zato sam pokrenuo <strong>prvi Reselling program na Balkanu</strong> – da ti olakšam početak.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            U programu ćeš naučiti <strong>sve</strong> o resellingu, prodaji i marketingu, dobiti pristup najboljim dobavljačima iz regije i svijeta, podršku zajednice i mogućnost rada 1 na 1 sa mnom. Čekaju te i live sastanci, alati i savjeti koje bih i ja volio da sam imao na početku.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            <strong>Tu sam da ti pomognem da kreneš odmah.</strong>
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