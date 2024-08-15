import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import AnimatedSection from "@/components/animated-section";
import VideoBackground from "@/components/video-bg";
import { AnimatedTextLoop } from "@/components/animated-text";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn("GET", () => {
  return readCount();
});

const updateCount = createServerFn("POST", async (addBy: number) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + addBy}`);
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="bg-amber-300 h-screen snap-start snap-always">
        <VideoBackground
          src="https://assets.stroli.io/output-1440p-2btr-bg-video.mp4"
          fallbackImage=""
          inViewOptions={{ amount: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            We create{" "}
            <AnimatedTextLoop
              words={["websites", "apps", "designs", "experiences"]}
              interval={2000}
            />
          </h1>
        </VideoBackground>
      </section>
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
