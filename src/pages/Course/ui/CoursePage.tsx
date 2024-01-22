import { BackButton } from '@/features/backButton'
import { cn } from '@/shared/lib/classNames/classNames'
import { Container } from '@/shared/ui/Container/Container'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { FC } from 'react'

interface CoursePageProps {
	className?: string
}

const CoursePage: FC<CoursePageProps> = ({ className }) => {
	return (
		<Page customHeader={<DashboardHeader />} className={cn(className)}>
			<Container className='min-w-[1600px]'>
				<BackButton />
			</Container>
		</Page>
	)
}

export default CoursePage
