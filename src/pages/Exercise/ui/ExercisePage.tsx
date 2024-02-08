import {
	ExerciseDetails,
	fetchExerciseById,
	useCoursePageActions,
} from '@/entities/Exercise'
import { BackButton } from '@/features/backButton'
import { SwitchExercise } from '@/features/switchExercise'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Container } from '@/shared/ui/Container/Container'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { PageLoader } from '@/widgets/PageLoader'
import { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import styles from './ExercisePage.module.scss'

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

	const exerciseId = useTypedSelector(state => state.coursePage.currentExercise)
	const prevExerciseId = Number(exerciseId) - 1
	const nextExerciseId = Number(exerciseId) + 1
	const isPrev = useTypedSelector(state => state.coursePage.isPrev)
	const isNext = useTypedSelector(state => state.coursePage.isNext)

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
				<div className={styles.layout}>
					<BackButton className='self-start' />
					{id && <ExerciseDetails id={+id} />}
					{exerciseId && (
						<div className='flex self-start justify-end gap-2'>
							{isPrev && (
								<SwitchExercise
									id={prevExerciseId}
									link={`/exercise/${prevExerciseId}`}
								/>
							)}
							{isNext && (
								<SwitchExercise
									id={nextExerciseId}
									direction='right'
									link={`/exercise/${nextExerciseId}`}
								/>
							)}
						</div>
					)}
				</div>
			</Container>
		</Page>
	)
}

export default ExercisePage
