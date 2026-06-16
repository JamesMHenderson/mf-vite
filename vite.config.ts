import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/conductor/remotes/current',
  plugins: [
    react(),
    federation({
      name: 'current',
      manifest: true,
      shareStrategy: 'loaded-first',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
      },
      remotes: {
        template: {
          type: 'module',
          name: 'template',
          entry: 'www.redwoodtest.com/invalid/mf-manifest.json',
          entryGlobalName: 'template',
        },
      },
      shared: {
        react: {},
        'react-dom': {},
      },
      dts: false,
    }),
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
