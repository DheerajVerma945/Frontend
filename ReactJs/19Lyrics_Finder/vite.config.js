import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ws/1.1': {
        target: 'https://api.musixmatch.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ws\/1.1/, '/ws/1.1'),
      },
    },
  },
});
