import { UserState } from '@/entities/User'
import { LoginState } from '@/features/auth'
import { rtkApi } from '@/shared/api/rtkApi'
import { AxiosInstance } from 'axios'

export interface StoreState {
	// counter: CounterState <- test entity
	user: UserState
	login: LoginState

	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export interface ExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ExtraArg
	state: StoreState
}
