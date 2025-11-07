import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "catalog.html"),
        blog: resolve(__dirname, "blog.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      include: ["**/*.{jpg,jpeg,png,gif,webp,svg}"],
      exclude: ["**/node_modules/**", "**/dist/**"],

      // Настройки сжатия
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
      },

      verbose: true,
    }),
  ],
});
