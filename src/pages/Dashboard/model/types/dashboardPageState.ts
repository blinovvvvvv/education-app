import { Course } from '@/entities/Course'
import { EntityState } from '@reduxjs/toolkit'

export interface DashboardPageState extends EntityState<Course, number> {
	isLoading?: boolean
	error?: string
}
