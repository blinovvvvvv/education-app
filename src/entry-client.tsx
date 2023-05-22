import App from '@app/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@app/styles/global.scss'

ReactDOM.hydrateRoot(
	document.getElementById('app')!,
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
console.log('hydrated')
