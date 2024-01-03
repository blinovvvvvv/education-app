import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StoreState } from '../config/store.types'

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
