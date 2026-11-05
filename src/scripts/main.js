import { initScrollProgress } from "./scroll.js";
import { initAnimations } from "./animations.js";
import { initNavigation } from "./navigation.js";
import { initChapterOne } from "./components/chapter-one.js";

document.documentElement.classList.add("js");

initScrollProgress();
initAnimations();
initNavigation();
initChapterOne();
