import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Gradient colors from pink to blue
  const gradientColors = [
    "#FF0050", // pink
    "#FF1A66",
    "#EE2A7B",
    "#69C9D0", // cyan
    "#00F2EA",
    "#00D4FF",
    "#0099FF", // blue
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create particles
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 3 + 1;
        const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          color: color,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life -= 0.02;

        if (particle.life > 0) {
          const size = particle.life * 3 + 1;
          ctx.beginPath();
          // Convert hex to rgba with opacity
          const r = parseInt(particle.color.slice(1, 3), 16);
          const g = parseInt(particle.color.slice(3, 5), 16);
          const b = parseInt(particle.color.slice(5, 7), 16);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.life})`;
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ cursor: "none" }}
    />
  );
}
