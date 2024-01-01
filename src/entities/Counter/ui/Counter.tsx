import { getValue } from '@/entities/Counter/model/selectors/getValue'
import { useCounterActions } from '@/entities/Counter/model/slice/counter.slice'
import { FC } from 'react'
import { useSelector } from 'react-redux'

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
