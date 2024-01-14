import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import Cookies from 'js-cookie'

export interface Tokens {
	refreshToken: string
	accessToken: string
}

export const saveTokens = ({ refreshToken, accessToken }: Tokens) => {
	Cookies.set('refreshToken', refreshToken)
	Cookies.set('accessToken', accessToken)
}

export const removeTokensFromCookie = () => {
	Cookies.remove('refreshToken')
	Cookies.remove('accessToken')
	localStorage.removeItem(USER_LOCALSTORAGE_KEY)
}
