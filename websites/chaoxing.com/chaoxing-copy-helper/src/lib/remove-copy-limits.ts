// export const addListenerForRemoveCopyLimits = () => {
//   let timer: number = -1;
//
//   // 创建一个回调函数来处理 DOM 变化
//   const callback = (mutationsList: MutationRecord[]) => {
//     // 如果有定时器，清除它
//     if (timer >= 0) {
//       clearTimeout(timer);
//     }
//
//     // 检查是否有实际的变动
//     const hasChanges = mutationsList.some(mutation => mutation.type === 'childList' || mutation.type === 'attributes');
//     if (hasChanges) {
//       // 设置一个新的定时器
//       timer = window.setTimeout(() => {
//         // 在这里执行你的代码
//         observer.disconnect();
//         removeCopyLimits();
//       }, 700);
//     }
//   };
//
//   // 创建一个新的 MutationObserver 对象
//   const observer = new MutationObserver(callback);
//
//   // 开始监听整个文档的变化，包括子树和属性的变化
//   observer.observe(document, { attributes: true, childList: true, subtree: true });
// };

export const removeCopyLimits = () => {
  document.body.removeAttribute("onselectstart");
  document.documentElement.style.userSelect = "unset";
  UE.EventBase.prototype.fireEvent = () => {
    console.info("[Chaoxing Copy Helper] Removed paste limits.");
    return null;
  };
  console.info("[Chaoxing Copy Helper] Removed copy limits.");
};
