import { defineConfig } from '@midwayjs/hooks'

export default defineConfig({
  source: './source/apis',
  build: {
    viteOutDir: './public',
    outDir: './dist',
  },
  routes: [
    {
      baseDir: 'lambda',
      basePath: '/api',
    },
  ],
})
