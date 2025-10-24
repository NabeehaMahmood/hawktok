export default function AboutSection() {
  const benefits = [
    {
      number: "01",
      title: "Datengetrieben",
      description:
        "Jede Entscheidung basiert auf Daten, nicht auf Bauchgefühl.",
    },
    {
      number: "02",
      title: "Transparent",
      description:
        "Vollständige Transparenz über Kosten, Prozesse und Ergebnisse.",
    },
    {
      number: "03",
      title: "Ergebnisorientiert",
      description:
        "Unser Erfolg ist an Ihre messbaren Geschäftsergebnisse gebunden.",
    },
    {
      number: "04",
      title: "Modern & Agil",
      description: "Wir nutzen die neuesten Tools, Methoden und Technologien.",
    },
    {
      number: "05",
      title: "Verlässlich",
      description: "Langfristige Partnerschaften mit echtem Mehrwert.",
    },
  ];

  return (
    <section className="bg-black py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-8">
              Darum Lumus
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Unsere Art zu arbeiten ist anders. Wir kombinieren kreative
              Excellence mit analytischer Präzision. Das Ergebnis: Websites, die
              nicht nur schön sind, sondern auch verkaufen. Kampagnen, die nicht
              nur sichtbar sind, sondern Kunden bringen.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Erstgespräch vereinbaren
            </a>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-6 last:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <div className="text-gray-600 font-bold text-sm min-w-fit">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg font-heading mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
