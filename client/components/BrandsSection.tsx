// Dummy brand data with actual brand names
const brands = [
  "NIKE", "APPLE", "AMAZON", "GOOGLE", "MICROSOFT", "TESLA", 
  "SAMSUNG", "COCA-COLA", "DISNEY", "MCDONALDS", "VISA", "MASTERCARD"
];

export default function BrandsSection() {
  return (
    <section
      id="brands"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 400 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Brands"
            >
              <defs>
                <linearGradient
                  id="brandsGradient"
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
                fill="url(#brandsGradient)"
                className="font-heading"
              >
                Brands
              </text>
            </svg>
          </div>
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            We don't chase trends — we hunt dominance.
          </p>
        </div>


        {/* Gradient Border Style */}
        <style>{`
          .gradient-border {
            background: linear-gradient(135deg, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%);
            padding: 3px;
            border-radius: 12px;
          }
          .gradient-border-inner {
            background: #000000;
            border-radius: 10px;
            padding: 32px;
            height: 100%;
          }
        `}</style>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Column 1 */}
          <div className="gradient-border">
            <div className="gradient-border-inner text-center md:text-left">
              <h3
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, #FF0050 0%, #FF1A66 25%, #EE2A7B 50%, #FF1A66 75%, #FF0050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                How We Hunt for DTC Brands
              </h3>
              <p className="text-white text-lg leading-relaxed">
                At HawkTok, we don't chase trends — we hunt for opportunities.
                We help DTC brands lock onto their target market with precision,
                crafting offers, content, and positioning that strike exactly
                where the buyer feels it. From storytelling and creative
                strategy to affiliate scaling and paid growth, every move is
                calculated, every decision intentional. The result? Brands that
                don't just sell — they dominate their category.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="gradient-border">
            <div className="gradient-border-inner text-center md:text-left">
              <h3
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, #FF0050 0%, #FF1A66 25%, #EE2A7B 50%, #FF1A66 75%, #FF0050 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                How We Elevate Individual Sellers
              </h3>
              <p className="text-white text-lg leading-relaxed">
                We help individual sellers think and move like hawks — focused,
                fast, and fearless. Starting from product validation and niche
                positioning to TikTok content and affiliate growth, we shape
                sellers into brand leaders. Our system turns impulse-driven
                shoppers into loyal customers by blending emotion, psychology,
                and sharp marketing instincts. You don't just list products —
                you launch with precision and scale with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Simple Brand Ticker - Like Footer */}
        <div className="relative overflow-hidden bg-black py-8 border-t border-gray-900">
          <div className="whitespace-nowrap animate-scroll-left inline-block">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="inline-block text-white text-2xl font-bold tracking-widest mr-16"
              >
                {brands.map((brand, index) => (
                  <span key={index} className="mr-16">
                    {brand} •
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}