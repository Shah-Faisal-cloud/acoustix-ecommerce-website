import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        headphones: resolve(__dirname, 'pages/headphones.html'),
        speakers: resolve(__dirname, 'pages/speakers.html'),
        earphones: resolve(__dirname, 'pages/earphones.html'),
        product: resolve(__dirname, 'pages/product.html'),
        checkout: resolve(__dirname, 'pages/checkout.html'),
      },
    },
  },
});