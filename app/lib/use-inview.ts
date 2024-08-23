import { useEffect, useRef } from "react";
import { inView, animate, type AnimationOptions, type Easing } from "motion";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  animationDelay?: number;
  animationDuration?: number;
  animationEasing?: Easing;
}

export function useInView<T extends HTMLElement>({
  rootMargin = "0px",
  threshold = 0.5,
  animationDelay = 0.3,
  animationDuration = 0.9,
  animationEasing = [0.17, 0.55, 0.55, 1],
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animationOptions: AnimationOptions = {
      delay: animationDelay,
      duration: animationDuration,
      easing: animationEasing as Easing,
    };

    const stopObserver = inView(
      ref.current,
      (entry) => {
        if (entry.isIntersecting) {
          animate(
            ref.current!,
            { opacity: 1, transform: "none" },
            animationOptions
          );
        } else {
          animate(ref.current!, {
            opacity: 0,
            transform: "translateX(-100px)",
          });
        }
      },
      { margin: rootMargin, amount: threshold }
    );

    return stopObserver;
  }, [
    rootMargin,
    threshold,
    animationDelay,
    animationDuration,
    animationEasing,
  ]);

  return ref;
}
