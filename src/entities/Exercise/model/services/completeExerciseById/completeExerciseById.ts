import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const completeExerciseById = createAsyncThunk<
	boolean,
	number,
	ThunkConfig<string>
>('exercise/completeExerciseById', async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI

	try {
		const { data } = await extra.api.patch<boolean>(`/exercise/complete/${id}`)

		return data
	} catch (e) {
		console.error(e)
		return rejectWithValue('error')
	}
})
