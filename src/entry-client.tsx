import '@/app/styles/global.scss'
import App from '@/app/App.tsx'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrateRoot(
	document.getElementById('app')!,
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
console.log('hydrated')
