// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-12 px-6 md:px-24 font-inter border-t border-[#333]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo & Ikonice */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:col-span-1">
          <Image
                src="/images/logo.PNG"
                alt="Reseller Balkan Logo"
                width={140}
                height={60}
                />
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/resellerbalkan2/">
              <img src="/icons/footer1.png" alt="Instagram" className="w-7" />
            </a>
            <a href="mailto:marko.radovic2904@gmail.com">
              <img src="/icons/footer2.png" alt="Email" className="w-7" />
            </a>
            <a href="https://discord.com/invite/NktWQZPhMS?fbclid=PAZXh0bgNhZW0CMTEAAad4LY9mUR7_eXOWHSPmgnnvoxBAWKZp-MST4YKHm_0AOT70E8ah1eRJP3NMow_aem_TMoANqY7bNp6pBatl34bSA">
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
              <a href="#faq" className="hover:text-yellow-400">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center md:col-span-3 text-sm text-gray-400 mt-8">
          © 2025 ResellerBalkan. Sva prava zadržana. <br />
          Developed by{" "}
          <a
            href="https://www.macura-design.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors duration-200"
          >
            Macura Design
          </a>
        </div>

      </div>
    </footer>
  );
}