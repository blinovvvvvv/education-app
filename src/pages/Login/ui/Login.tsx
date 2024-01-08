import { LoginForm } from '@/features/auth'
import { Page } from '@/widgets/Page'
import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
	const navigate = useNavigate()
	const onSuccess = () => navigate('/')
	return (
		<Page noHeader>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<LoginForm onSuccess={onSuccess} />
		</Page>
	)
}

export default Login
