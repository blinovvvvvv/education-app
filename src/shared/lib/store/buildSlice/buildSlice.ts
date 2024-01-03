import {
	bindActionCreators,
	createSlice,
	CreateSliceOptions,
	SliceCaseReducers,
	SliceSelectors,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch'

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
