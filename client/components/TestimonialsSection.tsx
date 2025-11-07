import AnimatedDottedBackground from "./AnimatedDottedBackground";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laurence Reusing",
    title: "Founder, TruAge Supplements",
    location: "Irvine, CA",
    quote: "Hussain built our entire TikTok Shop pre-launch strategy, pricing, and creator setup. I love the way he analyses our competitor's data and makes decisions about what's best for our brand."
  },
  {
    name: "Abraham Amin",
    title: "Founder, Opux Fragrances",
    location: "United Kingdom",
    quote: "Hussain helped us build an affiliate outreach system that actually worked. Within weeks, creators were promoting our fragrances daily, and sales followed fast."
  },
  {
    name: "Lee",
    title: "Founder, Haven & Co. Homeware",
    location: "Illinois",
    quote: "Working with Hussain felt like having an internal growth team. They rebuilt our TikTok Shop funnel, optimized ads, and aligned creators perfectly with our brand voice. The results? Our most profitable quarter yet."
  }
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-32 px-4 md:px-6 scroll-mt-20 transition-all duration-1000 ease-out bg-black"
    >
      <AnimatedDottedBackground particleCount={120} />
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 900 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-[4rem] md:h-[5rem]"
              role="img"
              aria-label="Testimonials"
            >
              <defs>
                <linearGradient
                  id="testimonialsGradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="900"
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
                x="450"
                y="80"
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={80}
                fontFamily="'Signord', sans-serif"
                fill="url(#testimonialsGradient)"
                className="font-heading font-signord"
              >
                Testimonials
              </text>
            </svg>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-[#FF0050]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF0050]/10"
            >
              {/* Quote Icon */}
              <div className="mb-4 md:mb-6">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#FF0050] opacity-50" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed mb-6 min-h-[140px] md:min-h-[180px]">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-700/50">
                <p className="font-bold text-base md:text-lg gradient-heading mb-1">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">
                  {testimonial.title}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {testimonial.location}
                </p>
              </div>

              {/* Decorative gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF0050]/0 via-[#00F2EA]/0 to-[#0099FF]/0 group-hover:from-[#FF0050]/10 group-hover:via-[#00F2EA]/5 group-hover:to-[#0099FF]/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
