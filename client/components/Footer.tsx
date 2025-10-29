

export default function Footer() {
  const navItems = [
    { label: "SERVICES", href: "#services" },
    { label: "LUMUS", href: "#about" },
    { label: "REFERENCES", href: "#references" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-900">
      
      {/* Ticker */}
      <div className="relative z-10 overflow-hidden bg-black py-8 border-b border-gray-900">
        <div className="whitespace-nowrap animate-scroll-left inline-block">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="inline-block text-white text-2xl font-bold tracking-widest mr-16"
            >
              LIEFERN STATT LABERN • LIEFERN STATT LABERN • LIEFERN STATT LABERN
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact us:
            </h3>
            <a
              href="mailto:info@lumus.de"
              className="text-gray-400 hover:text-white transition-colors"
            >
              info@lumus.de
            </a>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <nav className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © LUMUS DIGITAL. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm mt-4 md:mt-0">
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/impressum" className="hover:text-white transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
