export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white font-inter px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">❌ Uplata otkazana</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Izgleda da je plaćanje prekinuto ili nije uspelo. Možeš pokušati ponovo ili nas kontaktirati ako imaš problem.
      </p>
      <a
        href="/"
        className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Vrati se na početnu
      </a>
    </div>
  );
}
