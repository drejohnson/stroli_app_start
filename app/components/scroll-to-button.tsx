import React, { useRef } from "react";
import { animate, spring } from "motion";

interface ScrollButtonProps {
  targetSection: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollToButton: React.FC<ScrollButtonProps> = ({
  targetSection,
  children,
  className,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById(targetSection);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHoverStart = () => {
    if (buttonRef.current) {
      animate(
        buttonRef.current,
        { scale: 1.1 },
        { duration: 0.3, easing: spring({ stiffness: 400, damping: 10 }) }
      );
    }
  };

  const handleHoverEnd = () => {
    if (buttonRef.current) {
      animate(
        buttonRef.current,
        { scale: 1 },
        { duration: 0.3, easing: spring({ stiffness: 400, damping: 10 }) }
      );
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleScrollToNext}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className={className}
    >
      {children}
    </button>
  );
};