import { StoreState } from '@/app/providers/StoreProvider'
import { userReducer } from '@/entities/User'
import { loginReducer } from '@/features/auth'
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
			user: userReducer,
			login: loginReducer,

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
