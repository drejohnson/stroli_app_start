import { useEffect, useRef } from "react";
import { inView, animate, type AnimationOptions, type Easing } from "motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  animationDelay?: number;
  animationDuration?: number;
  animationEasing?: Easing;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  rootMargin = "0px",
  threshold = 0.5,
  animationDelay = 0.3,
  animationDuration = 0.9,
  animationEasing = [0.17, 0.55, 0.55, 1],
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (sectionRef.current && headingRef.current) {
      const animationOptions: AnimationOptions = {
        delay: animationDelay,
        duration: animationDuration,
        easing: animationEasing as Easing,
      };

      const stopObserver = inView(
        sectionRef.current,
        (entry) => {
          if (entry.isIntersecting) {
            animate(
              headingRef.current!,
              { opacity: 1, transform: "none" },
              animationOptions
            );
          } else {
            // Optional: reset the animation when out of view
            animate(headingRef.current!, {
              opacity: 0,
              transform: "translateX(-100px)",
            });
          }
        },
        {
          margin: rootMargin,
          amount: threshold,
        }
      );

      // Clean up the observer when the component unmounts
      return () => stopObserver();
    }
  }, [
    rootMargin,
    threshold,
    animationDelay,
    animationDuration,
    animationEasing,
  ]);

  return (
    <section
      ref={sectionRef}
      className={cn("flex p-1 overflow-x-clip", className)}
    >
      <h2 ref={headingRef} className="opacity-0 translate-x-[-100px]">
        {children}
      </h2>
    </section>
  );
};

export default AnimatedSection;
