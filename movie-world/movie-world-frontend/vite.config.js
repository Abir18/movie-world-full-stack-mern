import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": "https://movie-world-full-stack.onrender.com"
    }
  },
  plugins: [react()]
});
