// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph image URLs, robots.txt, and the sitemap.
  site: "https://tomdoes.tech",
  // @astrojs/sitemap emits sitemap-index.xml; expose it at the conventional URL.
  redirects: {
    "/sitemap.xml": "/sitemap-index.xml",
  },
  adapter: cloudflare(),
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
