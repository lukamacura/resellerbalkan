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
  const handleClick = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ package: "vendor" }), // npr. vendor paket
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirekcija na Stripe Checkout
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
      <OfferPremium/>

      {/* 1 on 1 Coaching */}
      <OfferCoaching/>

      {/* Vendori */}
      <OfferVendor/>

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
