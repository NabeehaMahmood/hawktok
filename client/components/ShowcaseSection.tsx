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
          <div className="flex justify-center">
            <svg
              viewBox="0 0 600 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Showcases"
            >
              <defs>
                <linearGradient id="showcasesGradient" gradientUnits="userSpaceOnUse" x1="0" x2="600" y1="0" y2="0">
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
                x="300"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="inherit"
                fill="url(#showcasesGradient)"
                className="font-heading"
              >
                Showcases
              </text>
            </svg>
          </div>
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
                  <h4 className="gradient-heading font-bold text-xl mb-2">
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
