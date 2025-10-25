export default function AboutSection() {
  const benefits = [
    {
      number: "01",
      title: "Data-driven",
      description:
        "Every decision is based on data, not gut feeling.",
    },
    {
      number: "02",
      title: "Transparent",
      description:
        "Complete transparency about costs, processes and results.",
    },
    {
      number: "03",
      title: "Results-oriented",
      description:
        "Our success is tied to your measurable business results.",
    },
    {
      number: "04",
      title: "Modern & Agile",
      description: "We use the latest tools, methods and technologies.",
    },
    {
      number: "05",
      title: "Reliable",
      description: "Long-term partnerships with real added value.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-8">
              Why Lumus
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Our way of working is different. We combine creative excellence with analytical precision. The result: Websites that are not only beautiful, but also sell. Campaigns that are not only visible, but bring customers.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule initial consultation
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
