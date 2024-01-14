import { defineConfig } from 'vite'

export default defineConfig({
	define: {
		__API__: JSON.stringify('api'),
	},
	test: {
		clearMocks: true,
		globals: true,
		environment: 'jsdom',
		setupFiles: './config/test/setupTests.ts',
		alias: {
			'@': '/src',
		},
	},
})
