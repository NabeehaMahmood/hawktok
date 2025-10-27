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
            <h2 className="font-bold text-5xl md:text-6xl font-heading tracking-tight mb-8" style={{ color: 'var(--dynamic-text-color)' }}>
              Why HawkTok?
            </h2>
            <p className="text-lg leading-relaxed mb-2 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              “We only focus on our prey — and our prey is the buyer.”
            </p>
            <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              For us, marketing isn’t about chasing trends or luck. It’s a calculated pursuit built on understanding psychology, positioning, and the one thing that matters most: the buyer.
            </p>
            <p className="text-lg leading-relaxed mb-12 opacity-70" style={{ color: 'var(--dynamic-text-color)' }}>
              Because in today’s world, content sells but only when it’s built around the person watching, scrolling, and deciding.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule initial consultation
            </a>
          </div>

          {/* Right Column - Benefits Vertical Scroll */}
          <div className="relative h-[500px]">
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              onWheel={handleWheel}
              className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth pr-4 scrollbar-hide"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="snap-center mb-6 last:mb-0"
                >
                  <div className="bg-black/10 border border-black/20 rounded-xl p-8 backdrop-blur-sm hover:bg-black/20 transition-all duration-300">
                    <div className="font-bold text-3xl mb-4 opacity-60" style={{ color: 'var(--dynamic-text-color)' }}>
                      {benefit.number}
                    </div>
                    <h3 className="font-bold text-2xl font-heading mb-4" style={{ color: 'var(--dynamic-text-color)' }}>
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
    </section>
  );
}
