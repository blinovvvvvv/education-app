import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.VITE_APP_ENV === 'qa'

const root = process.cwd()
const isProd = process.env.NODE_ENV === 'production'

const resolve = p => path.resolve(__dirname, p)

async function createServer() {
	const indexProd = isProd
		? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
		: ''

	const app = express()

	/**
	 * @type {import('vite').ViteDevServer}
	 */
	let vite
	if (!isProd) {
		vite = await (
			await import('vite')
		).createServer({
			root,
			logLevel: isTest ? 'error' : 'info',
			server: {
				middlewareMode: true,
				watch: {
					// During tests, we edit the files too fast and sometimes chokidar
					// misses change events, so enforce polling for consistency
					usePolling: true,
					interval: 100,
				},
			},
			appType: 'custom',
		})
		// use vite's connect instance as middleware
		app.use(vite.middlewares)
	} else {
		app.use((await import('compression')).default())
		app.use(express.static(resolve('dist/client')))
	}

	app.use('*', async (req, res) => {
		const url = req.originalUrl

		try {
			let template, render
			if (!isProd) {
				// always read fresh template in dev
				template = fs.readFileSync(resolve('./index.html'), 'utf-8')
				template = await vite.transformIndexHtml(url, template)
				render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
			} else {
				template = indexProd
				render = (await import('./dist/server/entry-server.js')).render
			}
			const appHtml = render(url)

			const html = template.replace(`<!--app-html-->`, appHtml)

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
		} catch (e) {
			!isProd && vite.ssrFixStacktrace(e)
			console.error(e)
			res.status(500).end(e.stack)
		}
	})

	app.listen(5173, () => {
		console.log('http://localhost:5173')
	})
}

createServer()
