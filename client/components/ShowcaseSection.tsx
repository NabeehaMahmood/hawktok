export default function ShowcaseSection() {
  const showcases = [
    {
      title: "Website Relaunch",
      client: "Dr. med. Birgit Wörle",
      image: "🎨",
    },
    {
      title: "Website Modernization",
      client: "Dr. Schöneich & Dr. Englbrecht",
      image: "✨",
    },
  ];

  return (
    <section id="showcase" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight">
            Showcases
          </h2>
        </div>

        {/* Showcases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-slate-900 aspect-video cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {/* Video placeholder with overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 flex items-end p-8 group-hover:from-black/20 transition-all duration-300">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">
                    {showcase.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{showcase.client}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-50 group-hover:opacity-100 transition-opacity">
                {showcase.image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
