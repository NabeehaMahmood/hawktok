export default function ReferencesSection() {
  return (
    <section id="references" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 600 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="References"
            >
              <defs>
                <linearGradient id="referencesGradient" gradientUnits="userSpaceOnUse" x1="0" x2="600" y1="0" y2="0">
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
                x="300"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="inherit"
                fill="url(#referencesGradient)"
                className="font-heading"
              >
                References
              </text>
            </svg>
          </div>
        </div>

        {/* Gradient Border Style */}
        <style>{`
          .gradient-border {
            background: linear-gradient(135deg, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%);
            padding: 3px;
            border-radius: 12px;
          }
          .gradient-border-inner {
            background: #FFFFFF;
            border-radius: 10px;
            padding: 32px;
            height: 100%;
          }
        `}</style>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="gradient-border">
            <div className="gradient-border-inner text-center md:text-left">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(90deg, #FF0050 0%, #FF1A66 25%, #EE2A7B 50%, #FF1A66 75%, #FF0050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                How We Hunt for DTC Brands
              </h3>
              <p className="text-black text-lg leading-relaxed">
                At HawkTok, we don't chase trends — we hunt for opportunities. We help 
                DTC brands lock onto their target market with precision, crafting offers, 
                content, and positioning that strike exactly where the buyer feels it. From 
                storytelling and creative strategy to affiliate scaling and paid growth, every 
                move is calculated, every decision intentional. The result? Brands that don't 
                just sell — they dominate their category.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="gradient-border">
            <div className="gradient-border-inner text-center md:text-left">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(90deg, #FF0050 0%, #FF1A66 25%, #EE2A7B 50%, #FF1A66 75%, #FF0050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                How We Elevate Individual Sellers
              </h3>
              <p className="text-black text-lg leading-relaxed">
                We help individual sellers think and move like hawks — focused, fast, and 
                fearless. Starting from product validation and niche positioning to TikTok 
                content and affiliate growth, we shape sellers into brand leaders. Our 
                system turns impulse-driven shoppers into loyal customers by blending 
                emotion, psychology, and sharp marketing instincts. You don't just list 
                products — you launch with precision and scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
