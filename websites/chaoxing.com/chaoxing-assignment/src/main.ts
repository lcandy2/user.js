import { addMenuItem, addMenuItemLegacy, removeStyles, urlDetection, wrapElements } from "./lib";
import { appendApp } from "./app";

const urlDetect = urlDetection();

if (urlDetect === "homework") {
  wrapElements();
  removeStyles();
  appendApp();
}
if (urlDetect === "home") {
  addMenuItem();
}
if (urlDetect === "legacyHome") {
  addMenuItemLegacy()
}
