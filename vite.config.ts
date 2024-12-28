import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/404'],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
		checker({
		  typescript: true,
		}),
		VitePWA({
		  manifest: {
			name: "FF Map Marker",
			short_name: "FF Map Marker",
			start_url: "/",
			display: "standalone",
			orientation: "portrait",
			background_color: "#000000",
			theme_color: "#000000",
			icons: [
			  {
				src: "android-chrome-192x192.png",
				type: "image/png",
				sizes: "192x192",
			  },
			  {
				src: "android-chrome-512x512.png",
				type: "image/png",
				sizes: "512x512",
			  },
			],
		  },
		  workbox: { cleanupOutdatedCaches: true },
		}),
	],
    build: {
      outDir: "./build",
    },
});
