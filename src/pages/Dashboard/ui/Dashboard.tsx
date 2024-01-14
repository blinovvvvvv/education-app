import { cn } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

interface DashboardProps {
	className?: string
}

const Dashboard: FC<DashboardProps> = ({ className }) => {
	return (
		<Page noHeader className={cn(className)}>
			<Helmet>
				<title>Мое обучение - Курсач</title>
			</Helmet>
			Dashboard
		</Page>
	)
}

export default Dashboard
