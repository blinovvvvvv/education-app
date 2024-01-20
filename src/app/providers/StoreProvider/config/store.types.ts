import { UserState } from '@/entities/User'
import { LoginState } from '@/features/auth'
import { DashboardPageState } from '@/pages/Dashboard'
import { rtkApi } from '@/shared/api/rtkApi'
import { AxiosInstance } from 'axios'

export interface StoreState {
	user: UserState
	login: LoginState
	dashboardPage: DashboardPageState

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
