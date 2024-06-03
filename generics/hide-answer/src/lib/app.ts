import { createApp } from "vue";
import ChaoxingMooc from "../entry/chaoxing-mooc.vue";
import { SnackbarService } from "vue3-snackbar";
// import.meta.env.DEV && import("vue3-snackbar/style");

export const appendChaoxingMoocButton = () => {
  const app = createApp(ChaoxingMooc);

  app.use(SnackbarService);

  const targetElement = document.querySelector(".subNav");
  if (targetElement) {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.zhimg.com/vue3-snackbar@2.2.2/dist/style.css";
    document.head.appendChild(css);

    const toggleButton = document.createElement("div");
    toggleButton.className = "sub-button fr";
    toggleButton.id = "submitFocus";
    toggleButton.setAttribute("tabIndex", "-1");
    targetElement.appendChild(toggleButton);

    app.mount(toggleButton);
  }

  // const antRow = document.querySelectorAll(".ant-row");
  // const host = document.createElement("div");
  // let target = document.body;
  // antRow.forEach((row) => {
  //   const innerDiv = row.querySelectorAll("div");
  //   innerDiv.forEach((div) => {
  //     if (div.className.includes("action-bar")) {
  //       target = div;
  //       return;
  //     }
  //   });
  // });
  // target.prepend(host);

  // 创建一个 Shadow DOM
  // const shadowRoot = host.attachShadow({ mode: 'open' });

  // 创建一个新的 div 元素并添加到 shadowRoot
  // const rootElement = document.createElement('div');
  // shadowRoot.appendChild(rootElement);

  // 将 Vue 应用挂载到新的 div 元素
  // app.mount(rootElement);
  // app.mount(host);
};
