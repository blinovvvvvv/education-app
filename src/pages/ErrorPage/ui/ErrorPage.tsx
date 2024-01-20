import { cn } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { Title } from '@/shared/ui/Title/Title'
import { FC } from 'react'

interface ErrorPageProps {
	className?: string
}

const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
	const onClick = () => {
		location.reload()
	}
	return (
		<div className={cn(className)}>
			<Title size='xl'>Произошла непредвиденная ошибка</Title>
			<Button onClick={onClick}>Перезагрузить страницу</Button>
		</div>
	)
}

export default ErrorPage
