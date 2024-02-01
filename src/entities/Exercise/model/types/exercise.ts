import { User } from '@/entities/User'
import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export type ExerciseBlockType = 'CODE' | 'TEXT'

export interface ExerciseBlock extends IdTimestamps {
	type: ExerciseBlockType
	content: string
}

export interface Exercise extends IdTimestamps {
	name: string
	body: ExerciseBlock[]
	completedUsers: User[]
}

export interface ExerciseState {
	isLoading: boolean
	error?: string
	data?: Exercise
}
