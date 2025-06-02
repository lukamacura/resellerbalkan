// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-12 px-6 md:px-24 font-inter border-t border-[#333]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo & Ikonice */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:col-span-1">
          <Image
                src="/images/logo.png"
                alt="Reseller Balkan Logo"
                width={140}
                height={60}
                />
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">
              <img src="/icons/footer1.png" alt="Instagram" className="w-7" />
            </a>
            <a href="#">
              <img src="/icons/footer2.png" alt="Email" className="w-7" />
            </a>
            <a href="#">
              <img src="/icons/footer3.png" alt="Discord" className="w-7" />
            </a>
          </div>
        </div>

        {/* Navigacija */}
        <div className="text-center md:text-right md:col-span-1">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end gap-4 font-light">
            <li>
              <a href="#" className="border-b border-yellow-400 hover:text-yellow-400">Početna</a>
            </li>
            <li>
              <a href="#ponuda" className="hover:text-yellow-400">Ponuda</a>
            </li>
            <li>
              <a href="#recenzije" className="hover:text-yellow-400">Recenzije</a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-yellow-400">Kontakt</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center md:col-span-3 text-sm text-gray-400 mt-8">
          © 2025 ResellerBalkan. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}