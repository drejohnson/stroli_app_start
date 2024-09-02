import React, { useRef, useEffect } from "react";

import { animate, inView, scroll } from "motion";
import { useInView } from "@/hooks/use-inview";
import { Link } from "@tanstack/react-router";

export const Cta = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useInView<HTMLHeadingElement>();
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (containerRef.current && paragraphRef.current) {
      inView(containerRef.current, () => {
        animate(
          paragraphRef.current!,
          { opacity: 1, transform: "none" },
          { duration: 0.9, easing: [0.17, 0.55, 0.55, 1], delay: 0.5 }
        );
      });

      scroll(
        ({ y }) => {
          containerRef.current!.style.transform = `translateY(${y.progress * 20 - 10}%)`;
        },
        {
          target: containerRef.current,
          offset: ["start end", "end start"],
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col gap-y-12 bg-black py-20 snap-start snap-always overflow-clip"
    >
      <h3
        ref={headingRef}
        className="container mx-auto px-4 text-[clamp(2rem,6vw,3rem)] text-gray-50 font-extrabold text-center uppercase leading-none opacity-0 translate-x-[-100px]"
      >
        <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-500 md:inline-block">
          {" "}
          Join
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-400 to-purple-300">
            {" "}
            Stroli
          </span>{" "}
        </span>
      </h3>

      <div className="relative container mx-auto px-4 z-10 mix-blend-screen text-gray-50 w-full h-fit flex flex-col gap-8 justify-between">
        <p
          ref={paragraphRef}
          className="self-center text-[clamp(0.875rem,6vw,1.2rem)] text-gray-50 text-center leading-none opacity-0 translate-x-[200px]"
        >
          Become Part of Our Creator Community and Reach Millions! Turn Your
          Passions Into Profitable Ventures Today.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="/become-creator"
            className="rounded-full bg-gray-50 text-gray-950 text-sm font-bold text-center w-fit py-3 px-4 md:py-4 md:px-8 transition-all duration-300 no-underline"
          >
            Become Creator
          </Link>
        </div>
      </div>
    </section>
  );
};