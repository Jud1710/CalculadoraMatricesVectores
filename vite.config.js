import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CalculadoraMatricesVectores/', // Nombre de tu repositorio
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-plotly.js']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'plotly': ['react-plotly.js'],
        }
      }
    }
  }
});
