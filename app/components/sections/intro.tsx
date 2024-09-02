import React, { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import VideoBackground from "@/components/video-bg";
import { AnimatedTextLoop } from "@/components/animated-text";
import { ScrollToButton } from "@/components/scroll-to-button";
import { scroll, animate } from "motion";
import { useInView } from "@/hooks/use-inview";

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const headingRef = useInView<HTMLHeadingElement>();
  const pRef = useInView<HTMLParagraphElement>();
  const buttonRef = useInView<HTMLDivElement>();

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const parallaxEffect = scroll(
      animate(videoRef.current, { y: ["0", "90vh"] }),
      {
        target: containerRef.current,
        offset: ["start start", "end start"],
      }
    );

    return () => {
      parallaxEffect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative h-screen snap-start snap-always overflow-clip"
    >
      <div ref={videoRef} className="absolute inset-0 size-full">
        <VideoBackground
          videoSrc="https://assets.stroli.io/videos/output-1440p-2btr-bg-video.mp4"
          poster="https://assets.stroli.io/images/hero.jpg"
        ></VideoBackground>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1
          ref={headingRef}
          className="flex flex-col gap-4 w-full text-[clamp(1.75rem,8vw,3rem)] font-display font-extrabold uppercase leading-none text-white md:self-start p-8 mb-4 translate-y-[-100px] opacity-0"
        >
          <span className="md:self-start">We Monetize Content</span>
          <span className="md:self-end">
            <AnimatedTextLoop
              words={["Facebook", "Instagram", "Snapchat", "TikTok"]}
            />{" "}
            Can't
          </span>
        </h1>
        <div className="flex flex-col gap-4 w-full p-8">
          <p
            ref={pRef}
            className="text-xl text-gray-50 text-balance translate-x-[-100px] opacity-0"
          >
            Start earning now in three easy steps
          </p>
          <div ref={buttonRef} className="translate-x-[100px] opacity-0">
            <ScrollToButton
              targetSection="get-started"
              className="rounded-full bg-white hover:bg-cyan-500 text-cyan-500 hover:text-white font-bold text-center w-fit py-2 px-4 md:py-4 md:px-8"
            >
              Learn More
            </ScrollToButton>
          </div>
          <ScrollToButton
            targetSection="explore"
            className="text-primary-foreground self-center hidden md:items-end md:self-end md:block"
          >
            <FaArrowDown size={42} />
          </ScrollToButton>
        </div>
      </div>
    </section>
  );
};

export default Intro;
