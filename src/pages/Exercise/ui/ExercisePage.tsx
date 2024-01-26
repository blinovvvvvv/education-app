import { BackButton } from '@/features/backButton'
import { Container } from '@/shared/ui/Container/Container'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

interface ExercisePageProps {
	className?: string
}

const ExercisePage: FC<ExercisePageProps> = ({ className }) => {
	const { id } = useParams()
	return (
		<Page customHeader={<DashboardHeader />} className={className}>
			<Container className='min-w-[1600px] mt-8'>
				<BackButton />
			</Container>
		</Page>
	)
}

export default ExercisePage
