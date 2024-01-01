import App from '@/app/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ReduxProvider } from './app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</StrictMode>
)
