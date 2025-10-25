export default function ReferencesSection() {
  const clients = [
    "HMBS",
    "Schöneich & Englbrecht",
    "Vogel SV",
    "Rüttgers Immobilien",
    "Central",
    "PA Pure",
    "Dr. Rick",
    "Dr. Birgit Wörle",
  ];

  return (
    <section id="references" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight">
            References
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border border-gray-800 rounded-lg overflow-hidden">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-900/30 border border-gray-800 p-12 flex items-center justify-center min-h-48"
            >
              <p className="text-gray-400 font-semibold text-center text-sm">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
