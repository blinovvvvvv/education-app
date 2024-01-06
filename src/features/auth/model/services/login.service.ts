import { ThunkConfig } from '@/app/providers/StoreProvider'
import { userActions } from '@/entities/User'
import { saveTokens } from '@/shared/lib/localStorage/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/login.types'

interface LoginByUsernameProps {
	login: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	AuthResponse,
	LoginByUsernameProps,
	ThunkConfig<string>
>('auth/loginByUsername', async (authData, thunkAPI) => {
	const { extra, dispatch, rejectWithValue } = thunkAPI

	try {
		if (!authData) throw new Error()

		const { data } = await extra.api.post<AuthResponse>('/auth/login', authData)

		if (data.user) {
			dispatch(userActions.saveUser(data.user))
			saveTokens({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
			})
		}

		return data
	} catch (e) {
		console.error(e)
		return rejectWithValue('error')
	}
})
