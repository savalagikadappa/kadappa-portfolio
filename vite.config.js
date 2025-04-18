import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'       // if using React
import tailwindcss from '@tailwindcss/vite'    // import the Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),                             // add it here
  ],
})