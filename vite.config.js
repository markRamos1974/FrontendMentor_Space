import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "FrontendMentor_Space",
  plugins: [react()],
  build: {
    outDir: './build'
  }
})


