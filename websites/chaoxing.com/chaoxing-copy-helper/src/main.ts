import { removeCopyLimits } from "./lib/remove-copy-limits";
import { addBranding } from "./lib/branding";
import { removeDebuggerLimit } from "./lib/remove-debugger-limit";

setTimeout(() => {
  removeDebuggerLimit();
  removeCopyLimits();
  addBranding();
}, 1000);
