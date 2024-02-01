import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Exercise } from '../../types/exercise'

export const fetchExerciseById = createAsyncThunk<
	Exercise,
	number,
	ThunkConfig<string>
>('exercise/fetchExerciseById', async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI

	try {
		const { data } = await extra.api.get<Exercise>(`/exercise/${id}`)

		return data
	} catch (e) {
		console.error(e)
		return rejectWithValue('error')
	}
})
