import { StoreState } from '@/app/providers/StoreProvider'
import { counterSlice } from '@/entities/Counter'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { configureStore } from '@reduxjs/toolkit'
import { ExtraArg } from './store.types'

export const createReduxStore = (initialState: DeepPartial<StoreState>) => {
	const extraArg: ExtraArg = {
		api: $api,
	}

	const store = configureStore({
		reducer: {
			counter: counterSlice.reducer,

			// api
			[rtkApi.reducerPath]: rtkApi.reducer,
		},
		preloadedState: initialState as StoreState,
		devTools: true,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}).concat(rtkApi.middleware),
	})

	return store
}
type StoreReturnType = ReturnType<typeof createReduxStore>

export type RootState = StoreReturnType
export type AppDispatch = StoreReturnType['dispatch']
