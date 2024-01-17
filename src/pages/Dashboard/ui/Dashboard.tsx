import { cn } from '@/shared/lib/classNames/classNames'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

interface DashboardProps {
	className?: string
}

const Dashboard: FC<DashboardProps> = ({ className }) => {
	return (
		<Page noHeader customHeader={<DashboardHeader />} className={cn(className)}>
			<Helmet>
				<title>Мое обучение - Курсач</title>
			</Helmet>
		</Page>
	)
}

export default Dashboard
