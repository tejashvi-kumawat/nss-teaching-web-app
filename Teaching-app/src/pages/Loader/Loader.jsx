// src/components/Loader/Loader.jsx
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
  const [shutterUp, setShutterUp] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShutterUp(true);
      setTimeout(() => {
        if (onLoadComplete) onLoadComplete();
      }, 1000); // Wait for shutter animation to complete
    }, 1000); // Show loader for 2.5 seconds
    
    return () => clearTimeout(timer);
  }, [onLoadComplete]);
  
  return (
    <div className={`loader-container ${shutterUp ? 'shutter-up' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          {/* Using a simplified representation of the logo as white */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* This is a placeholder for your actual logo */}
            <path d="M60 10L90 30V90L60 110L30 90V30L60 10Z" stroke="white" strokeWidth="4" fill="none" />
            <path d="M60 30L75 40V80L60 90L45 80V40L60 30Z" stroke="white" strokeWidth="3" fill="none" />
            <path d="M50 60H70M50 70H70" stroke="white" strokeWidth="3" />
          </svg>
        </div>
        <h1 className="loader-title">Himalayan Vidya Daan Trust</h1>
      </div>
    </div>
  );
};

export default Loader;