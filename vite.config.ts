import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Allow accessing the dev server via custom domains
    allowedHosts: [
      "calienteshishabar.com",
      "www.calienteshishabar.com",
    ],
  },
  // Allow Vite preview to be accessed via your production domain
  preview: {
    allowedHosts: [
      "calienteshishabar.com",
      "www.calienteshishabar.com",
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
