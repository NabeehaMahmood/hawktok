export default function ServicesSection() {
  const services = [
    {
      title: "Webdesign",
      icon: "🌐",
      description:
        "Wir gestalten und entwickeln Websites, die nicht nur gut aussehen, sondern gezielt verkaufen. Schnell, intuitiv und messbar effektiv.",
    },
    {
      title: "SEO & SEA",
      icon: "📊",
      description:
        "Von datengetriebenen Google & Meta Ads bis zur langfristigen SEO-Strategie: Wir sorgen für Sichtbarkeit, die nicht nur Klicks bringt, sondern Kunden.",
    },
    {
      title: "Automatisierung",
      icon: "⚙️",
      description:
        "Wir bauen Marketing-Prozesse, die sich selbst steuern. Mit KI, Systemen und Tools, die Ihnen Zeit sparen und Ihr Business skalieren.",
    },
  ];

  return (
    <section id="services" className="bg-dark-blue py-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-12">
            Leistungen
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
