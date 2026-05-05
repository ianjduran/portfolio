import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

const allowedHosts = ["ianjduran.github.io", "donated-showed-manually-diving.trycloudflare.com"]

// https://astro.build/config
export default defineConfig({
  site: "https://ianjduran.github.io/portfolio",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  server: {
    allowedHosts,
  },
  vite: {
    server: {
      allowedHosts,
    },
    preview: {
      allowedHosts,
    }
  }
})
