"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PrijavaUspesnaPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-4 font-inter">
      <div className="w-full max-w-md text-center bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
        
        <div className="flex justify-center mb-5">
          <CheckCircle className="w-14 h-14 text-yellow-400" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Prijava je uspješna
        </h1>

        <p className="text-white/80 leading-relaxed mb-8">
          Hvala ti! <strong>Mail će ti stići</strong> kroz maksimalno 30min.  
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
          >
            Nazad na početnu
          </Link>

        </div>
      </div>
    </main>
  );
}
