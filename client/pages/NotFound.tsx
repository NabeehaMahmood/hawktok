import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number with gradient */}
        <h1 
          className="text-[8rem] md:text-[12rem] font-bold leading-none mb-4"
          style={{
            background: 'linear-gradient(135deg, #FF0050 0%, #FF1A66 15%, #EE2A7B 30%, #69C9D0 50%, #00F2EA 65%, #00D4FF 80%, #0099FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Signord, sans-serif',
          }}
        >
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md mx-auto">
          Looks like this page flew away. The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-block px-8 py-4 font-bold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #FF0050, #FF1A66, #EE2A7B, #69C9D0, #00F2EA, #00D4FF, #0099FF)',
            color: 'white',
          }}
        >
          Back to Home
        </button>
        
        {/* Logo */}
        <div className="mt-12">
          <img 
            src="/HAWKTOK-logo.svg" 
            alt="HAWKTOK Logo" 
            className="h-16 w-auto mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
