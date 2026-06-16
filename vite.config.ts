import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import fs from "node:fs";

// Plugin: resolves Lovable .asset.json files as JS modules with absolute URLs
function assetJsonPlugin() {
  const BASE = "https://preview--digital-clarity-hero.lovable.app";
  return {
    name: "asset-json",
    transform(_code: string, id: string) {
      if (!id.endsWith(".asset.json")) return null;
      try {
        const data = JSON.parse(fs.readFileSync(id, "utf-8"));
        const url = data.url?.startsWith("/") ? BASE + data.url : data.url;
        return {
          code: `export default ${JSON.stringify({ ...data, url })};`,
          map: null,
        };
      } catch {
        return null;
      }
    },
  };
}

export default defineConfig({
  plugins: [assetJsonPlugin(), react(), tailwindcss(), tsconfigPaths()],
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
