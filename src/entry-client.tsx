import '@/app/styles/index.scss'
import App from '@/app/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrateRoot(
	document.getElementById('app')!,
	<StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>
)
console.log('hydrated')
