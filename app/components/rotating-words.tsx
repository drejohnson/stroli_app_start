import React, { useEffect, useRef } from 'react';
import { animate, type AnimationOptions } from "motion";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingWords: React.FC<RotatingWordsProps> = ({ 
  words, 
  interval = 2000, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const currentIndex = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animateWords = () => {
      const current = container.children[currentIndex.current] as HTMLElement;
      const next = container.children[(currentIndex.current + 1) % words.length] as HTMLElement;

      const animationOptions: AnimationOptions = {
        duration: 0.5,
        easing: "ease-out"
      };

      animate(
        current,
        { opacity: [1, 0], transform: ["translateY(0)", "translateY(-20px)"] },
        animationOptions
      );

      animate(
        next,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
        animationOptions
      );

      currentIndex.current = (currentIndex.current + 1) % words.length;
    };

    const intervalId = setInterval(animateWords, interval);
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <span 
      ref={containerRef} 
      className={`inline-block relative ${className}`}
      style={{ height: '1.2em', verticalAlign: 'baseline' }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`absolute left-0 right-0 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{ top: 0, bottom: 0, display: 'flex', alignItems: 'baseline' }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default RotatingWords;