import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";
import { StrictMode } from "react";

const router = createRouter();

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>
);
