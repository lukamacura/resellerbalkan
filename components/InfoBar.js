
export default function InfoBar() {
  return(
<section className="bg-[#181818] py-8 border-t border-[#424242]">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-urbanist">
    
    <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
      <img src="/icons/h1.png" className="mx-auto w-[48px] mb-3" alt="check icon" />
      <p className="text-lg text-white">Provjeren sustav za online zaradu</p>
    </div>

    <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
      <img src="/icons/h2.png" className="mx-auto w-[48px] mb-3" alt="rocket icon" />
      <p className="text-lg text-white">Brzi početak odmah nakon ulaska u program</p>
    </div>

    <div className="md:border-r border-solid border-[#424242] md:last:border-r-0 px-4">
      <img src="/icons/h3.png" className="mx-auto w-[48px] mb-3" alt="headset icon" />
      <p className="text-lg text-white">Podrška i zajednica</p>
    </div>

    <div className="px-4">
      <img src="/icons/h4.png" className="mx-auto w-[48px] mb-3" alt="chart icon" />
      <p className="text-lg text-white">Dokazani rezultati</p>
    </div>

  </div>
</section>

  );

}