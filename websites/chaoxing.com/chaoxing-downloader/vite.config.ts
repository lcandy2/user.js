import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      command === "serve" && vuetify(),
      monkey({
        entry: "src/main.ts",
        userscript: {
          name: "学习通下载器 Chaoxing Downloader",
          copyright: "lcandy2 All Rights Reserved",
          namespace:
            "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-downloader",
          source:
            "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-downloader",
          match: ["*://*.chaoxing.com/mooc2-ans/coursedata/stu-datalist*"],
          connect: ["pan-yz.chaoxing.com"],
          "run-at": "document-end",
        },
        build: {
          externalGlobals: {
            vue: cdn
              .npmmirror("Vue", "dist/vue.global.prod.js")
              .concat(util.dataUrl(";window.Vue=Vue;")),
            vuetify: cdn
              .npmmirror("Vuetify", "dist/vuetify.min.js")
              .concat(util.dataUrl(";")),
          },
          externalResource: {
            "vuetify/dist/vuetify.css": cdn.npmmirror(
              "VuetifyStyle",
              "dist/vuetify.min.css",
            ),
          },
        },
      }),
    ],
  };
});
