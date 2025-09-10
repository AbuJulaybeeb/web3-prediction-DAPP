import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      "4ccc43e6-ae26-4c14-83b1-7a2bd7e41cb3-00-2ppfs3tuvm4gz.worf.replit.dev",
    ],
  },
});
