import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory matches Vercel's static build settings
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Add aliases for cleaner imports
    },
  },
});
