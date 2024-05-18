import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      command === 'serve' && vuetify(),
      monkey({
        entry: "src/main.ts",
        userscript: {
          name: "学习通任务一览 Chaoxing Assignment",
          description:
            "支持作业、考试列表快速查看 | 电脑端快速查看，绝不错过任何作业与考试 | 【💡操作简单】学习通任务一览，无需任何配置，安装即可使用。【📅功能专注】专为查看作业和考试列表设计，增加提醒功能，确保不错过任何重要任务。【⏱️快速查看】在电脑端快速显示所有待办的作业和即将到来的考试，帮助及时安排学习计划，有效管理时间。【🚀提升体验】这一功能填补了原版学习通的空白，为学术生活带来了极大的便利和效率。",
          copyright: "lcandy2 All Rights Reserved",
          namespace:
            "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
          source:
            "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
          match: [
            "*://mooc1-api.chaoxing.com/work/stu-work*",
            "*://i.chaoxing.com/base*",
            "*://i.mooc.chaoxing.com/space/index*",
            "*://i.mooc.chaoxing.com/settings*",
            "*://mooc1-api.chaoxing.com/exam-ans/exam/phone/examcode*"
          ],
          "run-at": "document-end"
        },
        build: {
          externalGlobals: {
            vue: cdn
            .npmmirror("Vue", "dist/vue.global.prod.js")
            .concat(util.dataUrl(";window.Vue=Vue;")),
            vuetify: cdn.npmmirror("Vuetify", "dist/vuetify.min.js")
            // "vuetify/components": "Vuetify",
            // "vuetify/directives": "Vuetify",
            // "vuetify/iconsets/md": "Vuetify",
          },
          externalResource: {
            "vuetify/dist/vuetify.css": cdn.npmmirror(
              "VuetifyStyle",
              "dist/vuetify.min.css"
            ),
            "material-design-icons-iconfont/dist/material-design-icons.css":
              "https://fonts.googlefonts.cn/css?family=Material+Icons"
          }
        }
      })
    ]
  };
});
