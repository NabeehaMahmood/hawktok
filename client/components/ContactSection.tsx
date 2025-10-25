export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-white font-bold text-5xl md:text-6xl font-heading tracking-tight mb-8">
              Let's talk.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              We're looking forward to hearing from you. Whether you want to optimize an existing project or start from scratch - let's achieve your goals together.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule consultation
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-heading">
                Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:info@lumus.de"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    info@lumus.de
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Phone</p>
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
                We are your partner for performance marketing, web design and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
