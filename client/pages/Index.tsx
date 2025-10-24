import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReferencesSection from "@/components/ReferencesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header transparent={true} />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
