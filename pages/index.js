import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/HowItWorks";
import OfferPremium from "../components/OfferPremium";
import OfferCoaching from "../components/OfferCoaching";
import OfferVendor from "../components/OfferVendor";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";




export default function Home() {
const handleClick = async (packageName) => {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ package: packageName }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("❌ Nema URL u odgovoru:", data);
      alert("Došlo je do greške pri otvaranju Stripe Checkout-a.");
    }
  } catch (err) {
    console.error("❌ Greška u handleClick:", err);
    alert("Greška pri povezivanju sa serverom.");
  }
};




return (
   <div className="bg-[#121212] text-white min-h-screen">

      <Preloader />

      
      {/* Navigation */}
      <Navigation/>

      {/* Hero section */}
      <HeroSection/>

      {/* Info bar */}
      <InfoBar/>

      {/* About */}
      <AboutSection/>

      {/* How it works? */}
      <HowItWorks/>

      {/* Discord premium */}
      <OfferPremium handleClick={handleClick} />

      {/* 1 on 1 Coaching */}
      <OfferCoaching handleClick={handleClick} />

      {/* Vendori */}
      <OfferVendor handleClick={handleClick} />

      {/* Reviews */}
      <ReviewsSection/>

      {/* FAQ */}
      <FaqSection/>

      {/* CTA */}
      <CtaSection/>

      {/* Footer */}
      <Footer/>

    
    </div>
  );
}
