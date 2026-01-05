import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
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
        <div className="bg-gray-900 rounded-xl p-8 md:p-12 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last Updated: November 12, 2025</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            HawkTok ("we," "us," or "our") is a global TikTok Shop growth and brand strategy agency helping creators and DTC brands launch, scale, and dominate. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website, engage our services, or communicate with us.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Scope</h2>
          <p className="text-gray-300 leading-relaxed">
            This policy applies to all interactions with HawkTok—whether through our website, service pages, contact forms, consultations, email communications, or other online/offline touchpoints.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We collect both personal and usage information to deliver and optimize your experience:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Personal Data:</strong> Name, email address, business name, niche/category, billing details, and project-related information you provide when contacting or onboarding with us.</li>
            <li><strong>Usage Data:</strong> IP address, device and browser type, operating system, referral source, pages visited, time spent, and engagement patterns.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
          <p className="text-gray-300 leading-relaxed mb-3">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Provide, personalize, and improve our services.</li>
            <li>Process payments and manage accounts.</li>
            <li>Respond to inquiries and deliver client support.</li>
            <li>Improve site performance and user experience.</li>
            <li>Send strategic updates, offers, or insights relevant to your business (only with consent).</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Legal Bases (for EEA/UK users)</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We process your personal data under the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Consent</strong> – when you opt into communications or submit forms.</li>
            <li><strong>Contract necessity</strong> – to deliver requested services or proposals.</li>
            <li><strong>Legitimate interests</strong> – to improve services, ensure security, and manage relationships.</li>
            <li><strong>Legal obligations</strong> – to comply with applicable laws or regulations.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Payments</h2>
          <p className="text-gray-300 leading-relaxed">
            If you purchase services, payments are securely processed by verified third-party providers. HawkTok does not store full credit card details. Payment data is handled according to each provider's compliance standards (e.g., PCI DSS).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Sharing Information</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We do not sell or rent your personal data. We may share limited information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Trusted service providers for hosting, support, or payments.</li>
            <li>Professional advisors (legal, accounting) as necessary.</li>
            <li>Authorities when legally required or to protect our rights.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">International Transfers</h2>
          <p className="text-gray-300 leading-relaxed">
            As we work with global brands, your data may be processed in countries outside your residence. We use secure, recognized safeguards such as Standard Contractual Clauses where required to protect your data.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
          <p className="text-gray-300 leading-relaxed">
            We keep information only as long as needed for the purposes described—service delivery, compliance, dispute resolution, and record keeping. You may request deletion of your data at any time.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Access, correct, or delete your personal data.</li>
            <li>Restrict or object to processing.</li>
            <li>Withdraw consent at any time.</li>
            <li>Request data portability.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-3">
            To exercise your rights, contact us at <a href="mailto:info@hawktok.com" className="text-blue-400 hover:text-blue-300 underline">info@hawktok.com</a>.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Marketing Choices</h2>
          <p className="text-gray-300 leading-relaxed">
            You can unsubscribe from marketing emails anytime using the "unsubscribe" link or by contacting us directly. You'll still receive essential service or transactional communications when necessary.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            HawkTok does not knowingly collect data from children under 13 (or 16 in some regions). If you believe a minor has shared personal data, contact us to have it removed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We employ technical and organizational safeguards—SSL encryption, secure hosting, access control—to protect your information. While we take all reasonable precautions, no digital system is entirely risk-free.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Third-Party Links</h2>
          <p className="text-gray-300 leading-relaxed">
            Our website may link to other websites or platforms (e.g., TikTok, Shopify, or Meta). We are not responsible for their content or privacy practices. Please review their privacy policies before submitting any data.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy occasionally to reflect new legal, operational, or service changes. Updated versions will be posted here with a revised "Last Updated" date.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>HawkTok</strong><br />
            Email: <a href="mailto:info@hawktok.com" className="text-blue-400 hover:text-blue-300 underline">info@hawktok.com</a><br />
            Website: <a href="https://www.hawktok.com" className="text-blue-400 hover:text-blue-300 underline">www.hawktok.com</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
