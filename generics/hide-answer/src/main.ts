import { UrlDetection } from "./lib/url-detection";
import { appendChaoxingMoocButton } from "./lib/app";

const urlDetection = UrlDetection();

if (urlDetection === "chaoxing-mooc") {
  appendChaoxingMoocButton();
}
