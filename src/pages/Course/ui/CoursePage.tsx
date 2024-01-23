import { CourseCard, fetchCourseById } from '@/entities/Course'
import { BackButton } from '@/features/backButton'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Container } from '@/shared/ui/Container/Container'
import { Title } from '@/shared/ui/Title/Title'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { PageLoader } from '@/widgets/PageLoader'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface CoursePageProps {
	className?: string
}

const CoursePage: FC<CoursePageProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const { id } = useParams()
	const course = useTypedSelector(state => state.coursePage.data)
	const error = useTypedSelector(state => state.coursePage?.error)
	const isLoading = useTypedSelector(state => state.coursePage?.isLoading)

	useEffect(() => {
		if (id) dispatch(fetchCourseById(+id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isLoading) return <PageLoader />
	if (!course) return <Title size='l'>Не удалось найти курс</Title>

	return (
		<Page customHeader={<DashboardHeader />} className={cn(className)}>
			<Container className='min-w-[1600px] mt-8'>
				<BackButton className='mb-12' />
				<div className='flex'>
					<CourseCard course={course} />
				</div>
			</Container>
		</Page>
	)
}

export default CoursePage
