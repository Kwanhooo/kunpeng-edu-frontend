import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

/**
 * 配置文档
 * https://vitejs.dev/config/
 */
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // Components({
    //   resolvers: [AntDesignVueResolver()],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
