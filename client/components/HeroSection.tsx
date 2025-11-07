import TextReveal from "@/components/TextReveal";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-6"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-4 md:-mt-18 max-w-4xl mx-auto">
        {/* HAWKTOK Logo Image */}
        <div className="mb-4">
            <div className="relative group w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
              {/* White hover effect background */}
              <div className="absolute left-1/2 top-1/2 w-2/3 h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 group-hover:opacity-90 group-hover:blur-2xl transition-all duration-300 pointer-events-none" />
              <img
                src="/HAWKTOK-logo.svg"
                alt="HAWKTOK Logo"
                className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
        </div>

        {/* Title */}
  <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            WE TURN DTC BRANDS
          <br />
            INTO INFLUENCERS.
  
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-gray-300 max-w-md mx-auto mb-8 px-4">
          And make them generate $100k in 4 months.
        </p>        {/* CTA Button */}
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
