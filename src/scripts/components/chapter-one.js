import { chapters } from "../../data/chapters.js";
import { conversations } from "../../data/conversations.js";
import { friends } from "../../data/friends.js";

const select = (selector, root = document) => root.querySelector(selector);

function makeTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function renderMessages(target, items) {
  if (!target) return;

  items.forEach((message, index) => {
    const item = document.createElement("li");
    item.className = "opening-message";
    item.style.animationDelay = `${180 + index * 520}ms`;

    const bubble = document.createElement("article");
    bubble.className = "opening-message__bubble";

    const heading = document.createElement("div");
    heading.className = "opening-message__meta";
    heading.append(makeTextElement("span", "opening-message__speaker", message.speakerName));

    const time = document.createElement("time");
    time.className = "opening-message__time";
    time.dateTime = message.dateTime;
    time.textContent = message.timeLabel;
    heading.append(time);

    bubble.append(heading, makeTextElement("p", "opening-message__text", message.text));
    item.append(bubble);
    target.append(item);
  });
}

function renderTitle(target, chapter) {
  if (!target) return;
  target.replaceChildren();
  target.setAttribute("aria-label", chapter.title);

  chapter.titleLines.forEach((line) => {
    const span = makeTextElement("span", "chapter__title-line", line);
    target.append(span);
  });
}

function renderFriends(target, entries) {
  if (!target) return;
  target.replaceChildren();

  entries.forEach((friend) => {
    const item = document.createElement("li");
    item.className = "friend-list__item";
    item.append(makeTextElement("span", "friend-list__name", friend.name));
    target.append(item);
  });
}

export function initChapterOne() {
  const chapter = chapters.find((entry) => entry.id === "chapter-1");
  if (!chapter) return;

  const openingMessages = conversations.filter((message) => message.chapterId === chapter.id);
  renderMessages(select("[data-opening-messages]"), openingMessages);

  const number = select("[data-chapter-number]");
  if (number) number.textContent = chapter.number;

  renderTitle(select("[data-chapter-title]"), chapter);

  const date = select("[data-chapter-date]");
  if (date) {
    const time = document.createElement("time");
    time.dateTime = chapter.dateTime;
    time.textContent = chapter.dateLabel;
    date.replaceChildren(time);
  }

  renderFriends(select("[data-friends]"), friends);
}
