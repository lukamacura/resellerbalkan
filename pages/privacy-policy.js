// pages/privacy-policy.js
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ResellerBalkan</title>
        <meta name="description" content="Privacy Policy za ResellerBalkan" />
      </Head>
      <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">
            Poslednje ažuriranje: {new Date().toLocaleDateString("sr-RS")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Uvod</h2>
            <p className="text-gray-300 leading-relaxed">
              ResellerBalkan ("mi", "nas", "naš") poštuje vašu privatnost i posvećen je
              zaštiti vaših ličnih podataka. Ova Privacy Policy objašnjava kako
              prikupljamo, koristimo i štitimo vaše informacije kada koristite našu
              veb stranicu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Informacije koje prikupljamo
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Možemo prikupljati sledeće vrste informacija:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Ime i prezime</li>
              <li>Email adresa</li>
              <li>Discord korisničko ime</li>
              <li>Informacije o plaćanju (procesuirane preko Stripe-a)</li>
              <li>Tehnički podaci (IP adresa, tip browsera, operativni sistem)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Kako koristimo vaše informacije
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vaše informacije koristimo za sledeće svrhe:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Procesiranje vaših narudžbina i plaćanja</li>
              <li>Slanje informacija o proizvodima i uslugama</li>
              <li>Poboljšanje našeg sajta i usluga</li>
              <li>Komunikacija sa vama putem email-a ili Discord-a</li>
              <li>Prevencija prevara i sigurnost</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Zaštita podataka</h2>
            <p className="text-gray-300 leading-relaxed">
              Preduzimamo odgovarajuće mere sigurnosti kako bismo zaštitili vaše
              lične podatke od neovlašćenog pristupa, izmene ili otkrivanja.
              Koristimo Stripe za procesiranje plaćanja, što znači da mi direktno ne
              skladištimo informacije o vašim kreditnim karticama.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Deljenje informacija sa trećim stranama
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ne prodajemo, ne razmenemo niti iznajmljujemo vaše lične informacije
              trećim stranama. Možemo podeliti vaše informacije samo sa pouzdanim
              pružaocima usluga koji nam pomažu u poslovanju (kao što je Stripe za
              procesiranje plaćanja).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Kolačići (Cookies)</h2>
            <p className="text-gray-300 leading-relaxed">
              Naša veb stranica može koristiti kolačiće kako bi poboljšala korisničko
              iskustvo. Možete podesiti vaš browser da odbije sve kolačiće ili da vas
              obavesti kada se kolačić šalje.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Vaša prava</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Imate pravo da:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Pristupite svojim ličnim podacima</li>
              <li>Zatražite ispravku netačnih podataka</li>
              <li>Zatražite brisanje svojih podataka</li>
              <li>Povučete svoj pristanak za obradu podataka</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Promene Privacy Policy-ja
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Zadržavamo pravo da ažuriramo ovu Privacy Policy u bilo kom trenutku.
              Promene će biti objavljene na ovoj stranici sa novim datumom ažuriranja.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Kontakt</h2>
            <p className="text-gray-300 leading-relaxed">
              Ako imate bilo kakvih pitanja o ovoj Privacy Policy, možete nas
              kontaktirati putem:
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
