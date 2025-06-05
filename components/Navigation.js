import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 fixed flex z-50 justify-between font-urbanist items-center px-6 py-3 border-b border-[#424242] bg-[#0f0f0f] text-white">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide flex items-center gap-2">
        <img src="/images/logo.PNG" alt="Reseller Balkan Logo" className="w-[120px]" />
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-yellow-400 text-black p-2 rounded-lg focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <nav className="hidden md:flex space-x-8 text-lg font-light mr-16">
        <a href="#" className="text-white hover:text-yellow-400 border-b-2 border-yellow-400 pb-1">Početna</a>
        <a href="#ponuda" className="hover:text-yellow-400">Ponuda</a>
        <a href="#recenzije" className="hover:text-yellow-400">Recenzije</a>
        <a href="#faq" className="hover:text-yellow-400">FAQ</a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f0f] border-t border-[#424242] flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Početna</a>
          <a href="#ponuda" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Ponuda</a>
          <a href="#recenzije" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Recenzije</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">FAQ</a>
        </div>
      )}
    </header>
  );
}