import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
    chunkSizeWarningLimit: 6000, // Increased to handle plotly size
  },
  optimizeDeps: {
    include: ['react-plotly.js']
  }
});