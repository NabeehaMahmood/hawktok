import { useRef, useEffect } from "react";

export default function AboutSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Reset scroll to top when entering/leaving the section
  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reset to top when section becomes visible or when leaving
          if (!entry.isIntersecting) {
            container.scrollTop = 0;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // If scrolling up and at the top, or scrolling down and at the bottom,
    // allow the event to propagate to the page
    if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
      return; // Let the page scroll
    }

    // Otherwise, prevent page scroll and only scroll the container
    e.stopPropagation();
  };

  const benefits = [
    {
      number: "01",
      title: "We focus on the prey",
      description:
        "We focus on the prey — the buyer. Like a hawk locked on its target, we study your audience from every angle: their fears, emotions, and desires until every piece of content strikes with precision.",
    },
    {
      number: "02",
      title: "Partnership, not promotion",
      description:
        "Our affiliates aren’t just promoters; they're brand partners. We equip them with high-converting scripts, emotional angles, and product positioning that turn every video into a sales asset, not just a post.",
    },
    {
      number: "03",
      title: "Experienced minds only",
      description:
        "You won’t be handled by interns or assistants. Your brand is guided by experts who’ve built and scaled multiple TikTok Shop brands to five and six figures fast.",
    },
    {
      number: "04",
      title: "Leadership over labor",
      description:
        "With HawkTok, you don’t assign tasks — you receive clarity. We lead, prioritize, and execute what drives measurable results.",
    },
    {
      number: "05",
      title: "Content that sells",
      description:
        "We don’t just create “pretty videos.” We craft buyer-triggering stories designed to stop the scroll, spark emotion, and drive action.",
    },
    {
      number: "06",
      title: "Speed with precision",
      description:
        "What takes others months, we deliver in days without cutting corners. Focus. Clarity. Results. That’s how a hawk hunts.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="min-h-screen py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <svg
                viewBox="0 0 700 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-[3.5rem] md:h-[4.5rem]"
                role="img"
                aria-label="Why HawkTok?"
              >
                <defs>
                  <linearGradient id="aboutGradient" gradientUnits="userSpaceOnUse" x1="0" x2="700" y1="0" y2="0">
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
                  x="0"
                  y="60"
                  textAnchor="start"
                  dominantBaseline="central"
                  fontWeight={700}
                  fontSize={80}
                  fontFamily="inherit"
                  fill="url(#aboutGradient)"
                  className="font-heading"
                >
                  Why HawkTok?
                </text>
              </svg>
            </div>
            <p className="text-lg leading-relaxed mb-2 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              “We only focus on our prey — and our prey is the buyer.”
            </p>
            <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              For us, marketing isn’t about chasing trends or luck. It’s a calculated pursuit built on understanding psychology, positioning, and the one thing that matters most: the buyer.
            </p>
            <p className="text-lg leading-relaxed mb-12 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              Because in today's world, content sells but only when it's built around the person watching, scrolling, and deciding.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 font-bold rounded-lg transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF)',
                backgroundSize: '400% 100%',
                animation: 'gradientMove 8s linear infinite',
                color: 'white',
              }}
            >
              Schedule initial consultation
            </a>
            <style>{`
              @keyframes gradientMove {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: 100% 0%;
                }
              }
            `}</style>
          </div>

          {/* Right Column - Benefits Vertical Scroll */}
          <div className="relative h-[500px]">
            {/* Gradient Border Wrapper */}
            <div className="absolute inset-0 rounded-xl p-[2px]" style={{
              background: 'linear-gradient(135deg, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)'
            }}>
              {/* Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                onWheel={handleWheel}
                className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth pr-4 scrollbar-hide bg-black rounded-xl"
              >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="snap-center mb-6 last:mb-0"
                >
                  <div className="bg-black/10 border border-black/20 rounded-xl p-8 backdrop-blur-sm hover:bg-black/20 transition-all duration-300">
                    <div 
                      className="font-bold text-3xl mb-4"
                      style={{
                        background: 'linear-gradient(180deg, #69C9D0 0%, #00F2EA 50%, #0066FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'inline-block',
                      }}
                    >
                      {benefit.number}
                    </div>
                    <h3 className="gradient-heading font-bold text-2xl font-heading mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-base leading-relaxed opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
