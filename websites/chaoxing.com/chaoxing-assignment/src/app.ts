// Vuetify
import "vuetify/dist/vuetify.css";
import { createVuetify } from "vuetify";
import { createApp } from "vue";
import App from "./App.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import.meta.env.DEV && import("./lib/material-icon-fonts.css");
import { aliases, md } from "vuetify/iconsets/md";
import { extractExams, removeStyles, urlDetection, wrapElements } from "./lib";
import TasksList from "./components/tasks-list.vue";
import ExamsList from "./components/exams-list.vue";
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
  let app = App;
  const urlDetect = urlDetection();
  if (urlDetect === "homework") {
    app = TasksList;
  }
  if (urlDetect === "exam") {
    app = ExamsList;
  }
  createApp(app)
    .use(vuetify)
    .mount(
      (() => {
        const app = document.createElement("div");
        document.body.append(app);
        return app;
      })(),
    );
};
