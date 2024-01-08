import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { removeTokensFromCookie } from '@/shared/lib/localStorage/localStorage'
import { buildSlice } from '@/shared/lib/store/buildSlice/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../..'

const initialState: UserState = {
	_initialized: false,
}

export const userSlice = buildSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, { payload }: PayloadAction<User>) => {
			state.data = payload
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload))
		},
		logout: state => {
			state.data = undefined
			removeTokensFromCookie()
		},
		init: state => {
			const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!)
			if (user) {
				state.data = user
				state._initialized = true
			}
		},
	},
})

export const {
	useActions: useUserActions,
	reducer: userReducer,
	actions: userActions,
} = userSlice
