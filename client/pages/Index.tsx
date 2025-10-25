import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReferencesSection from "@/components/ReferencesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import { useEffect, useState } from "react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header transparent={!isScrolled} />

      <main className="flex-grow">
        <HeroSection />
        <div className="opacity-0 animate-fade-in">
          <ServicesSection />
        </div>
        <div className="opacity-0 animate-fade-in">
          <AboutSection />
        </div>
        <div className="opacity-0 animate-fade-in">
          <ReferencesSection />
        </div>
        <div className="opacity-0 animate-fade-in">
          <TeamSection />
        </div>
        <div className="opacity-0 animate-fade-in">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
