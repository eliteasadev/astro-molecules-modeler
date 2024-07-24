import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  integrations: [tailwind(), react({
    experimentalReactChildren: true
  })],
  output: 'server',
  adapter: vercel()
})
