import { initScrollProgress } from "./scroll.js";
import { initAnimations } from "./animations.js";
import { initNavigation } from "./navigation.js";
import { initAudio } from "./audio.js";
import { initChat } from "./components/chat.js";
import { initIndiaMap } from "./components/india-map.js";
import { initProgress } from "./components/progress.js";

document.documentElement.classList.add("js");

initScrollProgress();
initAnimations();
initNavigation();
initAudio();
initChat();
initIndiaMap();
initProgress();
