import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      // Allow Vite to handle .mov files as asset URLs
      name: "mov-asset",
      transform(_code, id) {
        if (id.endsWith(".mov")) {
          return { code: `export default ${JSON.stringify(id)};`, map: null };
        }
      },
    },
  ],
  assetsInclude: ["**/*.mov"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
