import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 1000,
  stagger = false,
  staggerDelay = 150,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("opacity-100");

              // Add direction-specific animation class
              const animationClass = direction === "up" ? "animate-in-up" : "animate-in-fade";
              entry.target.classList.add(animationClass);

              // Handle staggered animations for child elements
              if (stagger && entry.target.children) {
                Array.from(entry.target.children).forEach((child, index) => {
                  setTimeout(() => {
                    (child as HTMLElement).classList.remove("opacity-0");
                    (child as HTMLElement).classList.add("opacity-100", animationClass);
                    (child as HTMLElement).style.transform = "translateY(0) scale(1)";
                    (child as HTMLElement).classList.add(`stagger-${(index % 5) + 1}`);
                  }, index * staggerDelay);
                });
              }

              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, stagger, staggerDelay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(25px)";
      case "fade":
      default:
        return "translateY(8px) scale(0.98)";
    }
  };

  const getStaggerTransform = () => {
    if (!stagger) return {};
    switch (direction) {
      case "up":
        return { transform: "translateY(15px)" };
      case "fade":
      default:
        return { transform: "translateY(5px) scale(0.99)" };
    }
  };

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all ease-out ${className}`}
      style={{
        transform: getInitialTransform(),
        transitionDuration: `${duration}ms`,
        ...getStaggerTransform(),
      }}
    >
      {stagger
        ? React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="opacity-0 transition-all ease-out"
              style={{
                transform: getStaggerTransform().transform,
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
