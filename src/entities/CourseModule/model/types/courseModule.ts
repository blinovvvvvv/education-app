import { Exercise } from '@/entities/Exercise'
import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export interface CourseModule extends IdTimestamps {
	name: string
	exercises: Exercise[]
}
