import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

export const Logo: FC = memo(() => {
	return (
		<Link to='/' className='font-semibold text-xl text-blue'>
			Курсач
		</Link>
	)
})
