import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.css";
import CopyEntry from "../entry/copy-entry.vue";
import VideoEntry from "../entry/video-entry.vue";

export const appendCopyAllButton = () => {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href =
    "https://registry.npmmirror.com/@mdi/font/7.4.47/files/css/materialdesignicons.min.css";
  document.head.appendChild(css);

  const vuetify = createVuetify({});
  const app = createApp(CopyEntry);
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


export const appendPassVideoButton = () => {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href =
    "https://registry.npmmirror.com/@mdi/font/7.4.47/files/css/materialdesignicons.min.css";
  document.head.appendChild(css);

  const vuetify = createVuetify({});
  const app = createApp(VideoEntry);
  app.use(vuetify);

  const vidContainer = document.querySelector("#video-container") as HTMLElement;
  const host = document.createElement("div");
  host.id = "educoder-helper-video-entry";
  let target = document.body;
  // antRow.forEach((row) => {
  //   const innerDiv = row.querySelectorAll("div");
  //   innerDiv.forEach((div) => {
  //     if (div.className.includes("action-bar")) {
  //       target = div;
  //       return;
  //     }
  //   });
  // });
  const targetElement = vidContainer.parentElement?.parentElement?.parentElement;
  const firstChild = targetElement?.firstElementChild;
  if (targetElement && firstChild) {
    // 在 firstChild 之后插入新的元素
    targetElement.insertBefore(host, firstChild.nextSibling);
  } else {
    target.prepend(host);
  }

  // 创建一个 Shadow DOM
  // const shadowRoot = host.attachShadow({ mode: 'open' });

  // 创建一个新的 div 元素并添加到 shadowRoot
  // const rootElement = document.createElement('div');
  // shadowRoot.appendChild(rootElement);

  // 将 Vue 应用挂载到新的 div 元素
  // app.mount(rootElement);
  app.mount(host);
};
