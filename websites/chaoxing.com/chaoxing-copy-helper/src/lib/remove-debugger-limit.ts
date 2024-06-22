export const removeDebuggerLimit = () => {
  const constructorHook = Function.prototype.constructor;
  Function.prototype.constructor = (s: any) => {
    if (s === "debugger") {
      return () => {};
    }
    return constructorHook(s);
  };
}
