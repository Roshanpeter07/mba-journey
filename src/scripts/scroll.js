import { select } from "./utils.js";

export function initScrollProgress() {
  const indicator = select(".reading-progress");
  const bar = select(".reading-progress__bar");
  if (!indicator || !bar) return;

  let frame = 0;
  const update = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 100;
      bar.style.transform = `scaleX(${progress / 100})`;
      indicator.setAttribute("aria-valuenow", String(Math.round(progress)));
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
}
