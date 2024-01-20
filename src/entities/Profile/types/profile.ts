import { Course } from '@/entities/Course'
import { User } from '@/entities/User'

export interface Profile extends User {
	currentCourses: Course[]
	finishedCourses: Course[]
}
