import React, { useState, useEffect } from "react";

interface TextLoopProps {
  words: string[];
}

export const AnimatedTextLoop: React.FC<TextLoopProps> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-500 font-display font-extrabold uppercase text-center">
      {isMobile ? (
        words[currentIndex]
      ) : (
        <span
          className="transition-all duration-500 ease-in-out"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
        >
          {words[currentIndex]}
        </span>
      )}
    </span>
  );
};
