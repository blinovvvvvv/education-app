import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Course } from '../../types/course'

export const fetchCourseById = createAsyncThunk<
	Course,
	number,
	ThunkConfig<string>
>('course/fetchCourseById', async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI

	try {
		const { data } = await extra.api.get<Course>(`/course/${id}`)

		return data
	} catch (e) {
		console.error(e)
		return rejectWithValue('error')
	}
})
