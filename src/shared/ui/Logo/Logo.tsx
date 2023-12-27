import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Logo: FC = () => {
	return (
		<Link to='/' className='font-semibold text-xl text-blue'>
			Курсач
		</Link>
	)
}
