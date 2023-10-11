import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path"; // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
});
