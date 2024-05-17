import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { addMenuItem, extractTasks, urlDetection, wrapElements } from "./lib";

if (urlDetection() === "homework") {
  wrapElements();
  console.log(extractTasks());
  createApp(App).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })(),
  );
}
if (urlDetection() === "home") {
  addMenuItem();
}
