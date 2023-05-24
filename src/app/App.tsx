import { Home } from '@pages/home'
import { Header } from '@widgets/header'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path='*' element={<p>Path not resolved</p>} />
			</Routes>
		</>
	)
}

export default App
