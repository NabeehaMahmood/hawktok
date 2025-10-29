

export default function ServicesSection() {
  const services = [
    {
      title: (
        <>
          DTC Brand<br />
          Launch
        </>
      ),
      description: "Launch and scale direct-to-consumer brands with full-stack growth systems.",
      gradientStyle: {
        background: "linear-gradient(to right, #22d3ee, #5eead4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "Private Label Acceleration", 
      description: "Build profitable private-label products through optimization, supply mastery, and brand identity.",
      gradientStyle: {
        background: "linear-gradient(to right, #a855f7, #f472b6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "TikTok Shop Affiliate Ecosystem",
      description: "Turn creators into your sales engine using viral influence and performance-driven structures.",
      gradientStyle: {
        background: "linear-gradient(to right, #22d3ee, #3b82f6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "E-commerce Strategy & Retention",
      description: "Architect full-funnel strategies for acquisition, retention, and lifetime value growth",
      gradientStyle: {
        background: "linear-gradient(to right, #f472b6, #ef4444)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      
      <style>{`
        .service-card {
          background: transparent;
          padding: 24px;
          height: 100%;
        }
        
        .gradient-text {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
      <div className="container mx-auto relative z-10">
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
                <linearGradient
                  id="servicesGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="500"
                  y1="0"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#00F2EA" />
                  <stop offset="25%" stopColor="#00D4FF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="75%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#EF4444" />
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
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            From foundations to full-scale dominance—<br />
            here's how we help brands soar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="service-card">
                <h3 
                  className="font-bold text-3xl md:text-4xl mb-4 font-heading leading-tight"
                  style={service.gradientStyle}
                >
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
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
