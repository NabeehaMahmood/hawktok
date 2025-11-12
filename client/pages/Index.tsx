import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ContactSection from "@/components/ContactSection";
import { useEffect, useState } from "react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import FounderSection from "@/components/FounderSection";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <AnimatedDottedBackground />
      <Header transparent={!isScrolled} />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BrandsSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <FounderSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
