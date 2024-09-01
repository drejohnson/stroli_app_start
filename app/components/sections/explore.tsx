import {
  useRef,
  useMemo,
  useEffect,
} from "react";
import { animate } from "motion";
import { AnimatedCard } from "@/components/animated-cards";
import useMeasure from "@/lib/use-measure";
import { useInView } from "@/lib/use-inview";
import type { Show } from "@/types";
import GradientBlob from "../gradient-blob";

// TODO: Get data from DB
const shows: Show[] = [
  {
    title: "Rob Crazy",
    image: "https://assets.stroli.io/images/rob-crazy.webp",
    link: "/",
  },
  {
    title: "Mr. Earls Adventures",
    image: "https://assets.stroli.io/images/mr-earl.webp",
    link: "/",
  },
  {
    title: "Everyday Is Friday Show",
    image: "https://assets.stroli.io/images/everyday-is-friday.webp",
    link: "/",
  },
  {
    title: "TS4L Show",
    image: "https://assets.stroli.io/images/ts4l.webp",
    link: "/",
  },
  {
    title: "50 Fitch TV",
    image: "https://assets.stroli.io/images/50-fitch-tv.webp",
    link: "/",
  },
  {
    title: "Two36 Films",
    image: "https://assets.stroli.io/images/two-36.webp",
    link: "/",
  },
];

export const Explore = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const headingRef = useInView<HTMLHeadingElement>();
  const doubledShows = useMemo(() => [...shows, ...shows], []);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const viewportWidth = container.offsetWidth;

    const animation = animate(
      container,
      { transform: [`translateX(0px)`, `translateX(-${scrollWidth / 2}px)`] },
      {
        duration: 30,
        easing: "linear",
        repeat: Infinity,
      }
    );

    return () => animation.stop();
  }, [doubledShows]);

  return (
    <section
      ref={ref}
      id="explore"
      className="relative min-h-screen snap-start snap-always py-24 overflow-clip"
    >
      <h3
        ref={headingRef}
        className="container mx-auto px-4 text-[clamp(1.5rem,4vw,3rem)] bg-clip-text mix-blend-darken text-gray-950 text-balance font-extrabold uppercase leading-tight translate-x-[-100px] opacity-0 mb-8"
      >
        Check Out{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-500">
          Exclusive
        </span>{" "}
        Content From These{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-300">
          Amazing Creators
        </span>
      </h3>
      <div className="container mx-auto px-4 overflow-hidden">
        <div ref={containerRef} className="flex">
          {doubledShows.map((show, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-2/3 md:w-1/5 px-2 sm:px-3"
            >
              <AnimatedCard show={show} width={width} />
            </div>
          ))}
        </div>
      </div>
      <GradientBlob
        fromColor="from-teal-400"
        toColor="to-rose-300"
        className="absolute top-10 opacity-30 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] -translate-x-1/5 -translate-y-1/5"
      />
      <GradientBlob
        fromColor="from-purple-300"
        toColor="to-cyan-300"
        className="absolute bottom-[60%] left-[70%] opacity-30 w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw]"
      />
    </section>
  );
};
