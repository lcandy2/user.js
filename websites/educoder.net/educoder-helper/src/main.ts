import { observerAdRemove, observerCopyAll, observerPassVideo, removeBanner } from "./lib";

const href = window.location.href;
const pathname = window.location.pathname;

if (href.includes("tasks")) {
  observerCopyAll();
}
if (href.includes("video_info")) {
  observerPassVideo();
}
if (pathname === "/") {
  observerAdRemove();
}


console.info("loaded");
