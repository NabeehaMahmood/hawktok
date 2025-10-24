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
    <section className="bg-black py-24 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tight mb-6">
            Leistungen
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-lg p-8 hover:bg-slate-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-700"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-white font-bold text-2xl mb-4 font-heading">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
