import { useEffect, useRef } from "react";

interface AnimatedDottedBackgroundProps {
  particleCount?: number;
}

export default function AnimatedDottedBackground({ particleCount = 1000 }: AnimatedDottedBackgroundProps) {
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
        color:
          gradientColors[Math.floor(Math.random() * gradientColors.length)],
      });
    }

    const animate = () => {
      if (!canvas) return;
      // Black background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
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
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
