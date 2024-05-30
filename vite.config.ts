import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 600,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
