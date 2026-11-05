import { conversations } from "../../data/conversations.js";
import { select } from "../utils.js";

export function initChat() {
  const placeholder = select("[data-chat-placeholder]");
  if (!placeholder || conversations.length) return;
  placeholder.dataset.empty = "true";
}
