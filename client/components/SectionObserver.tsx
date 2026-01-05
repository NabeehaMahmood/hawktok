import { useEffect, useRef } from "react";

export default function SectionObserver() {
  const currentColorRef = useRef<string>("#000000");
  const animationFrameRef = useRef<number>();
  const activeSectionRef = useRef<string | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section")) as HTMLElement[];
    if (!sections.length) return;

    // Set hero as active initially
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.classList.add("section-active");
      activeSectionRef.current = "hero";
    }

    // Define subtle, muted section colors
    const sectionColors: { [key: string]: string } = {
      hero: "#000000",
      services: "#0f1419",
      about: "#000000",
      brands: "#0f1419",
      showcase: "#000000",
      team: "#000000",
      contact: "#000000",
    };

    // Convert hex to RGB for blending
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    // Calculate blended color based on all visible sections
    const calculateBlendedColor = (entries: IntersectionObserverEntry[]) => {
      let totalWeight = 0;
      let blendedColor = { r: 0, g: 0, b: 0 };

      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const color = sectionColors[sectionId];
        if (!color) return;

        const weight = entry.intersectionRatio;
        const rgb = hexToRgb(color);

        blendedColor.r += rgb.r * weight;
        blendedColor.g += rgb.g * weight;
        blendedColor.b += rgb.b * weight;
        totalWeight += weight;
      });

      if (totalWeight > 0) {
        blendedColor.r = Math.round(blendedColor.r / totalWeight);
        blendedColor.g = Math.round(blendedColor.g / totalWeight);
        blendedColor.b = Math.round(blendedColor.b / totalWeight);

        return `rgb(${blendedColor.r}, ${blendedColor.g}, ${blendedColor.b})`;
      }

      return "#000000"; // fallback
    };

    // Smoothly update background color with subtle animation
    const updateBackgroundColor = (targetColor: string) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const bodyElement = document.body;
      if (!bodyElement) return;

      // Add smooth transition to body
      bodyElement.style.transition = 'background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

      const startColor = currentColorRef.current;
      const startRgb = hexToRgb(startColor);
      const targetRgb = hexToRgb(targetColor);

      let progress = 0;
      const duration = 1200; // Longer, more subtle transition
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);

        // Smoother easing function for buttery transitions
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const currentRgb = {
          r: Math.round(startRgb.r + (targetRgb.r - startRgb.r) * easeInOut),
          g: Math.round(startRgb.g + (targetRgb.g - startRgb.g) * easeInOut),
          b: Math.round(startRgb.b + (targetRgb.b - startRgb.b) * easeInOut),
        };

        const currentColor = `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`;
        bodyElement.style.backgroundColor = currentColor;
        bodyElement.style.transition = 'background-color 0.3s ease-out';

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          currentColorRef.current = targetColor;
        }
      };

      animate();
    };

    // Build a thresholds array for smooth updates
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        // Calculate blended color from all visible sections
        const blendedColor = calculateBlendedColor(entries);

        // Apply smooth, subtle transition to the blended color
        updateBackgroundColor(blendedColor);

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleSection: HTMLElement | null = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target as HTMLElement;
          }
        });

        // If we found a most visible section and it's significantly visible
        if (mostVisibleSection && maxRatio > 0.3) {
          const newActiveId = mostVisibleSection.id;
          
          // Only update if the active section changed
          if (newActiveId !== activeSectionRef.current) {
            // Remove active class from all sections
            sections.forEach((s) => s.classList.remove("section-active"));
            
            // Add active class to the most visible section
            mostVisibleSection.classList.add("section-active");
            activeSectionRef.current = newActiveId;
          }
        }

        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const ratio = entry.intersectionRatio;

          // Keep the in-view class for any other reveal logic (optional)
          if (ratio > 0.1) el.classList.add("in-view");
          else el.classList.remove("in-view");
        });
      },
      {
        threshold: thresholds,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    sections.forEach((s) => {
      observer.observe(s);
    });

    // Set initial background color
    document.body.style.backgroundColor = sectionColors.hero;
    currentColorRef.current = sectionColors.hero;

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
}