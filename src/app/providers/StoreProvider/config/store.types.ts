import { CounterState } from '@/entities/Counter'
import { AxiosInstance } from 'axios'

export interface StoreState {
	counter: CounterState
}

export interface ExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ExtraArg
	state: StoreState
}
