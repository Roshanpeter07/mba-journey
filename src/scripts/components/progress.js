import { chapters } from "../../data/chapters.js";
import { select } from "../utils.js";

export function initProgress() {
  const count = select("[data-chapter-count]");
  if (!count) return;
  const total = chapters.length;
  count.textContent = total === 0 ? "Chapter content: not added" : `${total} chapter${total === 1 ? "" : "s"} added`;
}
