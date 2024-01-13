import { Course } from '@/entities/Course'
import axios from 'axios'

export const findCourses = async (searchTerm?: string) => {
	try {
		const data = await axios.get<Course[]>(`${__API__}/course`, {
			params: searchTerm ? { s: searchTerm } : {},
		})

		return data.data
	} catch (e) {
		console.error(e)
	}
}
