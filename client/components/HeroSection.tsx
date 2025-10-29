import TextReveal from "@/components/TextReveal";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-18">
        {/* HAWKTOK Logo Image */}
        <div className="mb-4">
          <div className="relative group w-96 h-96 md:w-90 md:h-90 mx-auto">
            <img
              src="/HAWKTOK-logo.svg"
              alt="HAWKTOK Logo"
              className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            WE TURN DTC BRANDS
          <br />
            INTO INFLUENCERS.
  
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto mb-8">
          And make them generate $100k in 4 months.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="text-white font-bold text-lg py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300"
          style={{
            background:
              "linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)",
          }}
        >
          Let's Build Your Brand
        </Button>
      </div>
    </section>
  );
}
