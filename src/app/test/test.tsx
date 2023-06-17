import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

const TestPage: FC = () => {
	return (
		<div>
			<Helmet title='test page title' />
			<div>TestPage</div>
		</div>
	)
}

export default TestPage
