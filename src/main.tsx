import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DKMain } from "./components";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DKMain />
  </StrictMode>
);
