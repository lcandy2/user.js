import { observerAdRemove, observerCopyAll, observerPassVideo, removeBanner } from "./lib";
import { postCheckIn } from "./lib/check-in";

const href = window.location.href;
const pathname = window.location.pathname;

if (href.includes("tasks")) {
  observerCopyAll();
}
if (href.includes("video_info")) {
  observerPassVideo();
}
// if (pathname === "/") {
  observerAdRemove();
// }
postCheckIn();


console.debug("[educoder-helper] main.ts loaded!");
