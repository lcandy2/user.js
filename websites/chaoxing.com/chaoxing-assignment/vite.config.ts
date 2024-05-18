import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vuetify(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "【学习通任务一览】- 作业 与 考试 列表 | 电脑端快速查看，绝不错过任何作业与考试",
        namespace:
          "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
        source:
          "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
        match: [
          "*://mooc1-api.chaoxing.com/work/stu-work*",
          "*://i.chaoxing.com/base*",
        ],
        "run-at": "document-end",
      },
      build: {
        externalGlobals: {
          vue: cdn
            .npmmirror("Vue", "dist/vue.global.prod.js")
            .concat(util.dataUrl(";window.Vue=Vue;")),
          vuetify: cdn.npmmirror("Vuetify", "dist/vuetify.min.js"),
          // "vuetify/components": "Vuetify",
          // "vuetify/directives": "Vuetify",
          // "vuetify/iconsets/md": "Vuetify",
        },
        externalResource: {
          "vuetify/dist/vuetify.css": cdn.npmmirror(
            "VuetifyStyle",
            "dist/vuetify.min.css",
          ),
          // '@mdi/font/css/materialdesignicons.css': cdn.npmmirror("MdiFont", "css/materialdesignicons.min.css"),
          "material-design-icons-iconfont/dist/material-design-icons.css":
            "https://fonts.googlefonts.cn/css?family=Material+Icons",
        },
      },
    }),
  ],
});
