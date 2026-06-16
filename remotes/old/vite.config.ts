import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import { shared } from '@redwood/conductor/federation';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/conductor/remotes/old',
  plugins: [
    react(),
    federation({
      name: 'old',
      manifest: true,
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Page': './src/Page.tsx',
      },
      shared: {
        react: {
        },
        'react-dom': {
        },
      },
      dts: false,
    }),
  ],
  server: {
    port: 3002,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 3002,
    host: true,
    strictPort: true,
  },
  build: {
    target: 'ES2022',
  },
});
