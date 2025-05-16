
import React from 'react';

interface MarqueeTextProps {
  text: string;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  textClassName?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  speed = 'normal',
  className = '',
  textClassName = ''
}) => {
  // Determine animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case 'slow':
        return '30s';
      case 'fast':
        return '10s';
      default:
        return '20s';
    }
  };
  
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-retro-red bg-opacity-80 text-white ${className}`}>
      <div 
        className={`inline-block animate-marquee ${textClassName}`}
        style={{ animationDuration: getDuration() }}
      >
        {/* Duplicate text for seamless looping */}
        {text} &nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default MarqueeText;
