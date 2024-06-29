// 定义一个函数，用于添加元素
import { appendApp } from "./app";
import "vuetify/dist/vuetify.css";

function addElement() {
  // 选中全部的ul.operate
  const uls = document.querySelectorAll("ul.operate");
  uls.forEach((ul) => {
    const file = (ul as HTMLUListElement).parentElement?.parentElement;
    if (!file) return;
    const isBook = file.getAttribute("type") === "book";
    const isAFolder = file.getAttribute("type") === "afolder";
    const hasObjectID = file.getAttribute("objectid") !== "";
    if (isBook || isAFolder || !hasObjectID) return;
    // 检查是否已经有了chaoxing-downloader
    if (!ul.querySelector("[chaoxing-downloader]")) {
      // 创建新的<a>元素
      const li = document.createElement("li");
      li.className = "operate_down";
      li.setAttribute("chaoxing-downloader", "");
      // 添加到ul中
      ul.appendChild(li);
      appendApp(li);
    }
  });
}

// 在页面首次加载完成后，先执行一次添加元素的操作
addElement();

// 创建一个观察器实例
const observer = new MutationObserver((mutationsList, observer) => {
  // 遍历所有的变化
  for (let mutation of mutationsList) {
    // 如果是子节点列表的变化
    if (mutation.type === "childList") {
      // 再次执行添加元素的操作
      addElement();
    }
  }
});

// 配置观察选项
const config = { childList: true, subtree: true };

// 开始观察document
observer.observe(document, config);
