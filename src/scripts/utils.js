export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const select = (selector, root = document) => root.querySelector(selector);
export const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];
