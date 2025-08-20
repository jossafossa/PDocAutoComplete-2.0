import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // This tells Vite not to pre-bundle your local package
    exclude: ["pdok"],
  },
});
