import { StoreState } from '@/app/providers/StoreProvider'
import { counterSlice } from '@/entities/Counter/model/slice/counter.slice'
import { configureStore } from '@reduxjs/toolkit'

export const createReduxStore = (initialState: DeepPartial<StoreState>) =>
	configureStore<StoreState>({
		reducer: {
			counter: counterSlice.reducer,
		},
		preloadedState: initialState as StoreState,
		devTools: true,
		// middleware:
	})

type StoreReturnType = ReturnType<typeof createReduxStore>

export type RootState = StoreReturnType
export type AppDispatch = StoreReturnType['dispatch']
