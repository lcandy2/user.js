import { appendCopyAllButton } from "./app";

export const observerCopyAll = () => {
  // 创建一个观察器实例
  const observer = new MutationObserver((mutationsList, observer) => {
    // 检查所有的 DOM 变化
    for (let mutation of mutationsList) {
      // 如果是子节点变化
      if (mutation.type === "childList") {
        // 检查是否有 div.ant-row 元素
        const antRow = document.querySelector(".ant-row");
        if (antRow) {
          // 执行 appendCopyAllButton() 并取消监听
          appendCopyAllButton();
          observer.disconnect();
          break;
        }
      }
    }
  });

  // 配置观察器选项
  const config = { childList: true, subtree: true };

  // 开始观察 body 元素
  observer.observe(document, config);
};
