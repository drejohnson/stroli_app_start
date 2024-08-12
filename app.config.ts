import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import unfonts from "unplugin-fonts/vite";
// import MillionLint from "@million/lint";
import type { Plugin } from "vinxi";

export default defineConfig({
  vite: {
    plugins: (...args) => [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      // MillionLint.vite({
      //   rsc: true,
      //   filter: {
      //     include: "./app/**/*.{mtsx,mjsx,tsx,jsx}",
      //   },
      // }),
      unfonts({
        google: {
          families: ["Outfit", "Montserrat"],
        },
      }) as Plugin,
    ],
  },
});
