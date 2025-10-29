import AnimatedDottedBackground from "./AnimatedDottedBackground";

export default function TeamSection() {
  return (
    <section
      id="founder"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      <AnimatedDottedBackground particleCount={150} />
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <svg
              viewBox="0 0 400 100"
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
                  x2="400"
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
                x="200"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="inherit"
                fill="url(#founderGradient)"
                className="font-heading"
              >
                Founder
              </text>
            </svg>
          </div>
        </div>

        {/* Founder Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Large Founder Image */}
          <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
            <img 
              src="/founder-pic.svg"
              alt="Syed Ali Hussain (HAWK)"
              className="w-full h-full object-contain object-right"
            />
            
            {/* Text Overlay on Left Side - Extended Width */}
            <div className="absolute left-0 top-0 h-full w-full md:w-[75%] lg:w-[65%] flex flex-col justify-center p-6 md:p-8 lg:pl-12 lg:pr-4">
              <div className="space-y-4 md:space-y-5">
                <div>
                  <h3 className="gradient-heading font-bold text-4xl md:text-5xl lg:text-6xl font-heading mb-2">
                    Syed Ali Hussain (HAWK)
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4">
                    Founder & Strategic Lead at HawkTok
                  </p>
                </div>

                <blockquote className="text-base md:text-lg lg:text-xl italic text-gray-300 border-l-4 border-[#FF0050] pl-4 mb-4">
                  "They call him HAWK because he knows what to hunt, who to hunt, and when to soar."
                </blockquote>

                <div className="space-y-3 md:space-y-4 text-gray-200 leading-relaxed text-sm md:text-base lg:text-lg">
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
                    <p className="font-semibold text-lg md:text-xl lg:text-2xl gradient-heading mb-2">Vision:</p>
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
