import { about } from "./about";

export type AboutChapterPosition =
  | "left"
  | "right"
  | "center"
  | "bottom-left"
  | "top-left"
  | "top-right"
  | "bottom-right";

export interface AboutChapter {
  id: string;
  number: string;
  kicker: string;
  title: string;
  text: string;
  position: AboutChapterPosition;
}

export const aboutFrames = Array.from(
  { length: 32 },
  (_, index) => `/images/about/frame-${String(index + 1).padStart(2, "0")}.webp`,
);

export const aboutChapters: AboutChapter[] = [
  {
    id: "porque",
    number: "01",
    kicker: "Filosofía",
    title: about.philosophy[0].title,
    text: about.philosophy[0].text,
    position: "left",
  },
  {
    id: "mision",
    number: "02",
    kicker: "Lo que nos mueve",
    title: about.cards[0].title,
    text: about.cards[0].text,
    position: "right",
  },
  {
    id: "vision",
    number: "03",
    kicker: "Hacia dónde vamos",
    title: about.cards[1].title,
    text: about.cards[1].text,
    position: "center",
  },
  {
    id: "objetivo",
    number: "04",
    kicker: "Lo que buscamos",
    title: about.cards[2].title,
    text: about.cards[2].text,
    position: "bottom-left",
  },
  {
    id: "como",
    number: "05",
    kicker: "Filosofía",
    title: about.philosophy[1].title,
    text: about.philosophy[1].text,
    position: "bottom-right",
  },
  {
    id: "que",
    number: "06",
    kicker: "Filosofía",
    title: about.philosophy[2].title,
    text: about.philosophy[2].text,
    position: "center",
  },
];
