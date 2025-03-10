import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Replace 3001 with your desired port
  },
  resolve: {
    alias: {
      '@lexical/react': '@lexical/react/index.js', // Explicitly specify the entry point
    },
  },
})


