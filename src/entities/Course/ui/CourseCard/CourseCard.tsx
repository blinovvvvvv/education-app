import bookIcon from '@/shared/assets/books.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { Picture } from '@/shared/ui/Picture/Picture'
import { Title } from '@/shared/ui/Title/Title'
import { FC, memo } from 'react'
import { Course } from '../..'
import styles from './CourseCard.module.scss'

interface CourseCardProps {
	className?: string
	course: Course
}

export const CourseCard: FC<CourseCardProps> = memo(({ className, course }) => {
	return (
		<div className={cn(styles.CourseCard, className)}>
			<div>
				<Title size='xs' level='h3'>
					{course.name}
				</Title>
				<Picture src={bookIcon} alt={'Book'} />
			</div>
		</div>
	)
})
