import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "node:path";

// Main project config
export default defineConfig({
  plugins: [preact(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/dev"),
    emptyOutDir: true,
    // Widget-specific build configurations have been moved to their respective config files
  },
});

// Export a helper function for widget configs to use
export const createWidgetConfig = (widgetName, htmlPath) => {
  return defineConfig({
    plugins: [preact(), viteSingleFile()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "../../src"),
      },
    },
    build: {
      outDir: path.resolve(process.cwd(), "../../dist/widgets", widgetName),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          [widgetName]: path.resolve(process.cwd(), htmlPath || "index.html"),
        },
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
    },
  });
};
