import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  base: '/你的仓库名称/', // 替换为您的 GitHub 仓库名称
});
