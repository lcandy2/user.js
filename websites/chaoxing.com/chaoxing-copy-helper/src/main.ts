import { removeCopyLimits } from "./lib/remove-copy-limits";
import { addBranding } from "./lib/branding";
import { removeDebuggerLimit } from "./lib/remove-debugger-limit";

setTimeout(() => {
  removeDebuggerLimit();
  try {
    removeCopyLimits();
  } catch (error) {
    console.error("[Chaoxing Copy Helper] Failed to remove copy limits.", error);
  }
  addBranding();
}, 1000);
