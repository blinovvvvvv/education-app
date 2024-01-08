import { useUserActions } from '@/entities/User'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { FC, useEffect } from 'react'
import AppRouter from './router/AppRouter'

const App: FC = () => {
	const userInitialized = useTypedSelector(state => state.user._initialized)
	const { init } = useUserActions()

	useEffect(() => {
		if (!userInitialized) {
			init()
		}
	}, [init, userInitialized])

	return (
		<div className='w-full h-full'>
			<AppRouter />
		</div>
	)
}

export default App
