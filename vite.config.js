import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from "dotenv-vault-core";

dotenv.config();

export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: true,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react()],
});
