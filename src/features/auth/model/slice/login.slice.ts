import { buildSlice } from '@/shared/lib/store/buildSlice/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/login.service'
import { LoginState } from '../types/login.types'

const initialState: LoginState = {
	isLoading: false,
	login: '',
	password: '',
}

export const loginSlice = buildSlice({
	name: 'login',
	initialState,
	reducers: {
		setLogin: (state, { payload }: PayloadAction<string>) => {
			state.login = payload
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginByUsername.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(loginByUsername.fulfilled, state => {
				state.error = undefined
				state.isLoading = false
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: loginReducer, useActions: useLoginActions } = loginSlice
