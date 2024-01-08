import { removeTokensFromCookie } from '@/shared/lib/localStorage/localStorage'
import axios from 'axios'
import Cookies from 'js-cookie'

export const $api = axios.create({
	baseURL: __API__,
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
				//FIXME: доделать
				await Cookies.get('refreshToken')

				return $api.request(originalRequest)
			} catch (e) {
				if (error.response.data.message === 'jwt expired')
					removeTokensFromCookie()
			}
		}
	}
)
