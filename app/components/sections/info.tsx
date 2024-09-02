import { useRef, useEffect } from "react";
import { animate, inView, scroll } from "motion";
import { useInView } from "@/hooks/use-inview";

export const Info = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useInView<HTMLParagraphElement>();
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && imageRef.current && paragraphRef.current) {
      inView(containerRef.current, () => {
        animate(
          headingRef.current!,
          { opacity: 1, transform: "none" },
          { duration: 0.9, easing: [0.17, 0.55, 0.55, 1], delay: 0.5 }
        );
        animate(
          paragraphRef.current!,
          { opacity: 1, transform: "none" },
          { duration: 0.9, easing: [0.17, 0.55, 0.55, 1], delay: 0.5 }
        );
      });

      scroll(
        ({ y }) => {
          imageRef.current!.style.transform = `translateY(${y.progress * 20 - 10}%)`;
        },
        {
          target: containerRef.current,
          offset: ["start end", "end start"],
        }
      );
    }
  }, [headingRef]);

  return (
    <section
      ref={containerRef}
      id="info"
      className="relative h-[70vh] snap-start snap-always py-24 overflow-clip"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative container z-10 mix-blend-screen text-gray-50 w-full h-fit flex flex-col gap-6 justify-between">
        <p
          ref={headingRef}
          className="self-start text-[clamp(1rem,6vw,3rem)] text-gray-50 text-balance font-extrabold uppercase leading-none opacity-0 translate-x-[200px]"
        >
          Stroli Offers{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-500">
            creators
          </span>{" "}
          The Best Opportunity To Maximize Their Earnings
        </p>
        <p
          ref={paragraphRef}
          className="text-[clamp(1.5rem,4vw,1.75rem)] opacity-0 -translate-x-[200px]"
        >
          With our industry-leading low commission fee, creators keep 80% of
          their ad revenue. Join us and earn more from your content than
          anywhere else!
        </p>
      </div>
      <div className="fixed inset-0 top-50 h-full w-full">
        <div ref={imageRef} className="relative w-full h-full isolate">
          <img
            src="https://assets.stroli.io/images/hero-1.webp"
            alt="Hero image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};