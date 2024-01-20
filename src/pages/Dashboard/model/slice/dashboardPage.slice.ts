import { StoreState } from '@/app/providers/StoreProvider'
import { Course } from '@/entities/Course'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchUserCourses } from '../services/fetchUserCourses/fetchUserCourses'
import { DashboardPageState } from '../types/dashboardPageState'

const userCoursesAdapter = createEntityAdapter({
	selectId: (course: Course) => course.id,
})

export const getUserCourses = userCoursesAdapter.getSelectors<StoreState>(
	state => state.dashboardPage || userCoursesAdapter.getInitialState()
)

export const dashboardPageSlice = createSlice({
	name: 'dashboardPage',
	initialState: userCoursesAdapter.getInitialState<DashboardPageState>({
		entities: [],
		ids: [],
		error: '',
		isLoading: false,
	}),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUserCourses.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchUserCourses.fulfilled, (state, action) => {
				state.error = undefined
				state.isLoading = false
				userCoursesAdapter.addMany(state, action.payload)
			})
			.addCase(fetchUserCourses.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: dashboardPageReducer } = dashboardPageSlice
