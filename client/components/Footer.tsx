export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo - links to top */}
        <a
          href="#top"
          className="mb-4 md:mb-0 flex items-center group whitespace-nowrap"
          onMouseEnter={e => {
            const text = e.currentTarget.querySelector('.hawktok-footer-text') as HTMLElement | null;
            if (text) {
              text.style.background = 'linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)';
              (text.style as any).webkitBackgroundClip = 'text';
              text.style.backgroundClip = 'text';
              text.style.color = 'transparent';
            }
          }}
          onMouseLeave={e => {
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
        <div className="w-full flex justify-center mb-4 md:mb-0">
          <a href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
        </div>
        {/* Rights */}
        <p className="text-gray-600 text-sm text-center md:text-right">© HAWKTOK. All rights reserved.</p>
      </div>
    </footer>
  );
}
