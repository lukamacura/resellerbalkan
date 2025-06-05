export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white font-inter px-6 text-center">
      
      {/* Ikonica sa beskonačnom animacijom */}
      <img
        src="/icons/success.png"
        alt="Uplata uspešna"
        className="w-18 h-18 mb-6 animate-pulse-slow"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-urbanist">
        <span className="bg-gradient-to-r from-[#FFD600] to-[#FF7A00] bg-clip-text text-transparent">
          Uplata uspješna!
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
        Hvala ti na povjerenju 💛<br />
        Sve potrebne informacije stižu ti uskoro na email.
        Dobrodošao u <strong>Reseller Balkan</strong> zajednicu!
      </p>

      <a
        href="/"
        className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow hover:opacity-90 transition"
      >
        Vrati se na početnu
      </a>
    </div>
  );
}
