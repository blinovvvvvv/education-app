import { CourseModule } from '@/entities/CourseModule'
import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export interface Course extends IdTimestamps {
	name: string
	description: string
	slug: string
	modules: CourseModule[]
}

export interface CourseState {
	error?: string
	isLoading: boolean
	data?: Course
}
