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

  const letters = "LUMUS".split("");

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden pt-20"
    >
      {/* Background video/canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="relative mb-8 flex justify-center items-center">
          {/* Main Logo with dynamic animations */}
          <div className="flex gap-1">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="text-white font-bold text-8xl md:text-9xl tracking-tighter leading-none inline-block"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
                  animation: `dynamicBounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) infinite,
                              spinRotate 1.5s ease-in-out infinite,
                              glow 1.5s ease-in-out infinite`,
                  animationDelay: `${index * 0.08}s`,
                  transformOrigin: "center center",
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Subtitle quote */}
        <div className="mt-24 max-w-2xl text-center px-6">
          <TextReveal
            className="text-white text-xl md:text-2xl font-light tracking-wide"
            delay={2000}
            speed={30}
          >
            After countless websites, campaigns and a lot of ad spend, we know how marketing really works.
          </TextReveal>
        </div>


      </div>
    </section>
  );
}
