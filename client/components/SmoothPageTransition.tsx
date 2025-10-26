import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SmoothPageTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);

  // Get scroll progress for the entire page
  const { scrollY } = useScroll();

  useEffect(() => {
    // Calculate positions of each section
    const updatePositions = () => {
      const sections = [
        document.getElementById("services"),
        document.getElementById("about"),
        document.getElementById("references"),
        document.getElementById("showcase"),
        document.getElementById("team"),
        document.getElementById("contact"),
      ];

      const positions = sections.map((section) => {
        if (!section) return 0;
        return section.offsetTop;
      });

      setSectionPositions(positions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    
    // Small delay to ensure sections are rendered
    setTimeout(updatePositions, 100);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  // Create color transformation based on scroll position
  const backgroundColor = useTransform(scrollY, (value) => {
    if (sectionPositions.length === 0) return "rgb(0, 0, 0)";

    const [servicesPos, aboutPos, referencesPos, showcasePos, teamPos, contactPos] = sectionPositions;
    
    const viewportHeight = window.innerHeight;
    const scrollPos = value + viewportHeight / 2; // Center of viewport

    // Define colors: Black and Dark Blue alternating
    const black = "rgb(0, 0, 0)"; // Pure black
    const darkBlue = "rgb(255, 254, 243)"; // Bright cyan-blue

    // Hero section (Black - before Services)
    if (scrollPos < servicesPos - viewportHeight * 0.3) {
      return black;
    }

    // Transition from Hero (black) to Services (dark blue)
    if (scrollPos < servicesPos + viewportHeight * 0.3) {
      const progress = (scrollPos - (servicesPos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(black, darkBlue, Math.max(0, Math.min(1, progress)));
    }

    // Services section (Dark Blue background)
    if (scrollPos < aboutPos - viewportHeight * 0.3) {
      return darkBlue;
    }
    
    // Transition from Services (dark blue) to About (black)
    if (scrollPos < aboutPos + viewportHeight * 0.3) {
      const progress = (scrollPos - (aboutPos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(darkBlue, black, Math.max(0, Math.min(1, progress)));
    }

    // About section (Black background)
    if (scrollPos < referencesPos - viewportHeight * 0.3) {
      return black;
    }

    // Transition from About (black) to References (dark blue)
    if (scrollPos < referencesPos + viewportHeight * 0.3) {
      const progress = (scrollPos - (referencesPos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(black, darkBlue, Math.max(0, Math.min(1, progress)));
    }

    // References section (Dark Blue background)
    if (scrollPos < showcasePos - viewportHeight * 0.3) {
      return darkBlue;
    }

    // Transition from References (dark blue) to Showcase (black)
    if (scrollPos < showcasePos + viewportHeight * 0.3) {
      const progress = (scrollPos - (showcasePos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(darkBlue, black, Math.max(0, Math.min(1, progress)));
    }

    // Showcase section (Black background)
    if (scrollPos < teamPos - viewportHeight * 0.3) {
      return black;
    }

    // Transition from Showcase (black) to Team (dark blue)
    if (scrollPos < teamPos + viewportHeight * 0.3) {
      const progress = (scrollPos - (teamPos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(black, darkBlue, Math.max(0, Math.min(1, progress)));
    }

    // Team section (Dark Blue background)
    if (scrollPos < contactPos - viewportHeight * 0.3) {
      return darkBlue;
    }

    // Transition from Team (dark blue) to Contact (black)
    if (scrollPos < contactPos + viewportHeight * 0.3) {
      const progress = (scrollPos - (contactPos - viewportHeight * 0.3)) / (viewportHeight * 0.6);
      return interpolateColor(darkBlue, black, Math.max(0, Math.min(1, progress)));
    }

    // Contact section (Black background)
    return black;
  });

  // Text color is always white for both black and dark blue backgrounds
  const textColor = useTransform(backgroundColor, (bg) => {
    // Check if background is the light cream color
    const rgb = bg.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    
    // If background is bright (>128), use black text, otherwise use white text
    if (brightness > 128) {
      return "rgb(0, 0, 0)"; // Black text for light backgrounds
    } else {
      return "rgb(255, 255, 255)"; // White text for dark backgrounds
    }
  });

  // Update CSS custom properties for text color
  useEffect(() => {
    const unsubscribe = textColor.on("change", (latest) => {
      document.documentElement.style.setProperty("--dynamic-text-color", latest);
    });

    return () => unsubscribe();
  }, [textColor]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

// Helper function to interpolate between two RGB colors
function interpolateColor(color1: string, color2: string, progress: number): string {
  const rgb1 = color1.match(/\d+/g)?.map(Number) || [0, 0, 0];
  const rgb2 = color2.match(/\d+/g)?.map(Number) || [0, 0, 0];

  const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * progress);
  const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * progress);
  const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * progress);

  return `rgb(${r}, ${g}, ${b})`;
}
