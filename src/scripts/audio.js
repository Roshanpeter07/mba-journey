import { siteConfig } from "./config.js";
import { select } from "./utils.js";

export function initAudio() {
  const audio = document.getElementById(siteConfig.audioElementId);
  const button = select("[data-audio-toggle]");
  if (!audio || !button) return;

  const source = audio.getAttribute("src");
  if (!source) {
    button.disabled = true;
    return;
  }

  button.disabled = false;
  const updateLabel = () => {
    const playing = !audio.paused;
    button.setAttribute("aria-pressed", String(playing));
    button.innerHTML = playing ? '<span aria-hidden="true">Ⅱ</span> Pause audio' : '<span aria-hidden="true">♪</span> Play audio';
  };

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try { await audio.play(); } catch { button.setAttribute("aria-pressed", "false"); }
    } else {
      audio.pause();
    }
    updateLabel();
  });
  audio.addEventListener("play", updateLabel);
  audio.addEventListener("pause", updateLabel);
  audio.addEventListener("ended", updateLabel);
}
