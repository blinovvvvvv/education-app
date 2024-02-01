import { createSlice } from '@reduxjs/toolkit'
import { fetchExerciseById } from '../services/fetchExerciseById/fetchExerciseById'
import { ExerciseState } from '../types/exercise'

const initialState: ExerciseState = {
	isLoading: false,
	data: undefined,
	error: undefined,
}

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchExerciseById.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchExerciseById.fulfilled, (state, action) => {
				state.data = action.payload
				state.error = undefined
				state.isLoading = false
			})
			.addCase(fetchExerciseById.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: exerciseReducer } = exerciseSlice
