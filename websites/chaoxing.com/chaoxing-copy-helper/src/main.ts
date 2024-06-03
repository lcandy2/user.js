import { removeCopyLimits } from "./lib/remove-copy-limits";
import { addBranding } from "./lib/branding";

setTimeout(() => {
  removeCopyLimits();
  addBranding();
}, 1000);
