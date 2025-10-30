import React from "react";


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
        background: "linear-gradient(to right, #FF0050, #0099FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "Private Label Acceleration", 
      description: "Build profitable private-label products through optimization, supply mastery, and brand identity.",
      gradientStyle: {
        background: "linear-gradient(to right, #FF0050, #0099FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "TikTok Shop Affiliate Ecosystem",
      description: "Turn creators into your sales engine using viral influence and performance-driven structures.",
      gradientStyle: {
        background: "linear-gradient(to right, #FF0050, #0099FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
    {
      title: "E-commerce Strategy & Retention",
      description: "Architect full-funnel strategies for acquisition, retention, and lifetime value growth",
      gradientStyle: {
        background: "linear-gradient(to right, #FF0050, #0099FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }
    },
  ];

  const gradientColors = [
    "#FF0050",
    "#FF1A66",
    "#EE2A7B",
    "#69C9D0",
    "#00F2EA",
    "#00D4FF",
    "#0099FF",
  ];

  // Calculate gradient stops for subheadings using the provided gradient
  const calculateGradient = (index, total) => {
    const step = Math.floor((gradientColors.length - 1) / (total - 1));
    const startColor = gradientColors[index * step] || gradientColors[0];
    const endColor = gradientColors[(index + 1) * step] || gradientColors[gradientColors.length - 1];
    return `linear-gradient(to right, ${startColor}, ${endColor})`;
  };

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
              viewBox="0 0 700 120"
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
                x="350"
                y="80"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="'Signord', sans-serif"
                fill="url(#servicesGradient)"
                className="font-heading font-signord"
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
                  style={{
                    ...service.gradientStyle,
                    background: calculateGradient(index, services.length),
                  }}
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
