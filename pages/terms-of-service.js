// pages/terms-of-service.js
import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - ResellerBalkan</title>
        <meta name="description" content="Terms of Service za ResellerBalkan" />
      </Head>
      <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">
            Poslednje ažuriranje: {new Date().toLocaleDateString("sr-RS")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Prihvatanje uslova</h2>
            <p className="text-gray-300 leading-relaxed">
              Pristupanjem i korišćenjem ResellerBalkan veb stranice, prihvatate i
              slažete se da budete obavezani ovim Terms of Service. Ako se ne slažete
              sa bilo kojim delom ovih uslova, ne smete koristiti našu veb stranicu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Usluge</h2>
            <p className="text-gray-300 leading-relaxed">
              ResellerBalkan pruža usluge reselling-a sneakersa, streetwear odeće i
              Limited Edition proizvoda. Nudimo različite pakete obuke, resursе i
              podršku našim članovima.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Registracija i nalog
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prilikom registracije, slažete se da:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Pružite tačne i potpune informacije</li>
              <li>Održavate tačnost svojih informacija</li>
              <li>Štitite svoju lozinku i pristupne podatke</li>
              <li>Obavestite nas o bilo kakvom neovlašćenom korišćenju naloga</li>
              <li>
                Prihvatate odgovornost za sve aktivnosti koje se dese preko vašeg
                naloga
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Plaćanja i naplate</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sva plaćanja se procesuiraju preko Stripe platforme. Slažete se da:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Pružite validne i tačne informacije o plaćanju</li>
              <li>
                Plaćate sve naknade koje nastanu korišćenjem naših usluga
              </li>
              <li>
                Razumete da su sva plaćanja konačna i ne podležu refundaciji osim
                ako nije drugačije navedeno
              </li>
              <li>Prihvatate da cene mogu biti podložne promenama</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Politika refundacije</h2>
            <p className="text-gray-300 leading-relaxed">
              Opšte pravilo: sve kupovine su konačne. Refundacija se može odobriti
              samo u specifičnim slučajevima i na osnovu naše diskrecije. Za zahteve
              za refundaciju, kontaktirajte nas putem email-a sa detaljnim
              objašnjenjem.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intelektualna svojina</h2>
            <p className="text-gray-300 leading-relaxed">
              Sav sadržaj na ResellerBalkan veb stranici, uključujući tekstove,
              grafiku, logotipe, slike, video snimke i softver, je vlasništvo
              ResellerBalkan i zaštićeno je zakonima o autorskim pravima. Zabranjeno
              je kopiranje, distribucija ili korišćenje našeg sadržaja bez pisane
              dozvole.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Zabranjena upotreba</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zabranjeno je koristiti našu veb stranicu na bilo koji način koji:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Krši bilo kakve lokalne, državne ili međunarodne zakone</li>
              <li>Ugrožava prava drugih korisnika</li>
              <li>Šalje spam ili neovlašćene marketing poruke</li>
              <li>Pokušava da hakuje ili naruši sigurnost veb stranice</li>
              <li>Deli ili preprodaje pristup bez dozvole</li>
              <li>Koristi botove ili automatizovane sisteme bez dozvole</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Odricanje garancije</h2>
            <p className="text-gray-300 leading-relaxed">
              ResellerBalkan usluge se pružaju "kao takve" bez garancije bilo koje
              vrste. Ne garantujemo da će usluge biti neprekidne, bezbedne ili bez
              grešaka. Ne garantujemo specifične rezultate ili profit od korišćenja
              naših resursa i obuka.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Ograničenje odgovornosti
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ResellerBalkan neće biti odgovoran za bilo kakvu direktnu, indirektnu,
              slučajnu ili posledičnu štetu koja proizilazi iz korišćenja ili
              nemogućnosti korišćenja naših usluga.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Izmene uslova</h2>
            <p className="text-gray-300 leading-relaxed">
              Zadržavamo pravo da izmenimo ove Terms of Service u bilo kom trenutku.
              Promene stupaju na snagu odmah nakon objavljivanja. Vaša kontinuirana
              upotreba sajta nakon promena znači da prihvatate nove uslove.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Gašenje naloga</h2>
            <p className="text-gray-300 leading-relaxed">
              Zadržavamo pravo da suspendujemo ili ugasimo vaš nalog u bilo kom
              trenutku, bez prethodne najave, ako smatramo da ste prekršili ove
              uslove ili ako vaše ponašanje šteti našem poslovanju ili drugim
              korisnicima.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Primenjivi zakoni</h2>
            <p className="text-gray-300 leading-relaxed">
              Ovi Terms of Service će biti regulisani zakonima Republike Srbije.
              Svi sporovi će se rešavati u nadležnim sudovima u Srbiji.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Kontakt informacije</h2>
            <p className="text-gray-300 leading-relaxed">
              Za pitanja ili brige u vezi sa ovim Terms of Service, kontaktirajte
              nas:
            </p>
            <ul className="list-none text-gray-300 space-y-2 mt-4">
              <li>Email: marko.radovic2904@gmail.com</li>
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/resellerbalkan2/"
                  className="text-yellow-400 hover:underline"
                >
                  @resellerbalkan2
                </a>
              </li>
              <li>
                Discord:{" "}
                <a
                  href="https://discord.com/invite/NktWQZPhMS"
                  className="text-yellow-400 hover:underline"
                >
                  ResellerBalkan Server
                </a>
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <a
              href="/"
              className="text-yellow-400 hover:underline font-medium"
            >
              ← Nazad na početnu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
