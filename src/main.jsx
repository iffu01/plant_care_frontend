import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Banner from "./Banner";
import BannerCard from "./BannerCard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Banner />
    <BannerCard />
  </StrictMode>
);
