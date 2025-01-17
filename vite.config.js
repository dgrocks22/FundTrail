import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2020'], // Update with modern browser versions
  },
  optimizeDeps: {
    esbuildOptions : {
        target: "es2020"
    }
  },
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});
