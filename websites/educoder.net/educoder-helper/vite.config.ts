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
          name: "头歌助手 Educoder Helper",
          copyright: "lcandy2 All Rights Reserved",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2ZzUrDQBCAA3kM23NfJKuC4FW6vYjZV/DiK7SaeCxYKiRQE5qNB7EPUoT6A3op9GBFi5eeIhsMjNbW2s2apMwHc2t35tud3RxG0xTQ6IRlyw26thtMRFgu55ZzWdGKQKMTlm2Hj22XR1/C4eNTJyhpeceKdz4u+ur43N8QRdtOcP0p4Wt5x47bhkdwt+NTcXlkucFbJkVt7u2XCTW7RpVNCGVREjNtAuLopLmT/P/Qau4u+i0Ba4ocBmXhVu2gklrxBmVjmGQZgXr7YiokRPH1tj9dVoAkItR8EbmlBcTO/5TgN4G/BJmzPqFM/s7Atrm5fYggaQlA+oN72E7ydwbuyHfOeE+6+BbvzawLcyoVeByOpCRavBc9DUfZCaiCoAAAT2AFCLbQki2ke+9SkfkJoMAc8A5A8BldAYLPKABfIS/H3wFVEBRQdAdydwJ60QVUQVAAgN8BD78Dcqz1JdaL/ozqRRdQBUEBAJ5A1i1kgAGHGD6opj+4AwLmq7wAZeGCEZDiMD1pATEtFAO3fy++yp63a6yU4piV+WJmpbpwI85heqkVjyBrzgdOSyKlYdgYdgAAAABJRU5ErkJggg==",
          namespace:
            "https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-helper",
          source:
            "https://github.com/lcandy2/user.js/tree/main/websites/educoder.net/educoder-helper",
          match: ["*://www.educoder.net/tasks/*"],
          "run-at": "document-idle",
        },
        build: {
          externalGlobals: {
            vue: cdn
              .npmmirror("Vue", "dist/vue.global.prod.js")
              .concat(util.dataUrl(";window.Vue=Vue;")),
            vuetify: cdn
              .npmmirror("Vuetify", "dist/vuetify.min.js")
              .concat(util.dataUrl(";")),
            "js-base64": cdn.npmmirror("Base64", "base64.js"),
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
