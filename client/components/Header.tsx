import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = true }: HeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "SERVICES", href: "#services", id: "services" },
    { label: "HAWKTOK", href: "#about", id: "about" },
    { label: "BRANDS", href: "#brands", id: "brands" },
    { label: "TESTIMONIALS", href: "#testimonials", id: "testimonials" },
    { label: "FOUNDER", href: "#founder", id: "founder" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

          // Track hero section visibility
          if (entry.target.id === "hero") {
            setIsHeroVisible(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe hero section
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  // Keep the --header-height CSS variable in sync with the actual header height
  useEffect(() => {
    const setHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 80;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);


  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined,
    id?: string
  ) => {
    if (e) e.preventDefault();
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeightRaw = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
    const headerHeight = parseFloat(headerHeightRaw) || headerRef.current?.offsetHeight || 80;

    const reductionPx = -120; // Small reduction to avoid exact alignment

    const targetY = el.getBoundingClientRect().top + window.scrollY - headerHeight - reductionPx;
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return isHeroVisible ? (
    <header
      ref={headerRef}
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-black/95 backdrop-blur-sm",
      )}
    >
      {/* Desktop Layout - Single Row */}
      <div className="hidden xl:block">
        <div className="w-full" style={{ paddingLeft: 'clamp(1rem, 2vw, 3rem)', paddingRight: 'clamp(1rem, 2vw, 3rem)' }}>
          {/* Single Row - Logo, Navigation, and Social Icons */}
          <div className="flex items-center justify-between" style={{ paddingTop: 'clamp(0.75rem, 1vw, 1.5rem)', paddingBottom: 'clamp(0.75rem, 1vw, 1.5rem)' }}>
            {/* Logo - Left Corner */}
            <a
              href="#hero"
              className="flex items-center group transition-opacity duration-300 flex-shrink-0"
              style={{ gap: 'clamp(0.5rem, 0.8vw, 1rem)' }}
            >
              <img 
                src="/HAWKTOK-logo.svg" 
                alt="HAWKTOK Logo"
                style={{ height: 'clamp(2.5rem, 3.5vw, 4rem)', width: 'auto' }}
              />
              <span 
                className="font-bold tracking-[0.2em] relative"
                style={{
                  fontFamily: 'Signord, sans-serif',
                  fontSize: 'clamp(1.25rem, 1.5vw, 1.75rem)',
                }}
              >
                {/* White text by default */}
                <span 
                  className="group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  HAWKTOK
                </span>
                {/* Gradient text on hover */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  HAWKTOK
                </span>
              </span>
            </a>

            {/* Navigation - Center */}
            <nav className="flex items-center absolute left-1/2 transform -translate-x-1/2" style={{ gap: 'clamp(1rem, 1.5vw, 2rem)', marginLeft: 'clamp(2rem, 3vw, 4rem)' }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                const showGradient = isActive || isHovered;
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="uppercase tracking-wide transition-all duration-300 whitespace-nowrap"
                    style={showGradient ? {
                      fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                      background: 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 'bold',
                      fontFamily: 'Signord, sans-serif',
                    } : {
                      fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                      color: '#9ca3af',
                      fontWeight: isHovered ? 'bold' : 'medium',
                      fontFamily: 'Signord, sans-serif',
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Social Icons - Right Corner */}
            <div className="flex items-center flex-shrink-0" style={{ gap: 'clamp(0.5rem, 0.8vw, 1rem)' }}>
              <div 
                className="rounded-xl transition-all duration-300"
                style={{ background: 'transparent', padding: '2px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <a
                  href="https://www.instagram.com/hawktok_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black rounded-xl border border-gray-600 transition-all duration-300"
                  style={{ width: 'clamp(2.5rem, 3vw, 3.5rem)', height: 'clamp(2.5rem, 3vw, 3.5rem)' }}
                  aria-label="Instagram"
                >
                  <svg style={{ width: 'clamp(1rem, 1.2vw, 1.5rem)', height: 'clamp(1rem, 1.2vw, 1.5rem)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Single Row */}
      <div className="xl:hidden">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="flex items-center gap-3 group transition-opacity duration-300"
            >
              <img 
                src="/HAWKTOK-logo.svg" 
                alt="HAWKTOK Logo"
                className="h-10 md:h-16 w-auto"
              />
              <span 
                className="text-2xl md:text-3xl font-bold tracking-[0.2em] relative"
                style={{
                  fontFamily: 'Signord, sans-serif',
                }}
              >
                {/* White text by default */}
                <span 
                  className="group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  HAWKTOK
                </span>
                {/* Gradient text on hover */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  HAWKTOK
                </span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black/95 border-t border-gray-700">
          <nav className="container mx-auto px-4 md:px-6 py-4 flex flex-col gap-4 max-w-7xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors duration-300",
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
                style={{
                  fontFamily: 'Signord, sans-serif',
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
              <a
                href="https://www.instagram.com/hawktok_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center border border-gray-600 rounded-lg hover:border-white transition-colors duration-300 text-sm"
              >
                Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  ) : null;
}
