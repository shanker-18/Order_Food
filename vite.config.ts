import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ['food-order-zdtq.onrender.com'],
  },
});
