import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "学习通/MOOC等 隐藏答案 Hide Answer",
        namespace:
          "https://github.com/lcandy2/user.js/tree/main/generics/hide-answer",
        match: ["*://mooc1.chaoxing.com/mooc*", "*://mooc1.chaoxing.com/exam*"],
        copyright: "lcandy2 All Rights Reserved"
      },
      build: {
        externalGlobals: {
          vue: cdn
          .npmmirror("Vue", "dist/vue.global.prod.js")
          .concat(util.dataUrl(";window.Vue=Vue;"))
        }
      }
    })
  ]
});
