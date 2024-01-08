import { Container } from '@/shared/ui/Container/Container'
import { Page } from '@/widgets/Page'
import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
	return (
		<Page>
			<Helmet>
				<title>Страница не найдена</title>
			</Helmet>
			<Container>
				<div>Page not found</div>
				<Link to='/'>На главную</Link>
			</Container>
		</Page>
	)
}

export default NotFound
