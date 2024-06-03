import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: "学习通复制粘贴助手 Chaoxing Copy Helper",
        copyright: "lcandy2 All Rights Reserved",
        namespace:
          "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-copy-helper",
        source:
          "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-copy-helper",
        match: ['*://*.chaoxing.com/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});
