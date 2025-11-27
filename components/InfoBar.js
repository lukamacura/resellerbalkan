import { CheckCircle2, Rocket, Users, LineChart } from "lucide-react";

export default function InfoBar() {
  return (
    <section className="bg-[#181818] py-8 border-t border-[#424242]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-urbanist">
        
        <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
          <CheckCircle2 className="mx-auto w-10 h-10 mb-3 text-[#FFC839]" />
          <p className="text-lg text-white">
            Stvori stabilan online prihod uz provjeren sistem
          </p>
        </div>

        <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
          <Rocket className="mx-auto w-10 h-10 mb-3 text-[#FFC839]" />
          <p className="text-lg text-white">
            Ostvari prve online uplate u roku od nekoliko dana
          </p>
        </div>

        <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
          <Users className="mx-auto w-10 h-10 mb-3 text-[#FFC839]" />
          <p className="text-lg text-white">
            Uz mentorstvo i zajednicu nikad ne zapinješ sam
          </p>
        </div>

        <div className="px-4">
          <LineChart className="mx-auto w-10 h-10 mb-3 text-[#FFC839]" />
          <p className="text-lg text-white">
            Skaliraj zaradu uz strategije koje koriste naši najuspješniji članovi
          </p>
        </div>

      </div>
    </section>
  );
}
