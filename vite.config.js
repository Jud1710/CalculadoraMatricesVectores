import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CalculadoraMatricesVectores/', // Nombre de tu repositorio
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'plotly': ['react-plotly.js'],
          'components': [
            './src/components/vectorComponents/GraficaPlot.jsx',
            './src/components/vectorComponents/VectorResult.jsx',
            './src/components/vectorComponents/VectorOperations.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 2000,
  },
  optimizeDeps: {
    include: ['react-plotly.js']
  }
});
