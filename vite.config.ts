import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./"),
      "@system": path.resolve(__dirname, "./system"),
      "@demos": path.resolve(__dirname, "./demos"),
      "@common": path.resolve(__dirname, "./common"),
      "@data": path.resolve(__dirname, "./data"),
      "@components": path.resolve(__dirname, "./components"),
      "@pages": path.resolve(__dirname, "./pages"),
      "@modules": path.resolve(__dirname, "./modules"),
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'SRCL',
      formats: ['es', 'umd'],
      fileName: (format) => `srcl.${format}.js`,
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'next', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'next': 'Next',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxDevRuntime',
        },
      },
    },
  },
})
