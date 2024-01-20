import { CourseModule } from '@/entities/CourseModule'
import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export interface Course extends IdTimestamps {
	name: string
	description: string
	slug: string
	modules: CourseModule[]
}
