import { Link } from "react-router-dom";

export default function Footer() {
  return (
   <footer className="relative bg-black border-t border-gray-900 py-8">
      <div
        className="w-full overflow-hidden bg-black border-b border-gray-800 mb-4"
        style={{ height: '2in' }}
      >
        <div
          className="ticker-wrapper"
          style={{
            fontFamily: 'Race Sport, sans-serif',
            fontSize: '1.5in',
            lineHeight: '1.5in',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="ticker-content">
            <span>
              {Array(10)
                .fill('The $100M Flight Has Begun •')
                .join(' ')}
            </span>
            <span aria-hidden="true">
              {Array(10)
                .fill('The $100M Flight Has Begun •')
                .join(' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center group whitespace-nowrap"
          onMouseEnter={(e) => {
            const text = e.currentTarget.querySelector('.hawktok-footer-text') as HTMLElement | null;
            if (text) {
              text.style.background =
                'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)';
              (text.style as any).webkitBackgroundClip = 'text';
              text.style.backgroundClip = 'text';
              text.style.color = 'transparent';
            }
          }}
          onMouseLeave={(e) => {
            const text = e.currentTarget.querySelector('.hawktok-footer-text') as HTMLElement | null;
            if (text) {
              text.style.background = '';
              text.style.color = '';
            }
          }}
        >
          <img src="/HAWKTOK-logo.svg" alt="HAWKTOK Logo" className="h-12 w-auto" />
          <span
            className="hawktok-footer-text ml-3 text-2xl font-bold text-white transition bg-clip-text"
            style={{ fontFamily: 'Signord, sans-serif', transition: 'background 0.3s' }}
          >
            HAWKTOK
          </span>
        </a>

        {/* Links */}
        <div className="flex justify-center">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Rights */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          © HAWKTOK. All rights reserved.
        </p>
      </div>


     <style>{`
        .ticker-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          height: 100%;
          color: white;
        }

        .ticker-content {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
          animation: ticker 60s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
