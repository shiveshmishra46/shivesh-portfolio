import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap', '@gsap/react'],
          'vendor': ['react', 'react-dom']
        }
      }
    },
    target: 'es2015', // Better browser support
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Console logs remove kar do production mein
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three']
  }
});
