/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	define: {
		__API__: JSON.stringify('api'),
		__IS_DEV__: JSON.stringify(true),
	},
	test: {
		clearMocks: true,
		globals: true,
		environment: 'jsdom',
		setupFiles: './config/vitest/setupTests.ts',
		alias: {
			'@': '/src',
		},
	},
})
