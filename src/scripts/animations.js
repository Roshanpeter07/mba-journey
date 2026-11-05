import { prefersReducedMotion, selectAll } from "./utils.js";

export function initAnimations() {
  const targets = selectAll("[data-reveal]");
  if (!targets.length) return;
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

  targets.forEach((target) => observer.observe(target));
}
