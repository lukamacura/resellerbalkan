"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Popup from "reactjs-popup";

import {
  Star,
  ShoppingBag,
  Boxes,
  Sparkles,
  Megaphone,
  Box,
  AlertTriangle,
  Rocket,
  Truck,
  FileText,
  Video,
  Images,
  Wallet,
  Instagram,
  PhoneCall,
  Users,
} from "lucide-react";

const features = [
  {
    text: "Pristup novom EU dobavljaču",
    icon: Truck,
    bgClass: "bg-green-400/20",
    iconClass: "text-green-400",
  },
  {
    text: "Sve skripte (DM, objection handling, after-sale)",
    icon: FileText,
    bgClass: "bg-blue-400/20",
    iconClass: "text-blue-400",
  },
  {
    text: "Video lekcije - potpuni reselling trening + izrada stranice",
    icon: Video,
    bgClass: "bg-purple-400/20",
    iconClass: "text-purple-400",
  },
  {
    text: "Marketing i branding module",
    icon: Megaphone,
    bgClass: "bg-pink-400/20",
    iconClass: "text-pink-400",
  },
  {
    text: "Content bank",
    icon: Images,
    bgClass: "bg-yellow-400/20",
    iconClass: "text-yellow-400",
  },
  {
    text: "Price strategy + profit tracker",
    icon: Wallet,
    bgClass: "bg-emerald-400/20",
    iconClass: "text-emerald-400",
  },
  {
    text: "TikTok/IG strategije koje već donose prodaju",
    icon: Instagram,
    bgClass: "bg-red-400/20",
    iconClass: "text-red-400",
  },
  {
    text: "Live pozivi",
    icon: PhoneCall,
    bgClass: "bg-cyan-400/20",
    iconClass: "text-cyan-400",
  },
  {
    text: "Zajednicu i moju direktnu pomoć",
    icon: Users,
    bgClass: "bg-orange-400/20",
    iconClass: "text-orange-400",
  },
];


export default function OfferCoaching() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState(null);

const handleButtonClick = (e) => {
    e?.preventDefault();
    setMsg(null);
    setOpen(true);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMsg(null);

  try {
    const res = await fetch("/api/prijava", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const raw = await res.text(); // prvo uzmi tekst
    let data = {};
    try {
      data = JSON.parse(raw);     // probaj JSON
    } catch {
      data = { error: raw || "Server nije vratio JSON." }; // fallback
    }

    if (!res.ok) {
      setMsg(data.error || "Greška pri prijavi. Pokušaj ponovo.");
      return;
    }

    setTimeout(() => {
    setOpen(false);
    router.push("/prijava_uspesna");
  }, 600);
  } catch (err) {
    setMsg("Network greška. Pokušaj ponovo.");
  } finally {
    setLoading(false);
  }
};






  return (

    <section className="w-full bg-[#0d0d0d] text-white py-20 font-inter">
      <div className="mx-auto w-full max-w-6xl px-4">

        {/* ========================= */}
        {/* HEADER + MOCKUP */}
        {/* ========================= */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          
          <div className="flex-1">
            <h2 className="text-4xl font-bold leading-tight">
              🚀 Nova coaching ponuda za <span className="text-yellow-400">ozbiljne resellere</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              <strong>
                Ekipa, posljednjih mjeseci dobivam puno poruka od vas koji želite više - više prodaje, bolji branding, pristup boljim dobavljačima i konkretnu podršku.
                <br /><br />
                Zato sam otvorio Coaching Program, moj najkompletniji program do sada.
              </strong>
            </p>

          <Link
          href="#"
          onClick={handleButtonClick}
          className="w-fit mt-8 flex flex-row items-center justify-start gap-2 px-10 py-5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          <Rocket className="text-orange-900"/>
          Prijavi se sada
        </Link>

        <p className="text-sm mt-4 text-white/70 flex flex-row items-center justify-start gap-2">
          <AlertTriangle className="text-red-400"/>
          Primam još samo 2 osobe za coaching program
        </p>


          </div>

          {/* MOCKUP IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[330px] h-[420px]">
              <Image
                src="/images/discord_pro.png"
                alt="Program mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>

        {/* ========================= */}
        {/* PROGRAM INCLUDES GRID */}
        {/* ========================= */}

       <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-6">Program uključuje:</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`p-5 ${item.bgClass} border border-white/10 rounded-2xl flex flex-col items-center justify-start gap-3`}
            >
              <item.icon className={`w-5 h-5 mt-1 ${item.iconClass}`} />
              <p className="text-white/85 text-center text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>


        {/* Divider */}
        <div className="my-20 h-px w-full bg-white/10" />

        {/* ========================= */}
        {/* ACCORDION ZA SVE MODULE */}
        {/* ========================= */}

        <h3 className="text-3xl font-bold mb-10">Moduli Programa</h3>

        <div className="space-y-4 mb-28">
          {accordionData.map((section, index) => (
            <details
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <summary className="flex justify-between cursor-pointer list-none text-lg font-semibold">
                {section.title}
                <span className="text-white/60 transition group-open:rotate-180">▾</span>
              </summary>

              <div className="mt-4 text-sm text-white/90 leading-relaxed">
                {section.content}
              </div>
            </details>
          ))}
        </div>

        {/* ========================= */}
        {/* DROPSHIPPING SISTEM - CARD */}
        {/* ========================= */}

        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-yellow-300 mb-3">
            OFICIJALNA PONUDA COACHING PROGRAMA bazirana na “DROPSHIPPING SISTEMU”
          </h3>

          <p className="text-lg font-semibold mb-6">
            Ti se fokusiraš na prodaju. <br /> Mi radimo sve ostalo.
          </p>

          <p className="text-white/90 mb-10 leading-relaxed">
            Ovaj program je za ljude koji žele ući u reselling bez rizika, bez početnog kapitala i bez tjelesnog kontakta s robom.
          </p>

          {/* GRID BLOKOVI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <InfoCard
              icon={Boxes}
              title="Izvor robe / dobavljača"
              items={[
                "provjerena roba",
                "stabilna opskrba",
                "bez naručivanja unaprijed",
                "bez blokiranog kapitala",
              ]}
            />
            <InfoCard
              icon={ShoppingBag}
              title="Fulfillment backend"
              items={[
                "kupac naruči od tebe",
                "ti pošalješ podatke",
                "mi šaljemo robu kupcu",
                "ti nikad ne vidiš robu",
              ]}
            />
            <InfoCard
              icon={Star}
              title="Marketing pomoć"
              items={[
                "ideje za content",
                "viral hook strukture",
                "savjeti za objave & konverzije",
              ]}
            />
            <InfoCard
              icon={Sparkles}
              title="Tvoj profit"
              items={[
                "PROFIT = prodajna cijena - (nabavna + fee)",
                "Patike: 45€",
                "AirPods: 22€",
                "Parfemi: 32€",
              ]}
            />
          </div>

          {/* POSLOVI GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={Megaphone}
              title="Tvoj posao:"
              items={[
                "objave na društvenim mrežama",
                "komunikacija s kupcima",
                "slanje narudžbi nama",
              ]}
            />
            <InfoCard
              icon={Box}
              title="Naš posao:"
              items={[
                "roba",
                "paketi",
                "logistika",
                "slanje kupcu",
                "backend",
              ]}
            />
           
          </div>
        </div>

          <Link
          href="#"
          onClick={handleButtonClick}
          className="w-fit mt-8 flex flex-row items-center justify-start gap-2 px-10 py-5 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          <Rocket className="text-orange-900"/>
          Prijavi se sada
        </Link>

        <p className="text-sm mt-4 text-white/70 flex flex-row items-center justify-start gap-2">
          <AlertTriangle className="text-red-400"/>
          Primam još samo 2 osobe za coaching program
        </p>

<Popup
  open={open}
  onClose={() => setOpen(false)}
  modal
  nested
  closeOnDocumentClick
>
{(close) => (
    <div className="w-[92vw] max-w-md rounded-2xl bg-[#111] border border-white/10 p-6 shadow-2xl
                    animate-in fade-in zoom-in duration-200 font-inter">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-white">Prijava za Coaching program</h4>
        <button
          onClick={close}
          className="text-white/60 hover:text-white text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-white w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400 transition"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-white w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400 transition"
        />

        {msg && <p className="text-sm text-white/80">{msg}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold
                     hover:bg-yellow-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Šaljem..." : "Pošalji prijavu"}
        </button>
      </form>
    </div>
  )}
</Popup>

      </div>
    </section>
  );
}



function InfoCard({ icon: Icon, title, items }) {
  return (
    <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-yellow-300" />
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================== */
/* ACCORDION DATA */
/* ============================================== */

const accordionData = [
  {
    title: "1️⃣ EU NOVI DOBAVLJAČ - pristup provjerenom dobavljaču",
    content: "Direktan pristup EU dobavljaču s kojim možeš raditi odmah. Veliki izbor patika, odjeće i raznih stvari u ponudi s dostavom od 3 radna dana (naručis u ponedjeljak -> kod tebe je paket u četvrtak / petak). Cijene patika se kreću oko 25-35e + dostava 25 (bez obzira na količinu, na više stvari ispadne manja dostava). Upute za naručivanje, komunikaciju i izgradnju dugoročne suradnje."
  },
{
  title: "2️⃣ VIDEO LEKCIJE - kompletan trening za reselling",
  content: (
    <>
      <ol>
        <li>1. UVOD</li>
        <li>2. ŠTO JE RESELLING</li>
        <li>3. S ČIME DA KRENEM – PRVA NARUDZBA?</li>
        <li>4. UPOZNAJ SE SA SERVEROM</li>
        <li>5. BALKANSKI I STRANI DOBAVLJAČI RAZLIKA</li>
        <li>6. MOTIVACIJA PRIJE POCETKA</li>
        <li>7. STRANI DOBAVLJACI</li>
        <li>8. KAKO DOCI DO JEFTINIJE DOSTAVE</li>
        <li>9. KAKO DA NADEM LINK KOJI MI TREBA</li>
        <li>10. BALKANSKI DOBAVLJACI</li>
        <li>11. NAPRAVI PLAN RADA</li>
        <li>12. ANALIŽA TRŽIŠTA – KAKO ODREDITI CIJENE</li>
        <li>13. GDJE OBJAVITI I KAKO</li>
        <li>14. KAKO POSLATI PAKET</li>
        <li>15. KAKO DA PRODAJEM STVARI</li>
        <li>16. UZIVO MEET UP</li>
        <li>17. KAKO IZABRATI IME ZA STRANICU</li>
        <li>18. KAKO NAPRAVITI LOGO ZA STRANICU</li>
        <li>19. KAKO NAPRAVITI HIGHLIGHTSE</li>
        <li>20. KAKO NAPRAVITI OBJAVE</li>
        <li>21. KAKO NAPRAVITI OPIS ZA STRANICU</li>
        <li>22. KAKO NAPRAVITI STRANICU – PRIMJER</li>
        <li>23. KOJE ALATE KORISTITI I KONTENT</li>
        <li>24. KREIRANJE SADRŽAJA – TIKTOK - HOOK</li>
        <li>25. RECENZIJE KLIJENATA</li>
        <li>26. ANGAŽMAN FOLLOWERA</li>
        <li>27. FOLLOW UP</li>
        <li>28. REINVESTIRAJTE</li>
        <li>29. INSTAGRAM ADS</li>
        <li>30. TIKTOK ADS</li>
        <li>31. GLAVNO - KONZISTENTNOST</li>
        <li>32. BRAND</li>
        <li>33. FACELESS KONTENT</li>
        <li>34. FACE KONTENT</li>
        <li>35. CTA</li>


      </ol>
    </>
  )
},

  {
    title: "3️⃣ BRANDING MODUL - profesionalan identitet",
    content: "U ovom modulu naučit ćeš kako odabrati boje brenda, postaviti recenzije, organizirati highlights, napisati savršen Instagram opis, odabrati idealno korisničko ime te postaviti logo i izgraditi vizualnu komunikaciju koja tvom profilu daje profesionalan i ozbiljan identitet.",
  },
  {
    title: "4️⃣ MARKETING MODUL - strategije za prodaju",
    content: "U ovom modulu dobivaš hookove koji privlače pažnju, strategije za povećanje povjerenja kupaca, načine za veću prodaju iz storija i više DM upita, rješenja za slab engagement, metode rasta na TikToku bez pokazivanja lica, smjernice za istraživanje i planiranje sadržaja te korake za postizanje vrhunskih Instagram rezultata.",
  },
  {
    title: "5️⃣ CONTENT BANK - gotovi predlošci",
    content: "U ovom modulu dobivaš gotove postove, story ideje, hookove, primjere objava koje već dokazano rade te IG predloške koje možeš odmah prilagoditi svom stilu - sav sadržaj je spreman za trenutnu upotrebu.",
  },
  {
    title: "6️⃣ PRICE STRATEGY + PROFIT TRACKER",
    content: "Marže, profit, automatski excel tracker…",
  },
  {
    title: "7️⃣ PSIHOLOGIJA PRODAJE",
    content: "Odlučivanje kupaca, povjerenje, autoritet…",
  },
  {
    title: "8️⃣ DM CLOSING SKRIPTE + OBJECTION HANDLING",
    content: "Svi skripti za zatvaranje prodaje → testirani i provjereni.",
  },
  {
    title: "9️⃣ OUTREACH PORUKE",
    content: "Gotovi openeri za konverzacije za kupce patika, parfema, satova...",
  },
  {
    title: "🔟 AFTER-SALE SKRIPTE",
    content: "Recenzije, ponovna kupnja, odnos s kupcima…",
  },
  {
    title: "1️⃣1️⃣ COMMUNITY + PODRŠKA",
    content: "Premium grupa, Q&A, primjeri drugih članova...",
  },
  {
    title: "💥 BONUS - 2 live poziva svaki tjedan !",
    content: "Pozivi kako bi ostao u toku i otkrio nove stvari, kao i rešio sve svoje probleme.",
  },
];
