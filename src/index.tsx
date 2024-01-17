import App from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/styles/index.scss'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ReduxProvider } from './app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<ReduxProvider>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</ReduxProvider>
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>
)
