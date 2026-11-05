import { selectAll } from "./utils.js";

export function initNavigation() {
  const links = selectAll('.site-nav a[href^="#"]');
  if (!("IntersectionObserver" in window) || !links.length) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -65% 0px" });

  sections.forEach((section) => observer.observe(section));
}
