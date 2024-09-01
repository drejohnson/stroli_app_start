
import { createFileRoute } from "@tanstack/react-router";

import { Intro } from "@/components/sections/intro";
import { Explore } from "@/components/sections/explore";
import { GetStarted } from "@/components/sections/get-started";
import { Track } from "@/components/sections/track";
import { Info } from "@/components/sections/info";
import Faqs from "@/components/sections/faqs";
import { Cta } from "@/components/sections/cta";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Intro />
      <Explore />
      <GetStarted />
      <Track />
      <Info />
      <Faqs />
      <Cta />
    </main>
  );
}


