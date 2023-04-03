import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build'
  }
})


