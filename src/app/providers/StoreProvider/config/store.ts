import { StoreState } from '@/app/providers/StoreProvider'
import { courseReducer } from '@/entities/Course'
import { coursePageReducer, exerciseReducer } from '@/entities/Exercise'
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
			course: courseReducer,
			coursePage: coursePageReducer,
			exercise: exerciseReducer,

			// api
			[rtkApi.reducerPath]: rtkApi.reducer,
		},
		preloadedState: initialState as StoreState,
		devTools: __IS_DEV__,
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
