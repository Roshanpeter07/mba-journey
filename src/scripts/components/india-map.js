import { routes } from "../../data/routes.js";
import { select } from "../utils.js";

export function initIndiaMap() {
  const placeholder = select("[data-route-placeholder]");
  if (!placeholder || routes.length) return;
  placeholder.dataset.empty = "true";
}
