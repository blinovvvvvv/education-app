export interface User {
	id: number
	login: string
	isAdmin: boolean
	payStatus: string
}

export interface UserState {
	data?: User

	_initialized: boolean
}
