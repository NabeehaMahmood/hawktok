export default function TeamSection() {
  const team = [
    {
      name: "Jonas Rüttgers",
      role: "Creative Head for SEO & SEA",
      initials: "JR",
    },
    {
      name: "Sharon Cottone",
      role: "Expert for Social Media & AI",
      initials: "SC",
    },
    {
      name: "John Prompson",
      role: "Lead Developer & Architect",
      initials: "JP",
    },
  ];

  return (
    <section id="team" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-6">
            Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our experienced team brings together expertise from performance marketing, web development and AI.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8 inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl font-bold text-gray-600">
                    {member.initials}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <h3 className="text-white font-bold text-xl font-heading mb-2">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
