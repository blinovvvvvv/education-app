import { Home } from '@pages/home'
import { Header } from '@widgets/header'
import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'
import TestPage from './test/test'

const App: FC = () => {
	return (
		<HelmetProvider>
			<div suppressHydrationWarning className='w-full h-full'>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path='test' element={<TestPage />} />
					<Route path='*' element={<p>Path not resolved</p>} />
				</Routes>
			</div>
		</HelmetProvider>
	)
}

export default App
