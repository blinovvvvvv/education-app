import {
	removeTokensFromCookie,
	saveTokens,
	Tokens,
} from '@/shared/lib/localStorage/localStorage'
import axios from 'axios'
import Cookies from 'js-cookie'

export const ContentType = {
	'Content-Type': 'application/json',
}

export const $api = axios.create({
	baseURL: __API__,
	headers: ContentType,
})

$api.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

$api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error.response.status === 401 ||
			error.response.data.message === 'jwt expired' ||
			(error.response.data.message === 'jwt must be provided' &&
				error.config &&
				!originalRequest._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				const refreshToken = Cookies.get('refreshToken')
				if (!refreshToken) removeTokensFromCookie()

				const { data } = await axios.post<Tokens>(
					`${__API__}/auth/new-token`,
					{ refreshToken },
					{
						headers: ContentType,
					}
				)

				if (data.accessToken) saveTokens(data)

				return $api.request(originalRequest)
			} catch (e) {
				if (error.response.data.message === 'jwt expired')
					removeTokensFromCookie()
			}
		}
	}
)
