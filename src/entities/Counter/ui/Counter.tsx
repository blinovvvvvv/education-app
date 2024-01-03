import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getValue } from '../model/selectors/getValue'
import { useCounterActions } from '../model/slice/counter.slice'

export const Counter: FC = () => {
	const value = useSelector(getValue)
	const { decrement, increment } = useCounterActions()
	return (
		<div>
			<p>{value}</p>
			<button onClick={() => decrement()}>decrement</button>
			<button onClick={() => increment()}>increment</button>
		</div>
	)
}
