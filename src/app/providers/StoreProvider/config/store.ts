import { StoreState } from '@/app/providers/StoreProvider'
import { coursePageReducer } from '@/entities/Course'
import { userReducer } from '@/entities/User'
import { loginReducer } from '@/features/auth'
import { dashboardPageReducer } from '@/pages/Dashboard'
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
			dashboardPage: dashboardPageReducer,
			coursePage: coursePageReducer,

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
