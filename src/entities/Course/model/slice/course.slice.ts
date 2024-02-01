import { createSlice } from '@reduxjs/toolkit'
import { fetchCourseById } from '../services/fetchCourseById/fetchCourseById'
import { CourseState } from '../types/course'

const initialState: CourseState = {
	isLoading: false,
	data: undefined,
	error: undefined,
}

export const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCourseById.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchCourseById.fulfilled, (state, action) => {
				state.data = action.payload
				state.error = undefined
				state.isLoading = false
			})
			.addCase(fetchCourseById.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: courseReducer } = courseSlice
