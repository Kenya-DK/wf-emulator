import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "$types": resolve(__dirname, "./src/types"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@contexts": resolve(__dirname, "./src/contexts"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@api": resolve(__dirname, "./src/api"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@models": resolve(__dirname, "./src/models"),
    }
  },
  server: {
    host: '127.0.0.1',
    port: 3000
  }
})
