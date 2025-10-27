import { useEffect, useRef } from "react";
import TextReveal from "@/components/TextReveal";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const letters = "HAWKTOK".split("");
  // small per-letter tilt values (degrees) to mimic the previous independent tilts
  const rotations = letters.map((_, i) => (i % 2 === 0 ? -9 + i : 9 - i));
  // SVG layout values for per-letter positioning
  const svgWidth = 800;
  const svgHeight = 160;
  const fontSize = 120; // px
  const advance = 86; // approximate x advance per glyph
  const startX = svgWidth / 2 - ((letters.length - 1) * advance) / 2;
  const centerY = svgHeight / 2 + fontSize * 0.08; // nudged for optical centering

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-visible pt-32"
    >
      {/* Background video/canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* HAWKTOK Logo Image */}
        <div className="-mt-24 -mb-10 flex justify-center items-center">
          <img 
            src="/HAWKTOK-logo.svg" 
            alt="HAWKTOK Logo"
            className="w-56 h-56 md:w-80 md:h-80 object-contain"
          />
        </div>

        {/* Animated Logo */}
        <div className="relative -mb-4 flex justify-center items-center">
          {/* SVG-based logo: single gradient across the whole word (userSpaceOnUse),
              per-letter animated <g><text/></g> so each glyph can move independently */}
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-[6rem] md:h-[7.5rem]"
            role="img"
            aria-label="HAWKTOK"
          >
            <defs>
              {/* Use userSpaceOnUse so the gradient coordinates span the full SVG width
                  and different <text> elements sample the same continuous gradient */}
              <linearGradient id="logoGradient" gradientUnits="userSpaceOnUse" x1="0" x2={String(svgWidth)} y1="0" y2="0">
                <stop offset="0%" stopColor="#FF0050" />
                <stop offset="14%" stopColor="#FF1A66" />
                <stop offset="28%" stopColor="#EE2A7B" />
                <stop offset="42%" stopColor="#69C9D0" />
                <stop offset="57%" stopColor="#00F2EA" />
                <stop offset="71%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#0099FF" />
              </linearGradient>
            </defs>

            {/* Render each letter as its own <text> (wrapped in a <g>) so we can animate/transform it
                while each letter still uses the same gradient defined above. */}
            {letters.map((letter, i) => {
              const x = startX + i * advance;
              const rotateDeg = rotations[i] ?? 0;
              return (
                <g key={i} style={{ display: "inline-block" }}>
                  <text
                    x={x}
                    y={centerY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontWeight={700}
                    fontSize={fontSize}
                    fontFamily="inherit"
                    fill="url(#logoGradient)"
                    style={{ pointerEvents: "none" }}
                  >
                    {letter}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Subtitle quote */}
        <div className="mt-12 mb-12 max-w-2xl text-center px-6">
          <TextReveal
            className="text-white text-xl md:text-2xl font-light tracking-wide"
            delay={50}
            speed={35}
          >
            PEOPLE LOVE INFLUENCE AND WE KNOW HOW MAKE DTC 
            BRANDS A INFLUENCER ON TIKTOK SHOP 
            Let's Make $100k in 4 Months
          </TextReveal>
        </div>


      </div>
    </section>
  );
}
