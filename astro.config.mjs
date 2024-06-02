import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/modeler/': {
      status:302,
      destination: '/modeler/W3siaWQiOiJ4R18zY2FPT253YzJVeEZmR0EyZXIiLCJwb3MiOlsiMCIsIjAiLCIwIl0sInJhZCI6IjAuNSIsImNvbG9yIjoiIzJhZiJ9XQ'
    }
  }
  ,
  integrations: [tailwind(), react({
    experimentalReactChildren: true
  })],
  output: "server",
  adapter: vercel()
});