import { EntityState } from '@reduxjs/toolkit'
import { Exercise } from './exercise'

export interface CoursePageState extends EntityState<Exercise, number> {
	currentExercise?: number
	isPrev?: boolean
	isNext?: boolean
}
