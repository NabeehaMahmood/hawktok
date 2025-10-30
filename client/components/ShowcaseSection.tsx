export default function ShowcaseSection() {
  const showcases = [
    {
      number: "01",
      // split title into parts so we can force a line-break after "Brand"
      title: ["Brand", "Revolution"],
      subtitle: "From a traditional retail brand",
      revenue: "$129K+ GMV in 60 days",
      description: "300% growth through precise positioning",
      image: "/1.jpg",
      imageAlt: "Verified Store Results - TikTok Shop Analytics",
    },
    {
      number: "02",
      title: ["From Listings", "to Legacy"],
      subtitle: "Helping a small seller evolve into a 6-figure powerhouse.",
      revenue: "$157K+ in 110 days",
      description: "through affiliate growth and storytelling built for conversion.",
      image: "/2.jpg",
      imageAlt: "Verified Store Results - TikTok Shop Analytics" 
      ,
    },
  ];

  // Reversed gradient (blue -> pink) based on the SVG `showcaseGradient` reversed stops
  const reversedGradient =
    'linear-gradient(90deg, #0099FF 0%, #00D4FF 14%, #00F2EA 28%, #69C9D0 42%, #EE2A7B 57%, #FF1A66 71%, #FF0050 100%)';

  // Vertical blue gradient for numeric highlights (numbers and revenue)
  const verticalBlueGradient = 'linear-gradient(180deg, #00D4FF 0%, #0099FF 100%)';

  // Picture border gradient (pink -> blue) matching the main SVG gradient direction
  const pictureBorderGradient =
    'linear-gradient(135deg, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)';

  return (
    <section
      id="showcase"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="relative mb-6" aria-label="Showcases">
            {/* Visible SVG gradient text for visual users */}
            <svg
              viewBox="0 0 1200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[4.5rem] md:h-[5.5rem] lg:h-[7rem] mx-auto"
              role="img"
              aria-hidden="false"
            >
              <defs>
                <linearGradient id="showcaseGradient" x1="0" x2="1" y1="0" y2="0">
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
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#showcaseGradient)"
                fontFamily="'Signord', sans-serif"
                fontWeight={700}
                fontSize={120}
                className="font-signord"
              >
                Showcases
              </text>
            </svg>

            {/* Keep text for screen readers */}
            <span className="sr-only">Showcases</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Proof over promises — every number earned, not claimed.
          </p>
        </div>

        {/* Showcases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Header */}
              <div className="mb-10">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">
                    {Array.isArray(showcase.title) ? (
                      <>
                        <span
                          className="mr-3"
                          style={{
                            background: verticalBlueGradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                          }}
                        >
                          {showcase.number}
                        </span>
                        {/* keep number and first word on the same line */}
                        <span
                          className="mr-3 inline-block"
                          style={{
                            background: reversedGradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                          }}
                        >
                          {showcase.title[0]}
                        </span>
                        {/* second word on its own line */}
                        <span
                          className="block"
                          style={{
                            background: reversedGradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'block',
                          }}
                        >
                          {showcase.title[1]}
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          className="mr-3"
                          style={{
                            background: verticalBlueGradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                          }}
                        >
                          {showcase.number}
                        </span>
                        <span
                          className="whitespace-nowrap"
                          style={{
                            background: reversedGradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                          }}
                        >
                          {showcase.title}
                        </span>
                      </>
                    )}
                  </span>
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-4">
                  {showcase.subtitle}
                </p>
                <p className="text-3xl md:text-4xl font-bold mb-2">
                  <span
                    style={{
                      background: verticalBlueGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block',
                    }}
                  >
                    {showcase.revenue}
                  </span>
                </p>
                <p className="text-gray-300 text-base md:text-lg">
                  {showcase.description}
                </p>
              </div>

              {/* Image Card with Gradient Border and Tilt */}
              <div className="relative perspective-1000">
                {/* Gradient border wrapper */}
                <div
                  className="relative p-[3px] rounded-2xl transform rotate-[-2deg] group-hover:rotate-[0deg] transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/30"
                  style={{ background: pictureBorderGradient }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-black">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={showcase.image}
                        alt={showcase.imageAlt}
                        className="w-full h-full object-contain bg-slate-900"
                      />
                    </div>
                    {/* Caption */}
                    <div className="bg-black/95 px-4 py-3 border-t border-gray-800">
                      <p className="text-xs text-gray-400 text-center font-medium">
                        {showcase.imageAlt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
