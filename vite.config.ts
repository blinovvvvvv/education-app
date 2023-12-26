import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	const isProd = env.NODE_ENV === 'production'

	return defineConfig({
		build: {
			minify: 'esbuild',
			reportCompressedSize: true,
			ssrEmitAssets: true,
		},
		resolve: {
			alias: [{ find: '@', replacement: '/src' }],
		},
		plugins: [
			react(),
			checker({
				typescript: true,
				eslint: {
					lintCommand:
						'eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
					dev: {
						logLevel: ['error'],
					},
				},
				stylelint: {
					lintCommand: 'stylelint --fix "./src/**/*.scss"',
					dev: {
						logLevel: ['error'],
					},
				},
			}),
			legacy({ targets: ['defaults', 'not IE 11'] }),
			VitePWA({
				registerType: 'prompt',
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				},
				includeAssets: [
					'vite.svg',
					'apple-touch-icon.png',
					'safari-pinned-tab.svg',
				],
				manifest: {
					name: 'Курсач',
					short_name: 'Курсач',
					description: 'Лучшая образовательная платформа',
					theme_color: '#242424',
					background_color: '#242424',
					start_url: '/',
					scope: '/',
					orientation: 'portrait',
					icons: [
						{
							src: 'android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'android-chrome-256x256.png',
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: 'safari-pinned-tab.svg',
							sizes: '196x196',
							type: 'image/png',
							purpose: 'maskable',
						},
					],
				},
				devOptions: {
					enabled: !isProd,
				},
			}),
		],
	})
}
