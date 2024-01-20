import { CourseList } from '@/entities/Course'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Container } from '@/shared/ui/Container/Container'
import { Title } from '@/shared/ui/Title/Title'
import { DashboardHeader } from '@/widgets/DashboardHeader'
import { Page } from '@/widgets/Page'
import { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchUserCourses } from '../model/services/fetchUserCourses/fetchUserCourses'
import { getUserCourses } from '../model/slice/dashboardPage.slice'

interface DashboardProps {
	className?: string
}

const Dashboard: FC<DashboardProps> = ({ className }) => {
	const { login } = useAuth()
	const courses = useTypedSelector(getUserCourses.selectAll)
	const isLoading = useTypedSelector(state => state.dashboardPage.isLoading)
	const error = useTypedSelector(state => state.dashboardPage.error)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUserCourses())
	}, [dispatch])

	return (
		<Page noHeader customHeader={<DashboardHeader />} className={cn(className)}>
			<Helmet>
				<title>Мое обучение - Курсач</title>
			</Helmet>
			<Container className='min-w-[1600px]'>
				<div className='mt-28 flex flex-col h-[40rem] gap-4 justify-between'>
					<div className='max-w-[500px] flex flex-col gap-4'>
						<Title>{login}, привет!</Title>
						<div className='text-[20px]'>
							Сегодня отличный день, чтобы узнать новое или закрепить знания на
							практике.
						</div>
					</div>
					<div>
						<Title size='s' level='h2'>
							Ваши курсы
						</Title>
						<CourseList items={courses} />
					</div>
				</div>
			</Container>
		</Page>
	)
}

export default Dashboard
