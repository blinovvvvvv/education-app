import { Home } from '@/pages/Home'
import TestPage from '@/shared/test/TestPage/TestPage'
import { Header } from '@/widgets/Header'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<div className='w-full h-full'>
			<Header />
			{/* FIXME MOVE IT TO APPROUTER COMPONENT*/}
			<Routes>
				<Route index element={<Home />} />
				<Route path='test' element={<TestPage />} />
				<Route path='*' element={<p>Path not resolved</p>} />
			</Routes>
		</div>
	)
}

export default App
