
import React, { useState, useEffect } from "react";

interface SparkleProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ 
  size = 10, 
  color = "#FFC107",
  style
}) => {
  const [position, setPosition] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: 1,
    scale: 1
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition({
        ...position,
        opacity: 0,
        scale: 0
      });
    }, Math.random() * 500 + 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="absolute pointer-events-none transition-all duration-1000"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        opacity: position.opacity,
        transform: `scale(${position.scale})`,
        ...style
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" 
          fill={color} 
        />
      </svg>
    </div>
  );
};

interface SparklesProps {
  children?: React.ReactNode;
  density?: number;
  speed?: number;
  backgroundColor?: string;
  sparkleColor?: string;
  className?: string;
}

const Sparkles: React.FC<SparklesProps> = ({
  children,
  density = 10,
  speed = 1,
  backgroundColor = "transparent",
  sparkleColor = "#FFD700",
  className = ""
}) => {
  const [sparkles, setSparkles] = useState<number[]>([]);

  // Create new sparkles at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => {
        const newSparkles = [...prev];
        if (newSparkles.length > density) {
          newSparkles.shift();
        }
        newSparkles.push(Date.now());
        return newSparkles;
      });
    }, 500 / speed);

    return () => clearInterval(interval);
  }, [density, speed]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: backgroundColor }}>
      {sparkles.map(key => (
        <Sparkle key={key} color={sparkleColor} />
      ))}
      {children}
    </div>
  );
};

export default Sparkles;
