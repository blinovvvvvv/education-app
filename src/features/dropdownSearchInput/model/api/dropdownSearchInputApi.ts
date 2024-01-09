import { rtkApi } from '@/shared/api/rtkApi'

export const dropdownSearchInputApi = rtkApi.injectEndpoints({
	endpoints: builder => ({
		// FIXME: доделать эндпоинт
		findCourse: builder.query</*Course*/ void, void>({
			query: () => '',
		}),
	}),
})
