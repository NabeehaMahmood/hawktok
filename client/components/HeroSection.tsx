import { useEffect, useRef } from "react";

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


  return (
    <section 
      id="hero"
      className="relative w-full h-screen bg-black overflow-hidden pt-20"
    >
      {/* Background video/canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Animated Logo Circle */}
        <div
          ref={logoRef}
          onMouseMove={handleLogoMouseMove}
          onMouseLeave={handleLogoMouseLeave}
          className="relative mb-8 cursor-pointer"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Rotating rings */}
          <div
            className="absolute inset-0 border-2 border-purple-500/50 rounded-full"
            style={{
              width: "200px",
              height: "200px",
              left: "-100px",
              top: "-100px",
              transform: `rotate(${logoRotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
          <div
            className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
            style={{
              width: "280px",
              height: "280px",
              left: "-140px",
              top: "-140px",
              transform: `rotate(-${logoRotation * 0.8}deg)`,
              transition: "transform 0.1s linear",
            }}
          />

          {/* Main Logo */}
          <h1
            className="relative z-20 text-white font-bold text-8xl md:text-9xl tracking-tighter text-center leading-none whitespace-nowrap"
            style={{
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))",
              transition: "filter 0.3s ease",
            }}
          >
            LUMUS
          </h1>
        </div>

        {/* Subtitle quote */}
        <div className="mt-24 max-w-2xl text-center px-6">
          <p className="text-white text-xl md:text-2xl font-light tracking-wide animate-fade-in">
            Nach unzähligen Websites, Kampagnen und einer Menge Adspend wissen wir, wie Marketing
            wirklich funktioniert.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
