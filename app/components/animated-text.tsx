import { useState, useCallback, useEffect, useRef } from "react";
import { animate, spring, inView } from "motion";

interface TextLoopProps {
  words: string[];
  interval?: number;
}

export const AnimatedTextLoop: React.FC<TextLoopProps> = ({
  words,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);

  const nextWord = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(nextWord, interval);
    return () => clearInterval(timer);
  }, [nextWord, interval]);

  useEffect(() => {
    if (currentRef.current && nextRef.current) {
      const current = currentRef.current;
      const next = nextRef.current;

      // Set initial styles
      current.style.position = "absolute";
      next.style.position = "absolute";
      next.style.opacity = "0";
      next.style.transform = "translateY(20px)";

      // Animate out the current word
      animate(
        current,
        { opacity: 0, y: -20 },
        {
          duration: 0.5,
          easing: spring({ velocity: 100, stiffness: 1000, damping: 30 }),
        }
      );

      // Animate in the next word
      animate(
        next,
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          easing: spring({ velocity: 100, stiffness: 1000, damping: 30 }),
        }
      );

      // Clean up
      return () => {
        current.style.position = "static";
        next.style.position = "static";
      };
    }
  }, [currentIndex]);

  // Set up inView animation
  useEffect(() => {
    if (containerRef.current) {
      return inView(containerRef.current, (entry) => {
        if (entry.isIntersecting) {
          animate(
            entry.target,
            { opacity: 1, y: 0 },
            {
              duration: 0.5,
              easing: spring({ velocity: 100, stiffness: 1000, damping: 30 }),
            }
          );
        }
      });
    }
  }, []);

  const currentWord = words[currentIndex];
  const nextWordIndex = (currentIndex + 1) % words.length;

  return (
    <div
      ref={containerRef}
      className="relative inline-block opacity-0 translate-y-5"
      style={{ minWidth: "100px", minHeight: "1.5em" }}
    >
      <span
        ref={currentRef}
        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-500 font-display font-extrabold uppercase text-center"
      >
        {currentWord}
      </span>
      <span
        ref={nextRef}
        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-500 font-display font-extrabold uppercase text-center"
      >
        {words[nextWordIndex]}
      </span>
    </div>
  );
};

AnimatedTextLoop.displayName = "AnimatedTextLoop";
