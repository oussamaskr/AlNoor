import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ]
  ,
    server: {
    host: '0.0.0.0', // Allows access from external devices
    port: 5173, // Or any port you're using
  },
  
})
