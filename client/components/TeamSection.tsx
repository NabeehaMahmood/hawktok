

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
    <section
      id="team"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <svg
              viewBox="0 0 300 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Team"
            >
              <defs>
                <linearGradient
                  id="teamGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="300"
                  y1="0"
                  y2="0"
                >
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
                x="150"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="inherit"
                fill="url(#teamGradient)"
                className="font-heading"
              >
                Team
              </text>
            </svg>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our experienced team brings together expertise from performance
            marketing, web development and AI.
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
              <h3 className="gradient-heading font-bold text-xl font-heading mb-2">
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
