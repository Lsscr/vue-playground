import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig((command) => ({
  plugins: [vue(), UnoCSS()],
  base: command === 'build'
    ? '/vue-playground/'
    : '/'
}));
