
import React, { useState } from 'react';
import { playSound } from '@/utils/soundEffects';
import Sparkles from '@/components/decorative/Sparkles';
import MarqueeText from '@/components/MarqueeText';

const Header = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setIsSpinning(true);
    playSound('BELL');
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <header>
      {/* Breaking news style marquee */}
      <MarqueeText 
        text="⚠️ SATIRE ALERT! This app is purely for entertainment and social commentary. Not a real calculator. ⚠️" 
        className="py-1 font-bold text-sm" 
        speed="fast"
      />
      
      {/* Main header */}
      <div className="bg-gradient-to-r from-doordarshan-primary via-doordarshan-accent to-doordarshan-secondary p-6 border-b-4 border-black relative overflow-hidden">
        <div className="scanlines">
          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Logo */}
            <div 
              className={`cursor-pointer mb-2 ${isSpinning ? 'animate-spin' : 'animate-bounce-slow'}`}
              onClick={handleLogoClick}
            >
              <Sparkles>
                <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-full border-4 border-retro-yellow flex items-center justify-center overflow-hidden">
                  <span className="text-2xl md:text-3xl font-retro text-doordarshan-primary" style={{ transform: 'rotate(-10deg)' }}>
                    👰🤝💰
                  </span>
                </div>
              </Sparkles>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold font-retro text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] tracking-wide text-center">
              THE GREAT INDIAN 
              <br/>
              <span className="text-retro-yellow shimmer">MARRIAGE MARKET</span>
            </h1>
            
            {/* Subtitle */}
            <p className="mt-2 text-white font-hindi italic text-center">
              "Where love is measured in market value!"
            </p>
          </div>
        </div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-retro-pattern opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-zigzag opacity-20"></div>
      </div>
      
      {/* Secondary tagline */}
      <div className="bg-black text-retro-yellow font-bold py-2 text-center text-xs md:text-sm">
        <span className="blink">★</span> 
        PURE SATIRICAL ENTERTAINMENT SINCE 2025 
        <span className="blink">★</span>
      </div>
    </header>
  );
};

export default Header;
