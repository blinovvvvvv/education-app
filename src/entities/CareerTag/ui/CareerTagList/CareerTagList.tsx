import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'

interface CareerTagListProps {
	className?: string
}

export const CareerTagList: FC<CareerTagListProps> = ({ className }) => {
	return <div className={cn(className)}>CareerTagList</div>
}
