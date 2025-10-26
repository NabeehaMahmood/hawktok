import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReferencesSection from "@/components/ReferencesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import SmoothPageTransition from "@/components/SmoothPageTransition";
import ScrollReveal from "@/components/ScrollReveal";
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
    <div className="min-h-screen flex flex-col">
      <SmoothPageTransition />
      <Header transparent={!isScrolled} />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <ShowcaseSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
