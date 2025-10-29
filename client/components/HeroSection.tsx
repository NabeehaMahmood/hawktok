import TextReveal from "@/components/TextReveal";


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-visible pt-32"
    >
      

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* HAWKTOK Logo Image */}
        <div className="-mt-14 mb-6 flex justify-center items-center">
          <div className="relative group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-8 bg-white/0 group-hover:bg-white/40 blur-2xl rounded-full transition-all duration-500 ease-out scale-75 group-hover:scale-100" />
            <img
              src="/HAWKTOK-logo.svg"
              alt="HAWKTOK Logo"
              className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Subtitle quote */}
        <div className="mt-0 mb-12 max-w-2xl text-center px-6">
          <TextReveal
            className="text-white text-xl md:text-2xl font-light tracking-wide"
            delay={50}
            speed={35}
          >
            PEOPLE LOVE INFLUENCE AND WE KNOW HOW MAKE DTC BRANDS A INFLUENCER ON
            TIKTOK SHOP Let's Make $100k in 4 Months
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
