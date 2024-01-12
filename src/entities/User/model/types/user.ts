import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export interface User extends Pick<IdTimestamps, 'id'> {
	login: string
	isAdmin: boolean
	payStatus: string
}

export interface UserState {
	data?: User

	_initialized: boolean
}
