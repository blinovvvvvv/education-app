import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'

interface CoursePageProps {
	className?: string
}

const CoursePage: FC<CoursePageProps> = ({ className }) => {
	return <div className={cn(className)}>CoursePage</div>
}

export default CoursePage
