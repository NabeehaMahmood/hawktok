export default function ServicesSection() {
  const services = [
    {
      title: "DTC Brands launch",
      description:
        "Launch and scale direct-to-consumer brands with end-to-end growth marketing.",
    },
    {
      title: "Private Label Business",
      description:
        "Build profitable private label products and optimize listings, supply and margins.",
    },
    {
      title: "TikTok Shop Affiliate marketing",
      description:
        "Leverage TikTok Shop and affiliate creators to drive viral commerce and conversions.",
    },
    {
      title: "E-commerce Marketing Strategy",
      description:
        "Full-funnel e-commerce strategies — customer acquisition, retention and growth.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
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
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 500 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Services"
            >
              <defs>
                <linearGradient id="servicesGradient" gradientUnits="userSpaceOnUse" x1="0" x2="500" y1="0" y2="0">
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
                x="250"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="inherit"
                fill="url(#servicesGradient)"
                className="font-heading"
              >
                Services
              </text>
            </svg>
          </div>
        </div>

  {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group gradient-border">
              <div>
                <div className="flex flex-col">
                  <h3 className="gradient-heading font-bold text-2xl mb-2 font-heading">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
