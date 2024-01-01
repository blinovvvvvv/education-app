import { CounterState } from '@/entities/Counter/model/types/counter.state'
import { buildSlice } from '@/shared/lib/store/buildSlice/buildSlice'

const initialState: CounterState = {
	value: 0,
}

export const counterSlice = buildSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
	},
})

export const { useActions: useCounterActions } = counterSlice
