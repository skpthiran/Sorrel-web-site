import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // IMPORTANT for GitHub Pages: 
  // If your site is hosted at username.github.io/sorrel (a project site), 
  // uncomment the 'base' property below and make sure it matches your repo name exactly.
  // base: '/sorrel/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      // Standard practice is to point '@' to the 'src' folder rather than the root '.'
      '@': path.resolve(__dirname, './src'), 
    },
  },
});
