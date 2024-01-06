export interface User {
	id: number
	login: string
	isAdmin: boolean
	payStatus: string
}

export interface UserState {
	user?: User

	_initialized: boolean
}
