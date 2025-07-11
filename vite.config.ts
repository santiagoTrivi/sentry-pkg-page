import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://santiagoTrivi.github.io/sentry-pkg-page/",
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@shared",
        replacement: path.resolve(__dirname, "src/shared"),
      },
      {
        find: "@email",
        replacement: path.resolve(__dirname, "src/email"),
      },
    ],
  },
});
