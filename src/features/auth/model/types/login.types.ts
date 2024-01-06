import { User } from '@/entities/User'

export interface LoginState {
	isLoading?: boolean
	error?: string
	password?: string
	login?: string
}

export interface AuthResponse {
	user: User
	accessToken: string
	refreshToken: string
}
