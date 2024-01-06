import { Header } from '@/widgets/Header'
import { FC } from 'react'
import AppRouter from './router/AppRouter'

const App: FC = () => {
	return (
		<div className='w-full h-full'>
			<Header />
			<AppRouter />
		</div>
	)
}

export default App
