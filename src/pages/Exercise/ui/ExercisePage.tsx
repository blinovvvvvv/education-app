import { fetchExerciseById, useCoursePageActions } from '@/entities/Exercise'
import { BackButton } from '@/features/backButton'
// FIXME: FIX IT 👇👇👇

// FIXME: FIX IT 👆👆👆
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Container } from '@/shared/ui/Container/Container'
import { Title } from '@/shared/ui/Title/Title'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { PageLoader } from '@/widgets/PageLoader'
import { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

interface ExercisePageProps {
	className?: string
}

const ExercisePage: FC<ExercisePageProps> = ({ className }) => {
	const { id } = useParams()
	const dispatch = useAppDispatch()

	const isLoading = useTypedSelector(state => state.exercise.isLoading)
	const error = useTypedSelector(state => state.exercise.error)
	const exerciseData = useTypedSelector(state => state.exercise?.data)
	const { selectExercise } = useCoursePageActions()
	const exercise = useTypedSelector(state => state.coursePage.currentExercise)

	useEffect(() => {
		if (id) {
			dispatch(fetchExerciseById(+id))
			selectExercise(+id)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isLoading) return <PageLoader />

	return (
		<Page customHeader={<DashboardHeader />} className={className}>
			<Helmet>
				<title>{exerciseData?.name}</title>
			</Helmet>
			<Container className='min-w-[1600px] mt-8'>
				<div className='flex items-center gap-20'>
					<BackButton />
					<Title size='s'>{exerciseData?.name}</Title>
				</div>
			</Container>
		</Page>
	)
}

export default ExercisePage
