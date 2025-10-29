
export default function ShowcaseSection() {
  const showcases = [
    {
      number: "01",
      title: "Brand",
      titleAccent: "Revolution",
      subtitle: "From a traditional retail brand",
      revenue: "$129K+ GMV in 60 days",
      description: "300% growth through precise positioning",
      image: "/1.jpg",
      imageAlt: "Verified Store Results - TikTok Shop Analytics",
    },
    {
      number: "02",
      title: "From Listings",
      titleAccent: "to Legacy",
      subtitle: "Helping a small seller evolve into a 6-figure powerhouse.",
      revenue: "$157K+ in 110 days",
      description: "through affiliate growth and storytelling built for conversion.",
      image: "/2.jpg",
      imageAlt: "Verified Store Results - TikTok Shop Analytics",
    },
  ];

  return (
    <section
      id="showcase"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black overflow-hidden"
    >
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-heading">
            Showcases
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
                  <span className="gradient-heading">
                    {showcase.number} – {showcase.title}{' '}
                  </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                    {showcase.titleAccent}
                  </span>
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-4">
                  {showcase.subtitle}
                </p>
                <p className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
                <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 transform rotate-[-2deg] group-hover:rotate-[0deg] transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/30">
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
