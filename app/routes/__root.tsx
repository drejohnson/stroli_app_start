import { createRootRoute } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";

import { seo } from "@/utils/seo";

import "unfonts.css";
// @ts-ignore
import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    ...seo({
      title:
        "Stroli - Content Monetization platform for Creators",
      description: "A content monetization platform for creators",
      keywords: "content, monetization, social, shorts, reels, stories, video, original, curated, content creators, influencers"
    }),
  ],
  links: () => [
    { rel: "preload", href: appCss, as: "style" },
    { rel: "stylesheet", href: appCss },
    { rel: "icon", href: "/favicon.ico" },
  ],
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <p className="flex h-dvh w-full items-center justify-center bg-background text-foreground">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl">404</h1>
          <span className="h-10 w-px bg-accent" />
          <span className="text-sm">This page could not be found</span>
        </div>
      </p>
    );
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <div className="grid grid-rows-[auto_1fr]">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
