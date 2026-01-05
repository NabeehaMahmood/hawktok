import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

// This component no longer applies any dimming or reveal effects.
// It simply renders children directly so there is no scroll-based fading.
export default function ScrollReveal({
  children,
  className = "",
  duration = 1000,
  stagger = false,
  staggerDelay = 150,
}: ScrollRevealProps) {
  return (
    <div className={className} style={{ transitionDuration: `${duration}ms` }}>
      {stagger
        ? React.Children.map(children, (child, index) => (
            <div
              key={index}
              style={{ transitionDuration: `${duration}ms`, transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
