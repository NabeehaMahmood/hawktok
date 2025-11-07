import AnimatedDottedBackground from "./AnimatedDottedBackground";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative py-16 md:py-32 px-4 md:px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      <AnimatedDottedBackground particleCount={150} />
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Title */}
  <div className="text-center mb-0">
          <div className="flex justify-center mb-6">
            <svg
              viewBox="0 0 900 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Founder"
            >
              <defs>
                <linearGradient
                  id="founderGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="900"
                  y1="0"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#FF0050" />
                  <stop offset="14%" stopColor="#FF1A66" />
                  <stop offset="28%" stopColor="#EE2A7B" />
                  <stop offset="42%" stopColor="#69C9D0" />
                  <stop offset="57%" stopColor="#00F2EA" />
                  <stop offset="71%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0099FF" />
                </linearGradient>
              </defs>
              <text
                x="450"
                y="80"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="'Signord', sans-serif"
                fill="url(#founderGradient)"
                className="font-heading font-signord"
              >
                Founder
              </text>
            </svg>
          </div>
        </div>

        {/* Founder Content */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-6">
            {/* Image first on mobile */}
            <div className="relative w-full h-[400px]">
              <img 
                src="/founder-pic.svg"
                alt="Syed Ali Hussain (HAWK)"
                className="w-full h-full object-contain object-center"
              />
            </div>
            
            {/* Text below image on mobile */}
            <div className="space-y-4 px-2">
              <div>
                <h3 className="gradient-heading font-bold text-3xl font-heading mb-2">
                  Syed Ali Hussain (HAWK)
                </h3>
                <p className="text-base text-gray-200 mb-4">
                  Founder & Strategic Lead at HawkTok
                </p>
              </div>

              <blockquote className="text-sm italic text-gray-300 border-l-4 border-[#FF0050] pl-4 mb-4">
                "They call him HAWK because he knows what to hunt, who to hunt, and when to soar."
              </blockquote>

              <div className="space-y-3 text-gray-200 leading-relaxed text-xs">
                <p>
                  With over 6 years in product hunting and 5 years mastering brand building, Hawk has 
                  helped DTC brands evolve from obscurity to $100K+ in under 120 days.
                </p>
                
                <p>
                  Starting his journey in Amazon Private Label, he mastered sourcing, branding, and 
                  category domination — before moving into TikTok Shop, where influence meets commerce.
                </p>
                
                <p>
                  At HawkTok, he leads with strategy, not guesswork. His methods merge psychology, 
                  positioning, storytelling, and affiliate ecosystems — crafting brands that don't follow the 
                  algorithm, they drive it.
                </p>
                
                <div className="pt-3">
                  <p className="font-semibold text-base gradient-heading mb-2">Vision:</p>
                  <p className="text-gray-200">
                    To turn every ambitious founder into a brand that dominates their 
                    category — not just by selling, but by shaping culture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Overlay (md and up) */}
          <div className="hidden md:block relative w-full h-[600px] lg:h-[700px] xl:h-[800px]">
            <img 
              src="/founder-pic.svg"
              alt="Syed Ali Hussain (HAWK)"
              className="w-full h-full object-contain md:object-[120%_center] lg:object-[110%_center] xl:object-right"
            />
            
            {/* Text Overlay on Left Side - Extended Width */}
            <div className="absolute left-0 md:top-16 lg:top-0 h-full w-[65%] lg:w-[65%] flex flex-col justify-center p-8 lg:pl-12 lg:pr-4">
              <div className="space-y-4 md:space-y-5">
                <div>
                  <h3 className="gradient-heading font-bold text-4xl lg:text-5xl xl:text-6xl font-heading mb-2">
                    Syed Ali Hussain (HAWK)
                  </h3>
                  <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 mb-4">
                    Founder & Strategic Lead at HawkTok
                  </p>
                </div>

                <blockquote className="text-base lg:text-lg xl:text-xl italic text-gray-300 border-l-4 border-[#FF0050] pl-4 mb-4">
                  "They call him HAWK because he knows what to hunt, who to hunt, and when to soar."
                </blockquote>

                <div className="space-y-3 md:space-y-4 text-gray-200 leading-relaxed text-sm lg:text-base xl:text-lg">
                  <p>
                    With over 6 years in product hunting and 5 years mastering brand building, Hawk has 
                    helped DTC brands evolve from obscurity to $100K+ in under 120 days.
                  </p>
                  
                  <p>
                    Starting his journey in Amazon Private Label, he mastered sourcing, branding, and 
                    category domination — before moving into TikTok Shop, where influence meets commerce.
                  </p>
                  
                  <p>
                    At HawkTok, he leads with strategy, not guesswork. His methods merge psychology, 
                    positioning, storytelling, and affiliate ecosystems — crafting brands that don't follow the 
                    algorithm, they drive it.
                  </p>
                  
                  <div className="pt-3">
                    <p className="font-semibold text-lg lg:text-xl xl:text-2xl gradient-heading mb-2">Vision:</p>
                    <p className="text-gray-200">
                      To turn every ambitious founder into a brand that dominates their 
                      category — not just by selling, but by shaping culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
