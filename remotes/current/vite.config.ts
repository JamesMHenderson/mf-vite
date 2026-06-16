import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import { shared } from '@redwood/conductor/federation';
import { dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/conductor/remotes/current',
    plugins: [
      react(),
      federation({
        name: 'current',
        manifest: true,
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
        },
        remotes: {
          remote_old: {
            type: 'module',
            name: 'remote_old',
            entry: `${env.REMOTE_APPLICATION_OLD_URL}/mf-manifest.json`,
            entryGlobalName: 'remote_old',
          },
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
            version: dependencies.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
            version: dependencies['react-dom']
          },
        },
        dts: false,
      }),
    ],
    server: {
      port: 3001,
      strictPort: true,
      host: true,
      allowedHosts: true,
      proxy: {
        [env.REMOTE_APPLICATION_OLD_URL]: {
          target: 'http://localhost:3002/',
        },
      },
    },
    preview: {
      port: 3001,
      host: true,
      strictPort: true,
    },
    build: {
      target: 'ES2022',
    },
  };
});
