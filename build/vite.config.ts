import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 使用相对路径，支持子目录部署
  server: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      overlay: true,
      path: '/hot/vite-hmr',
      port: 6000,
      clientPort: 443,
      timeout: 30000,
    },
    watch: {
      usePolling: true,
      interval: 100,
    }
  },
});
