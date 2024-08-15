import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import unfonts from "unplugin-fonts/vite";
// import MillionLint from "@million/lint";
import type { Plugin } from "vinxi";

export default defineConfig({
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      unfonts({
        fontsource: {
          families: ["Outfit Variable"],
        },
      }) as Plugin,
      // MillionLint.vite({
      //   rsc: true,
      //   filter: {
      //     include: "./app/**/*.{mtsx,mjsx,tsx,jsx}",
      //   },
      // }),
    ],
  },
  routers: {
    client: {
      vite: {
        plugins: () => [
          // unfonts({
          //   google: {
          //     families: ["Outfit", "Montserrat"],
          //   },
          // }) as Plugin,
        ],
      },
    },
  },
});
