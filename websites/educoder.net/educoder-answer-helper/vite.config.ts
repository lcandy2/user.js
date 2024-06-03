import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import version from "vite-plugin-package-version";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    version(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        grant: ["none"],
        namespace: "educoder-answer-helper",
        match: ["*://www.educoder.net/tasks/*"],
        "run-at": "document-start",
      },
    }),
  ],
});
