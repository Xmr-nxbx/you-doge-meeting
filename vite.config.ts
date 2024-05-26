import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { vitePluginForArco } from "@arco-plugins/vite-vue";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) =>
  defineConfig({
    plugins: [
      vue(),
      vitePluginForArco(),
      createHtmlPlugin({
        inject: {
          data: {
            title: loadEnv(mode, process.cwd())['VITE_APP_TITLE'],
          },
          tags: [
            {
              tag: 'meta',
              attrs: {
                name: 'keywords',
                content: loadEnv(mode, process.cwd())['VITE_APP_KEYWORDS']
              }
            },
            {
              tag: 'meta',
              attrs: {
                name: 'description',
                content: loadEnv(mode, process.cwd())['VITE_APP_DESCRIPTION']
              }
            }
          ]
        },
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
