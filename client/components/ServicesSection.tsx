export default function ServicesSection() {
  const services = [
    {
      title: "Web Design",
      icon: "🌐",
      description:
        "We design and develop websites that not only look good, but sell purposefully. Fast, intuitive and measurably effective.",
    },
    {
      title: "SEO & SEA",
      icon: "📊",
      description:
        "From data-driven Google & Meta Ads to long-term SEO strategy: We ensure visibility that not only brings clicks, but customers.",
    },
    {
      title: "Automation",
      icon: "⚙️",
      description:
        "We build marketing processes that steer themselves. With AI, systems and tools that save you time and scale your business.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="text-6xl mb-8">{service.icon}</div>
              <h3 className="text-white font-bold text-2xl mb-6 font-heading">
                {service.title}
              </h3>
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
