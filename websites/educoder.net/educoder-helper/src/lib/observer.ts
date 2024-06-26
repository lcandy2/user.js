import { appendCopyAllButton, appendPassVideoButton } from "./app";
import { removeAffix, removeBanner, removeModal } from "./ad";
import { removeContextMenuLimit, removeUserSelectLimit } from "./exercise";

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

export const observerPassVideo = () => {
  // 创建一个观察器实例
  const observer = new MutationObserver((mutationsList, observer) => {
    // 检查所有的 DOM 变化
    for (let mutation of mutationsList) {
      // 如果是子节点变化
      if (mutation.type === "childList") {
        // 检查是否有 div.#video-container 元素
        const vidContainer = document.querySelector("#video-container");
        const vidEntry = document.querySelector("#educoder-helper-video-entry");
        if (vidContainer && !vidEntry) {
          // 执行 appendCopyAllButton() 并取消监听
          appendPassVideoButton();
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

export const observerPassVideoTitleChange = () => {
  // 创建一个观察器实例
  const observer = new MutationObserver((mutationsList, observer) => {
    // 检查所有的 DOM 变化
    for (let mutation of mutationsList) {
      // 如果是子节点变化
      if (mutation.type === "childList") {
        // 检查是否有 div.#video-container 元素
        const vidContainer = document.querySelector("#video-container");
        const vidEntry = document.querySelector("#educoder-helper-video-entry");
        if (vidContainer && !vidEntry) {
          // 执行 appendCopyAllButton() 并取消监听
          appendPassVideoButton();
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

export const observerAdRemove = () => {
  // 创建一个观察器实例
  const observer = new MutationObserver((mutationsList, observer) => {
    // 检查所有的 DOM 变化
    for (let mutation of mutationsList) {
      // 如果是子节点变化
      if (mutation.type === "childList") {
        // 检查是否有 div.#video-container 元素
        const headerElement = document.querySelector('.ant-layout-header');
        const modalElement = document.querySelector('.selfdomModal___doNCF');
        const affixElement = document.querySelector('.affixContainer___CWtV9');
        if (headerElement || modalElement || affixElement) {
          // 执行 appendCopyAllButton() 并取消监听
          removeBanner();
          removeModal();
          removeAffix();
          // observer.disconnect();
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

export const observerExerciseCopyLimit = () => {
  // 创建一个观察器实例
  const observer = new MutationObserver((mutationsList, observer) => {
    // 检查所有的 DOM 变化
    for (let mutation of mutationsList) {
      // 如果是子节点变化
      if (mutation.type === "childList") {
        // 检查是否有 div.#video-container 元素
        const qItemElement = document.querySelector('.questionItem___q6Hgu');
        // const modalElement = document.querySelector('.selfdomModal___doNCF');
        // const affixElement = document.querySelector('.affixContainer___CWtV9');
        if (qItemElement) {
          // 执行 appendCopyAllButton() 并取消监听
          removeUserSelectLimit();
          removeContextMenuLimit();
          // observer.disconnect();
          break;
        }
      }
    }
  });

  // 配置观察器选项
  const config = { childList: true, subtree: true };

  // 开始观察 body 元素
  observer.observe(document, config);
}
