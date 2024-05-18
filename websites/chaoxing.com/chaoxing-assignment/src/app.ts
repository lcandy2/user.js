// Vuetify
import "vuetify/dist/vuetify.css";
import { createVuetify } from "vuetify";
import { createApp } from "vue";
import App from "./App.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
// import '@mdi/font/css/materialdesignicons.css'
import { aliases, md } from "vuetify/iconsets/md";
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

export const appendApp = () => {
  const vuetify = createVuetify({
    // components,
    // directives,
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
  });
  // const vuetify = createVuetify()
  createApp(App)
    .use(vuetify)
    .mount(
      (() => {
        const app = document.createElement("div");
        document.body.append(app);
        return app;
      })(),
    );
};
