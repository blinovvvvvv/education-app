import bookIcon from '@/shared/assets/books.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { Picture } from '@/shared/ui/Picture/Picture'
import { Title } from '@/shared/ui/Title/Title'
import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Course } from '../..'
import styles from './CourseCard.module.scss'

interface CourseCardProps {
	className?: string
	course: Course
}

export const CourseCard: FC<CourseCardProps> = memo(({ className, course }) => {
	const navigate = useNavigate()

	const onClick = useCallback(() => {
		navigate(`/course/${course.id}`)
	}, [course.id, navigate])

	return (
		<div onClick={onClick} className={cn(styles.CourseCard, className)}>
			<Title size='xs' level='h3'>
				{course.name}
			</Title>
			<Picture width={100} height={100} src={bookIcon} alt={'Book'} />
		</div>
	)
})
