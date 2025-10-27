export default function ReferencesSection() {
  const clients = [
    "HMBS",
    "Schöneich & Englbrecht",
  ];

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

        {/* Client Logos Grid */}
        <style>{`
          .gradient-border {
            background: linear-gradient(135deg, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%);
            padding: 3px;
            border-radius: 8px;
          }
          .gradient-border > div {
            background: white;
            border-radius: 6px;
            padding: 24px;
            height: 100%;
          }
        `}</style>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="gradient-border">
              <div>
                <p className="text-gray-800 font-semibold text-center text-base">
                  {client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
