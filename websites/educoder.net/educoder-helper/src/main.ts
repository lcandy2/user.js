import { observerCopyAll, observerPassVideo } from "./lib";

const href = window.location.href;

if (href.includes("tasks")) {
  observerCopyAll();
}
if (href.includes("video_info")) {
  observerPassVideo();
}


console.info("loaded");
