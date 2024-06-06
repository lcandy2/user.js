
// Define the structure of the instances in UE.instants
interface UEInstance {
  options?: {
    disablePasteImage?: boolean;
  };
  removeListener?: (eventName: string, listener: Function) => void;
}

// Assuming UE is defined somewhere globally or imported
declare const UE: {
  instants: Record<string, UEInstance>;
};

// Define or import editorPaste
declare const editorPaste: (event: Event) => void;

export const removeCopyLimits = () => {
  document.body.removeAttribute("onselectstart");
  document.documentElement.style.userSelect = "unset";
  if (UE && UE.instants && typeof UE.instants === 'object') {
    for (const [key, instance] of Object.entries(UE.instants)) {
      if (instance.options) {
        instance.options.disablePasteImage = false;
      }
      if (instance.removeListener) {
        instance.removeListener('beforepaste', editorPaste);
      }
    }
  }
  console.info("[Chaoxing Copy Helper] Removed copy limits.");
};
