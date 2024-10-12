import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";

import appPackage from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: appPackage.name,
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
