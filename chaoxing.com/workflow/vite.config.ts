import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    AutoImport({
      imports: {
        jquery: [['default', '$'],
        ['default', 'jquery']],
      },
    }),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://i.chaoxing.com/base/settings*', 'https://passport2.chaoxing.com/mooc/accountManage*'],
        connect: ['sso.chaoxing.com','mooc1-api.chaoxing.com'],
        "run-at": 'document-end',
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
          "tdesign-react": cdn.unpkg('tdesign-react', 'dist/index.min.js'),
          jquery: cdn.jsdelivr('jquery', 'dist/jquery.min.js'),
        },
      },
    }),
  ],
});