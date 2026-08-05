import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    dts({
      // The root tsconfig only holds project references, so it resolves to zero
      // files and would emit an empty declaration entry.
      tsconfigPath: "tsconfig.app.json",
      include: ["src"],
      exclude: ["src/main.tsx", "src/App.tsx"],
      entryRoot: "src",
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  build: {
    // public/ only backs the local preview app, it is not part of the package.
    copyPublicDir: false,

    lib: {
      entry: path.resolve(import.meta.dirname, "src/index.ts"),
      name: "MfeDesignSystem",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      // Anything declared as a peer/runtime dependency stays external so the
      // consuming app resolves a single shared copy (Base UI relies on React
      // context, which breaks if duplicated).
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        /^@base-ui\/react/,
      ],
    },

    cssCodeSplit: false,
  },
});
