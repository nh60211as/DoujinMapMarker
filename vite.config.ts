import preact from '@preact/preset-vite';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/DoujinMapMarker/',
    plugins: [
      preact(),
      checker({
        typescript: true,
      }),
      VitePWA({
        manifest: {
          name: 'Doujin Map Marker',
          short_name: 'Doujin Map Marker',
          start_url: '/DoujinMapMarker/',
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#000000',
          theme_color: '#000000',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              type: 'image/png',
              sizes: '192x192',
            },
            {
              src: 'android-chrome-512x512.png',
              type: 'image/png',
              sizes: '512x512',
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ['**/*'],
          // maximumFileSizeToCacheInBytes: 5 * 1024 ** 2, // NOTE: 5MB, delete after CWT70
        },
        includeAssets: ['**/*'],
      }),
    ],
    build: {
      outDir: './build',
    },
  };
});
