import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Friedrichshain } from "./screens/Friedrichshain";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Friedrichshain />
  </StrictMode>,
);
