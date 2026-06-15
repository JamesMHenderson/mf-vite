import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/conductor/remotes/current',
  plugins: [
    federation({
      name: 'current',
      manifest: true,
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
      },
      shared: {
        react: {},
        'react-dom': {},
      },
      dts: false,
    }),
    react(),
  ],
  server: {
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 3001,
    host: true,
    strictPort: true,
  },
  build: {
    target: 'ES2022',
  },
});
