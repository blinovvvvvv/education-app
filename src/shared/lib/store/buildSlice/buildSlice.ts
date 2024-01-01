import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
	bindActionCreators,
	createSlice,
	CreateSliceOptions,
	SliceCaseReducers,
	SliceSelectors,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'

export function buildSlice<
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string,
	Selectors extends SliceSelectors<State>,
	ReducerPath extends string = Name
>(
	options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>
) {
	const slice = createSlice(options)

	const useActions = (): typeof slice.actions => {
		const dispatch = useAppDispatch()

		return useMemo(() => bindActionCreators(slice.actions, dispatch), [])
	}

	return {
		...slice,
		useActions,
	}
}
