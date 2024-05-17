import { addMenuItem, removeStyles, urlDetection, wrapElements } from "./lib";
import { appendApp } from "./app";

if (urlDetection() === "homework") {
  wrapElements();
  removeStyles();
  appendApp();
}
if (urlDetection() === "home") {
  addMenuItem();
}
