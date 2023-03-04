import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@theme': path.resolve(__dirname, 'src/theme')
    }
  }
});
