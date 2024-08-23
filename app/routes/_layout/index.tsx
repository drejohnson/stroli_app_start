
import { createFileRoute } from "@tanstack/react-router";

import AnimatedSection from "@/components/animated-section";
import GradientBlob from "@/components/gradient-blob";
import RotatingWords from "@/components/rotating-words";
import { Intro } from "@/components/sections/intro";
import ParallaxGridScroll from "@/components/parallax-grid";
import { ScrollItems } from "@/components/scroll-items";
import { Explore } from "@/components/sections/explore";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {

  const items: string[] = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6",
    "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12"
  ];

  return (
    <main className="relative w-full min-h-screen">
      <Intro />
      <Explore />
      {/* <Explore /> */}
      {/* <section
        id="explore"
        className="relative w-full h-screen snap-start snap-always overflow-x-clip"
      >
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-6">
            Check Out{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-500">
              Exclusive
            </span>{" "}
            Content From These{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-300">
              Amazing Creators
            </span>
          </h2>
          <ScrollItems items={items} />
        </div>
        <GradientBlob
          fromColor="from-teal-400"
          toColor="to-rose-300"
          className="top-10 opacity-30 size-[50vw] -translate-x-1/5 -translate-y-1/5"
        />
        <GradientBlob
          fromColor="from-purple-300"
          toColor="to-cyan-300"
          className="bottom-[60%] left-[70%] opacity-30 size-[30vw]"
        />
      </section>
      <section className="relative w-full h-screen snap-start snap-always overflow-x-clip">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-6">
            Check Out{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-500">
              Exclusive
            </span>{" "}
            Content From These{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-300">
              Amazing Creators
            </span>
          </h2>
          <ScrollItems items={items} />
        </div>
        <GradientBlob fromColor="from-cyan-200" viaColor="via-sky-100" toColor="to-sky-200" className="size-1/2 top-0 left-2/4 opacity-40" />
        <GradientBlob fromColor="from-cyan-200" viaColor="via-rose-200" toColor="to-gray-100" className="size-4/12 top-12 left-0 opacity-40" />
        <GradientBlob fromColor="from-cyan-200" viaColor="via-slate-100" toColor="to-teal-100" className="size-8/12 bottom-0 right-0 opacity-40" />
      </section> */}
      <AnimatedSection className="bg-amber-300 h-screen snap-start snap-always">
        <h1 className="text-2xl font-bold text-gray-800">Section 1</h1>
      </AnimatedSection>
      <AnimatedSection className="bg-rose-300 h-screen snap-start snap-always">
        <h1 className="text-2xl font-bold text-gray-800">Section 2</h1>
      </AnimatedSection>
      <AnimatedSection className="bg-cyan-400 h-screen snap-start snap-always">
        <h1 className="text-2xl font-bold text-gray-800">Section 3</h1>
      </AnimatedSection>
    </main>
  );
}


