// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from "vue";
import App from "./App.vue";
import '@mdi/font/css/materialdesignicons.css'

export const appendApp = () => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    }
  })
  createApp(App).use(vuetify).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })(),
  );
}
