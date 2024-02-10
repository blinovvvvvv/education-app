import {
	ExerciseDetails,
	completeExerciseById,
	fetchExerciseById,
	useCoursePageActions,
} from '@/entities/Exercise'
import { BackButton } from '@/features/backButton'
import { SwitchExercise } from '@/features/switchExercise'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { PageLoader } from '@/widgets/PageLoader'
import { FC, useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import styles from './ExercisePage.module.scss'

interface ExercisePageProps {
	className?: string
}

const ExercisePage: FC<ExercisePageProps> = ({ className }) => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const { id: userId } = useAuth()

	const isLoading = useTypedSelector(state => state.exercise.isLoading)
	const error = useTypedSelector(state => state.exercise.error)

	const exerciseData = useTypedSelector(state => state.exercise?.data)
	const courseId = useTypedSelector(state => state.course.data?.id)
	const { selectExercise } = useCoursePageActions()

	const isExerciseCompleted = exerciseData?.completedUsers.some(
		user => user.id === userId
	)

	const exerciseId = useTypedSelector(state => state.coursePage.currentExercise)
	const prevExerciseId = Number(exerciseId) - 1
	const nextExerciseId = Number(exerciseId) + 1
	const isPrev = useTypedSelector(state => state.coursePage.isPrev)
	const isNext = useTypedSelector(state => state.coursePage.isNext)

	const onComplete = useCallback(async () => {
		if (id) {
			await dispatch(completeExerciseById(+id))
		}
	}, [dispatch, id])

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
					<BackButton link={`/course/${courseId}`} className='self-start' />
					{id && <ExerciseDetails id={+id} />}
					{exerciseId && (
						<div>
							<div className='flex gap-2 mb-3'>
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
							<Button onClick={onComplete} disabled={isExerciseCompleted}>
								{isExerciseCompleted ? 'Завершено' : 'Завершить'}
							</Button>
						</div>
					)}
				</div>
			</Container>
		</Page>
	)
}

export default ExercisePage
