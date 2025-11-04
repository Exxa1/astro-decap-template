import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [ sitemap({
                  filter: (page) => page !== new URL('/secret/', SITE_URL).href
                 })],

  site: SITE_URL,

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});