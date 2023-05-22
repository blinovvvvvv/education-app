import Home from '@pages/home/Home'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='*' element={<p>Path not resolved</p>} />
		</Routes>
	)
}

export default App
