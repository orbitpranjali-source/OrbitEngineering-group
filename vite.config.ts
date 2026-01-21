import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path must match the repository name for GitHub Pages to load assets correctly
  base: '/OrbitEngineering-2/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
