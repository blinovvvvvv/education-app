import { rtkApi } from '@/shared/api/rtkApi'
import { CareerTag } from '../types/CareerTag.types'

const tagApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getAllTags: build.query<CareerTag[], void>({
			query: () => '/category',
		}),
	}),
})

export const useTags = tagApi.useGetAllTagsQuery
