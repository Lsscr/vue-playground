import { defineConfig, loadEnv } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  console.log('当前模式:', mode);
  console.log('当前命令:', command);
  console.log('环境变量:', env);
  return {
    plugins: [vue(), UnoCSS()],
    base: env.VITE_BASE_URL,
  };
});
