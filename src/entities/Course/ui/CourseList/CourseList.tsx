import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import { Course } from '../..'
import { CourseCard } from '../CourseCard/CourseCard'
import styles from './CourseList.module.scss'

interface CourseListProps {
	className?: string
	items: Course[]
}

export const CourseList: FC<CourseListProps> = ({ className, items }) => {
	return (
		<div className={cn(styles.CourseList, className)}>
			{items.map(item => (
				<CourseCard course={item} key={item.id} />
			))}
		</div>
	)
}
