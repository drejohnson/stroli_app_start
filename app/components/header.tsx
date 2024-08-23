import React, { useRef, useEffect, useCallback } from "react";
import { animate, scroll, spring, type ScrollInfo } from "motion";

import { cn } from "@/lib/utils";

interface HeaderProps {
  children: React.ReactNode;
  threshold?: number;
  animationDuration?: number;
  className?: string;
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Sign in", href: "/auth/sign-in" },
  { title: "Become A Creator", href: "/onboarding/creator" },
];

export const Header: React.FC<HeaderProps> = ({
  children,
  threshold = 100,
  animationDuration = 0.3,
  className = "",
}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const animateHeader = useCallback(
    (toValue: string) => {
      const header = headerRef.current;
      if (!header) return;

      animate(
        header,
        { y: toValue },
        {
          duration: animationDuration,
          easing: spring({ stiffness: 300, damping: 30 }),
        }
      );
    },
    [animationDuration]
  );

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let prevScrollY = 0;
    let accumulatedScroll = 0;

    const handleScroll = ({ y }: ScrollInfo) => {
      const currentScrollY = y.current;
      const scrollDifference = currentScrollY - prevScrollY;

      accumulatedScroll += scrollDifference;

      if (Math.abs(accumulatedScroll) >= threshold) {
        animateHeader(accumulatedScroll > 0 ? "-100%" : "0%");
        accumulatedScroll = 0;
      }

      prevScrollY = currentScrollY;
    };

    const scrollInstance = scroll(handleScroll);

    return () => scrollInstance();
  }, [threshold, animateHeader]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 will-change-transform",
          className
        )}
      >
        {children}
      </header>
    </>
  );
};
