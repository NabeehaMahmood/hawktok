// Brand logos from public/BRANDS folder
const brandLogos = [
  { name: "TruAge Supplements", src: "/BRANDS/growns.avif", hasWhiteBg: false },
  { name: "Opux Fragrances", src: "/BRANDS/OPUX.webp", hasWhiteBg: false },
  { name: "Haven & Co. Homeware", src: "/BRANDS/PCALM.png", hasWhiteBg: false },
  { name: "DS LAB", src: "/BRANDS/DS.png", hasWhiteBg: false },
  { name: "Enviromedica", src: "/BRANDS/Enviromedica.png", hasWhiteBg: false },
  { name: "dEZI", src: "/BRANDS/dEZI.png", hasWhiteBg: false },
  { name: "Dear Lomum", src: "/BRANDS/dearlomum.avif", hasWhiteBg: false },
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


        {/* Column number badge (blue gradient) and column inner styles */}
        <style>{`
          .column-inner {
            background: #000000;
            border-radius: 10px;
            padding: 32px;
            height: 100%;
          }
          .number-badge {
            font-weight: 800;
            font-size: 2.5rem;
            line-height: 1;
            margin-bottom: 0.5rem;
            background: linear-gradient(90deg, #00D4FF 0%, #0099FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
          @media (min-width: 768px) {
            .number-badge { font-size: 3rem; }
          }
        `}</style>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Column 1 */}
          <div className="rounded-xl">
            <div className="column-inner text-center md:text-left">
              <div className="number-badge">01</div>
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
          <div className="rounded-xl">
            <div className="column-inner text-center md:text-left">
              <div className="number-badge">02</div>
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

      </div>

        {/* Ticker */}
  <div className="relative z-20 mt-32 overflow-hidden bg-black py-[0.25in] border-t border-b border-gray-700">
        <div
          className="whitespace-nowrap animate-scroll-left inline-block"
          style={{ animation: 'scroll-left 20s linear infinite' }}
        >
          {Array.from({ length: 100 }).map((_, i) => {
            const logo = brandLogos[i % brandLogos.length];
            const smallLogos = ["PCALM", "Enviromedica"];
            const isSmall = smallLogos.some((k) => logo.name.includes(k));
            return (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className={`inline-block ${isSmall ? 'h-[0.7in]' : 'h-[1in]'} object-contain mr-16`}
              />
            );
          })}
        </div>
      </div>

      
    </section>
  );
}