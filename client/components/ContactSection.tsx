

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <svg
                viewBox="0 0 550 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-[3.5rem] md:h-[4.5rem]"
                role="img"
                aria-label="Let's talk."
              >
                <defs>
                  <linearGradient
                    id="contactGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    x2="550"
                    y1="0"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#FF0050" />
                    <stop offset="14%" stopColor="#FF1A66" />
                    <stop offset="28%" stopColor="#EE2A7B" />
                    <stop offset="42%" stopColor="#69C9D0" />
                    <stop offset="57%" stopColor="#00F2EA" />
                    <stop offset="71%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#0099FF" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="60"
                  textAnchor="start"
                  dominantBaseline="central"
                  fontWeight={700}
                  fontSize={80}
                  fontFamily="inherit"
                  fill="url(#contactGradient)"
                  className="font-heading"
                >
                  Let's talk.
                </text>
              </svg>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              We're looking forward to hearing from you. Whether you want to
              optimize an existing project or start from scratch - let's achieve
              your goals together.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 font-bold rounded-lg transition-all duration-300 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(90deg, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF)",
                backgroundSize: "400% 100%",
                animation: "gradientMove 8s linear infinite",
                color: "white",
              }}
            >
              Schedule consultation
            </a>
            <style>{`
              @keyframes gradientMove {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: 100% 0%;
                }
              }
            `}</style>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="gradient-heading font-bold text-lg mb-4 font-heading">
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
                We are your partner for performance marketing, web design and
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
