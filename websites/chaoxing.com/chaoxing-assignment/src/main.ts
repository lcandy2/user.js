import {
  addMenuItem,
  addMenuItemExam, addMenuItemExamLegacy,
  addMenuItemLegacy,
  extractExams, keepRemoveHtmlStyle, removeScripts,
  removeStyles,
  urlDetection,
  wrapElements
} from "./lib";
import { appendApp } from "./app";

const urlDetect = urlDetection();

if (urlDetect === "homework") {
  wrapElements();
  removeStyles();
  removeScripts();
  appendApp();
}
if (urlDetect === "exam") {
  wrapElements();
  removeStyles();
  removeScripts();
  keepRemoveHtmlStyle();
  appendApp();
}
if (urlDetect === "home") {
  addMenuItemExam();
  addMenuItem();
}
if (urlDetect === "legacyHome") {
  addMenuItemExamLegacy()
  addMenuItemLegacy()
}
