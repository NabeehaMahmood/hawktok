export default function ServicesSection() {
  const services = [
    {
      title: "DTC Brands launch",
      icon: "🚀",
      description:
        "Launch and scale direct-to-consumer brands with end-to-end growth marketing.",
    },
    {
      title: "Private Label Business",
      icon: "🏷️",
      description:
        "Build profitable private label products and optimize listings, supply and margins.",
    },
    {
      title: "TikTok Shop Affiliate marketing",
      icon: "🤝",
      description:
        "Leverage TikTok Shop and affiliate creators to drive viral commerce and conversions.",
    },
    {
      title: "E-commerce Marketing Strategy",
      icon: "📈",
      description:
        "Full-funnel e-commerce strategies — customer acquisition, retention and growth.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-12">
            Services
          </h2>
        </div>

  {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group max-w-[320px] mx-auto">
              <div className="flex flex-col md:min-h-[150px]">
                <div className="text-6xl mb-8">{service.icon}</div>
                <h3 className="text-white font-bold text-2xl mb-6 font-heading">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
