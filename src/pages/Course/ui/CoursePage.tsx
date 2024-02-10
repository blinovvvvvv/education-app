import { CourseCard, fetchCourseById } from '@/entities/Course'
import { ExerciseList } from '@/entities/Exercise'

import { BackButton } from '@/features/backButton'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Accordion } from '@/shared/ui/Accordion/Accordion'
import { Container } from '@/shared/ui/Container/Container'
import { Divider } from '@/shared/ui/Divider/Divider'
import { Title } from '@/shared/ui/Title/Title'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { PageLoader } from '@/widgets/PageLoader'
import { FC, Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useCoursePageActions } from '../model/slice/coursePage.slice'

interface CoursePageProps {
	className?: string
}

const CoursePage: FC<CoursePageProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const { id } = useParams()
	const course = useTypedSelector(state => state.course.data)
	const error = useTypedSelector(state => state.course?.error)
	const isLoading = useTypedSelector(state => state.course?.isLoading)
	const { addExercises } = useCoursePageActions()

	useEffect(() => {
		if (id) dispatch(fetchCourseById(+id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (course)
			addExercises(
				course?.modules.flatMap(item => item.exercises.map(item => item))
			)
	}, [addExercises, course])

	if (isLoading) return <PageLoader />
	if (!course) return <Title size='l'>Не удалось найти курс</Title>

	return (
		<Page customHeader={<DashboardHeader />} className={cn(className)}>
			<Helmet>
				<title>{course?.name}</title>
			</Helmet>
			<Container className='min-w-[1600px] mt-8'>
				<BackButton link='/dashboard' className='mb-12' />
				<div className='flex gap-8 justify-between'>
					<CourseCard className='self-start' course={course} />
					<div className='flex-grow max-w-[800px]'>
						<Divider />
						{course.modules.map((module, index) => (
							<Fragment key={module.id}>
								<Accordion
									content={
										<ExerciseList className='my-3' items={module.exercises} />
									}
									title={module.name}
								/>
								{index % 2 === 0 && <Divider />}
							</Fragment>
						))}
						<Divider />
					</div>
				</div>
			</Container>
		</Page>
	)
}

export default CoursePage
