import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <button
        className="flex items-center gap-4 mb-8 group"
        onClick={() => navigate("/")}
        aria-label="Go to Home"
      >
        <img src="/HAWKTOK-logo.svg" alt="HAWKTOK Logo" className="h-16 w-auto" />
        <span 
          className="text-3xl font-bold tracking-[0.2em] transition-all duration-300 relative inline-block" 
          style={{ 
            fontFamily: 'Signord, sans-serif',
            color: 'white',
          }}
        >
          <span 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #FF0050 0%, #FF1A66 15%, #EE2A7B 30%, #69C9D0 50%, #00F2EA 65%, #00D4FF 80%, #0099FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            HAWKTOK
          </span>
          <span className="group-hover:opacity-0 transition-opacity duration-300">HAWKTOK</span>
        </span>
      </button>
      <div className="max-w-2xl w-full bg-gray-900 rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">This is a dummy privacy policy for HAWKTOK. Your privacy is important to us. We do not collect any personal information unless you provide it voluntarily.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>We do not share your data with third parties.</li>
          <li>All information is kept confidential.</li>
          <li>Cookies may be used for improving user experience.</li>
          <li>You can contact us for any privacy concerns.</li>
        </ul>
        <p className="mb-2">For more details, please reach out to our support team.</p>
        <p className="text-gray-400 text-sm">Last updated: October 31, 2025</p>
      </div>
    </div>
  );
}
