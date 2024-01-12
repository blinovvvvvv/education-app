import { rtkApi } from '@/shared/api/rtkApi'
import { Course } from '../types/course'

export const courseApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getAllCourses: build.query<Course[], string | void>({
			query: (searchTerm?: string) => ({
				url: '/course',
				method: 'GET',
				params: {
					s: searchTerm,
				},
			}),
		}),
	}),
})

export const useCourses = courseApi.useGetAllCoursesQuery
