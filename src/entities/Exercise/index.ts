export { completeExerciseById } from './model/services/completeExerciseById/completeExerciseById'
export { fetchExerciseById } from './model/services/fetchExerciseById/fetchExerciseById'
export {
	coursePageActions,
	coursePageReducer,
	useCoursePageActions,
} from './model/slice/exercise.slice'
export { exerciseReducer } from './model/slice/exercisePage.slice'
export type { CoursePageState } from './model/types/coursePageState'
export type { Exercise, ExerciseState } from './model/types/exercise'
export { ExerciseCard } from './ui/ExerciseCard/ExerciseCard'
export { ExerciseDetails } from './ui/ExerciseDetails/ExerciseDetails'
export { ExerciseList } from './ui/ExerciseList/ExerciseList'
