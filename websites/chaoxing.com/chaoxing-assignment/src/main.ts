import {
  addMenuItem,
  addMenuItemExam, addMenuItemExamLegacy,
  addMenuItemLegacy,
  extractExams,
  removeStyles,
  urlDetection,
  wrapElements
} from "./lib";
import { appendApp } from "./app";

const urlDetect = urlDetection();

if (urlDetect === "homework") {
  wrapElements();
  removeStyles();
  appendApp();
}
if (urlDetect === "exam") {
  wrapElements();
  removeStyles();
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
