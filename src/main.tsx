import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

(function () {
  const img = new Image();
  img.src = "/natura-logo.jpeg";
  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, 0, 0, 64, 64);
    const dataURL = canvas.toDataURL("image/png");
    const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    links.forEach((link) => { link.href = dataURL; });
  };
})();

createRoot(document.getElementById("root")!).render(<App />);
