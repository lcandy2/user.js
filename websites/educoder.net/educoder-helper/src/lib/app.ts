import { createApp } from "vue";
import { createVuetify } from "vuetify";
import CopyAll from "../components/copy-all.vue";
import "vuetify/dist/vuetify.css";

export const appendCopyAllButton = () => {
  const vuetify = createVuetify({});
  const app = createApp(CopyAll);
  app.use(vuetify);

  const antRow = document.querySelectorAll(".ant-row");
  const host = document.createElement("div");
  let target = document.body;
  antRow.forEach((row) => {
    const innerDiv = row.querySelectorAll("div");
    innerDiv.forEach((div) => {
      if (div.className.includes("action-bar")) {
        target = div;
        return;
      }
    });
  });
  target.prepend(host);

  // 创建一个 Shadow DOM
  // const shadowRoot = host.attachShadow({ mode: 'open' });

  // 创建一个新的 div 元素并添加到 shadowRoot
  // const rootElement = document.createElement('div');
  // shadowRoot.appendChild(rootElement);

  // 将 Vue 应用挂载到新的 div 元素
  // app.mount(rootElement);
  app.mount(host);
};
