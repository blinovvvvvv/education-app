import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Course } from '@/entities/Course'
import { Profile } from '@/entities/Profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserCourses = createAsyncThunk<
	Course[],
	void,
	ThunkConfig<string>
>('dashboard/fetchUserCourses', async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI

	try {
		const { data } = await extra.api.get<Profile>('/user/profile')

		return data.currentCourses
	} catch (e) {
		console.error(e)
		return rejectWithValue('error')
	}
})
