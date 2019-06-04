const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = env => ({
	plugins: [
		new WebpackPwaManifest({
			name: 'Time Is Oba',
			short_name: 'OBA',
			description: 'Launchpad for Oba One',
			background_color: '#000000',
			theme_color: '#000000',
			lang: 'en-US',
			crossorigin: 'use-credentials',
			orientation: 'portrait-primary',
			icons: [],
			start_url: '/hello',
			display: 'fullscreen',
		}),
		new GenerateSW({
			swDest: '/src/service-worker.js',
			include: [],
			exclude: [/\.(?:png|gif|jpg|jpeg|svg)$/],
			excludeChunks: [],
			precacheManifestFilename: 'sw-manifest.[manifestHash].js',
			offlineGoogleAnalytics: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'images'
					}
				},
				{
					urlPattern: '/landing/',
					handler: 'CacheOnly',
					options: {
						cacheName: 'landing',
					},
				},
				{
					urlPattern: '/home/',
					handler: 'CacheFirst',
					options: {
						cacheName: 'home',
					},
				},
				{
					urlPattern: '/artboard/',
					handler: 'CacheOnly',
					options: {
						cacheName: 'artboard',
					},
				},
			],
			navigateFallback: '',
			navigateFallbackBlacklist: [],
			maximumFileSizeToCacheInBytes: 2.7 * 1024 * 1024,
		}),
		new InjectManifest({
			swDest: '/src/service-worker.js',
			include: [],
			exclude: [],
			excludeChunks: [],
			precacheManifestFilename: 'sw-manifest.[manifestHash].js',
			maximumFileSizeToCacheInBytes: 2.7 * 1024 * 1024,
		}),
	],
});
