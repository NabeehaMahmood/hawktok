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
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 150;
    
    // Gradient colors from pink to blue
    const gradientColors = [
      "#FF0050", // deep pink
      "#FF0050", // deep pink
      "#FF1A66", // hot pink
      "#FF1A66", // hot pink
      "#FF3366", // bright pink
      "#FF5588", // medium pink
      "#EE2A7B", // dark pink
      "#D91E63", // darker pink
      "#C2185B", // deep magenta pink
      "#69C9D0", // light cyan
      "#50D5D8", // cyan
      "#00F2EA", // bright cyan
      "#00E5FF", // aqua
      "#00D4FF", // bright blue
      "#00C9FF", // sky blue
      "#0099FF", // vibrant blue
      "#0088FF", // deep blue
      "#0066FF", // royal blue
    ];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: gradientColors[Math.floor(Math.random() * gradientColors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle with gradient color
        ctx.fillStyle = particle.color;
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
        <div className="-mt-14 mb-6 flex justify-center items-center">
          <div className="relative group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-8 bg-white/0 group-hover:bg-white/40 blur-2xl rounded-full transition-all duration-500 ease-out scale-75 group-hover:scale-100" />
            <img 
              src="/HAWKTOK-logo.svg" 
              alt="HAWKTOK Logo"
              className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Subtitle quote */}
        <div className="mt-0 mb-12 max-w-2xl text-center px-6">
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
