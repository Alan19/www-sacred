import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@system": path.resolve(__dirname, "./src/system"),
      "@demos": path.resolve(__dirname, "./src/demos"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@modules": path.resolve(__dirname, "./src/modules"),
    },
  },
})
