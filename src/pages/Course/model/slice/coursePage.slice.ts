import { StoreState } from '@/app/providers/StoreProvider'
import { Exercise } from '@/entities/Exercise'
import { buildSlice } from '@/shared/lib/store/buildSlice/buildSlice'
import { PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'
import { CoursePageState } from '../../../../entities/Exercise/model/types/coursePageState'

const courseExercisesAdapter = createEntityAdapter({
	selectId: (exercise: Exercise) => exercise.id,
})

export const getExercises = courseExercisesAdapter.getSelectors<StoreState>(
	state => state.coursePage || courseExercisesAdapter.getInitialState()
)

export const coursePageSlice = buildSlice({
	name: 'coursePage',
	initialState: courseExercisesAdapter.getInitialState<CoursePageState>({
		entities: [],
		ids: [],
		isNext: false,
		isPrev: false,
	}),
	reducers: {
		addExercises: (state, action: PayloadAction<Exercise[]>) => {
			courseExercisesAdapter.addMany(state, action.payload)
		},
		selectExercise: (state, action: PayloadAction<number>) => {
			state.currentExercise = action.payload
			state.isNext = !!state.ids[action.payload]
			state.isPrev = !!state.ids[action.payload - 2]
		},
	},
})

export const {
	reducer: coursePageReducer,
	useActions: useCoursePageActions,
	actions: coursePageActions,
} = coursePageSlice
