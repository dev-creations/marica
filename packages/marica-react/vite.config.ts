import path from "node:path";
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "@marica-ui/components",
        formats: ["es", "umd"],
        fileName: (format) => `marica-ui.${format}.js`,
    },
    rollupOptions: {
        external: ["react", "react-dom", "styled-components"],
        output: {
            globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "styled-components": "styled",
            },
        },
    },
},
})
