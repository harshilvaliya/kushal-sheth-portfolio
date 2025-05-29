import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // fallback to index.html on dev server
  },
  build: {
    rollupOptions: {
      input: 'index.html', // ensures correct input entry
    },
  },
});
