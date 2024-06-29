import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";

export const appendApp = (element: HTMLElement) => {
  const vuetify = createVuetify({});
  const app = createApp(App);
  app.use(vuetify);

  app.mount(element);
};
