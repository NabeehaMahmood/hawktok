import { useState } from "react";
import ContactFormDialog from "@/components/ContactFormDialog";

export default function ContactSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section
      id="contact"
      className="relative py-16 md:py-32 px-4 md:px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h2 
                className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold font-heading font-signord leading-tight"
                style={{
                  background: 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                Let's talk.
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              We're looking forward to hearing from you. Whether you want to
              optimize an existing project or start from scratch - let's achieve
              your goals together.
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-block px-8 py-4 font-bold rounded-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF)",
                backgroundSize: "400% 100%",
                animation: "gradientMove 8s linear infinite",
                color: "white",
              }}
            >
              Schedule consultation
            </button>
            
            <ContactFormDialog 
              open={isDialogOpen} 
              onOpenChange={setIsDialogOpen} 
            />
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
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="gradient-heading font-bold text-base md:text-lg mb-4 font-heading">
                Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:Info@hawktok.com"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    Info@hawktok.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+16194168885"
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    +1 (619) 4168885
                  </a>
                </div>
              </div>
            </div>

  
          </div>
        </div>
      </div>
    </section>
  );
}
