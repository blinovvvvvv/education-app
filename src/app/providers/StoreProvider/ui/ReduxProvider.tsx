import { createReduxStore } from '@/app/providers/StoreProvider/config/store'
import { StoreState } from '@/app/providers/StoreProvider/config/store.types'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ReduxProviderProps {
	initialState?: DeepPartial<StoreState>
}

export const ReduxProvider: FC<PropsWithChildren<ReduxProviderProps>> = ({
	initialState,
	children,
}) => {
	const store = createReduxStore(initialState as StoreState)

	return <Provider store={store}>{children}</Provider>
}
