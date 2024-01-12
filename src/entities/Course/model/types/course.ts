import { IdTimestamps } from '@/shared/types/backendIdTimestamps'

export interface Course extends IdTimestamps {
	name: string
	description: string
}
