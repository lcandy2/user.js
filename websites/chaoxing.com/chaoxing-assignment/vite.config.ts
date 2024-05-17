import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: "【学习通任务一览】- 作业 与 考试 列表 | 电脑端快速查看，绝不错过任何作业与考试",
        namespace: "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
        source: "https://github.com/lcandy2/user.js/tree/main/websites/chaoxing.com/chaoxing-assignment",
        match: [
          "*://mooc1-api.chaoxing.com/work/stu-work*",
          "*://i.chaoxing.com/base*",
        ],
        "run-at": "document-end",
      },
    }),
  ],
});
