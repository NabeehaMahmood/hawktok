export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-8">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Wir freuen uns, von Ihnen zu hören. Egal ob Sie ein bestehendes
              Projekt optimieren möchten oder von Grund auf neu starten – lassen
              Sie uns gemeinsam ihre Ziele erreichen.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Beratungsgespräch vereinbaren
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-heading">
                Kontakt
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">E-Mail</p>
                  <a
                    href="mailto:info@lumus.de"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    info@lumus.de
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Telefon</p>
                  <a
                    href="tel:+49157361482485"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    +49 157 361 482 85
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Wir sind Ihr Partner für Performance Marketing, Webdesign und
                digitale Transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
