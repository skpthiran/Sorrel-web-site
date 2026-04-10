import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // This tells Vite to load assets from the /Sorrel-web-site/ folder instead of the root
  base: '/Sorrel-web-site/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
});
