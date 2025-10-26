import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  speed = 50,
}: TextRevealProps) {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
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
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        let i = 0;
        const timer = setInterval(() => {
          if (i < children.length) {
            setDisplayText(children.slice(0, i + 1));
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);

        return () => clearInterval(timer);
      }, delay);
    }
  }, [isVisible, children, delay, speed]);

  return (
    <div ref={ref} className={className}>
      {displayText}
      {!isVisible && <span className="invisible">{children}</span>}
    </div>
  );
}