import useMeasure from "@/lib/use-measure";
import { useInView } from "@/lib/use-inview";
import GradientBlob from "../gradient-blob";
import { ParallaxGridScroll } from "../parallax-grid";
import type { Step } from "@/types";

const steps: Step[] = [
  {
    title: "STEP 1: UPLOAD",
    description: "Upload a vertical video that is at least 60 seconds.",
    image: "https://assets.stroli.io/images/mock-upload.webp",
    alt: "Upload",
    yTransform: [0, -20],
  },
  {
    title: "STEP 2: SHARE",
    description: "Promote your content to your fans.",
    image: "https://assets.stroli.io/images/mock-share.webp",
    alt: "Share",
    yTransform: [0, 10],
  },
  {
    title: "STEP 3: EARN",
    description: "Earn money from in-stream ads.",
    image: "https://assets.stroli.io/images/mock-ad.webp",
    alt: "Earn",
    yTransform: [0, -30],
  },
]

export const GetStarted = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const headingRef = useInView<HTMLHeadingElement>();

  return (
    <section
      ref={ref}
      id="get-started"
      className="relative min-h-screen h-full snap-start snap-always py-24 overflow-clip"
    >
      <h3
        ref={headingRef}
        className="container mx-auto px-4 text-[clamp(1.5rem,4vw,3rem)] bg-clip-text mix-blend-darken text-gray-950 text-balance font-extrabold uppercase leading-tight translate-x-[-100px] opacity-0 mb-8"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-400">
          Monetize
        </span>{" "}
        Your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-300 to-cyan-500">
          Content
        </span>{" "}
        Immediately In Three Easy Steps
      </h3>
      <div className="container mx-auto px-4 overflow-hidden">
        <ParallaxGridScroll items={steps} />
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
