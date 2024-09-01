import React, { useRef } from "react";
import { useInView } from "@/lib/use-inview";
import GradientBlob from "../gradient-blob";

const ImageContainer = React.memo(({ src, alt, width, height, className }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => (
  <div className={className}>
    <img src={src} width={width} height={height} alt={alt} className="w-full" />
  </div>
));

ImageContainer.displayName = "ImageContainer";

export const Track = () => {
  const headingRef = useInView<HTMLHeadingElement>();

  return (
    <section
      id="track"
      className="relative min-h-screen h-full snap-start snap-always py-24 overflow-clip"
    >
      <h3
        ref={headingRef}
        className="container mx-auto px-4 text-[clamp(2rem,6vw,3rem)] text-gray-950 text-balance font-extrabold uppercase leading-none mb-8 translate-x-[-100px] opacity-0"
      >
        Track your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-500">
          Ad Revenue
        </span>{" "}
        and{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-500">
          Content Insights
        </span>
      </h3>
      <p className="container mx-auto px-4 text-[clamp(1.5rem,4vw,1.75rem)] text-gray-950 text-balance mb-12">
        Our platform empowers creators with comprehensive tools to monitor
        their earnings in real-time and analyze detailed insights on their
        content's performance. Make data-driven decisions to maximize your
        success.
      </p>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center md:flex-row gap-8">
        <ImageContainer
          src="https://assets.stroli.io/images/mock-mobile-analytics.webp"
          width={200}
          height={400}
          alt="Mobile Analytics"
          className="flex items-center justify-center w-[50vw] md:w-[30vw] md:max-w-[20vw]"
        />
        <ImageContainer
          src="https://assets.stroli.io/images/mock-desktop-analytics.webp"
          width={450}
          height={250}
          alt="Desktop Analytics"
          className="flex items-center justify-center w-[80vw] md:w-[45vw]"
        />
      </div>
      <GradientBlob
        fromColor="from-cyan-300"
        viaColor="via-blue-200"
        toColor="to-green-200"
        className="absolute w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] top-0 right-0"
      />
      <GradientBlob
        fromColor="from-cyan-300"
        viaColor="via-pink-200"
        toColor="to-red-100"
        className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bottom-0 left-0"
      />
      <GradientBlob
        fromColor="from-cyan-300"
        viaColor="via-purple-100"
        toColor="to-lime-100"
        className="absolute w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] bottom-0 right-0"
      />
      <GradientBlob
        fromColor="from-cyan-300"
        viaColor="via-slate-200"
        toColor="to-emerald-300"
        className="absolute w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] top-[-2vw] left-0"
      />
    </section>
  );
};