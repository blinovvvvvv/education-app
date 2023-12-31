import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'

interface CareerTagListItemProps {
	className?: string
}

export const CareerTagListItem: FC<CareerTagListItemProps> = ({
	className,
}) => {
	return <div className={cn(className)}>CareerTagListItem</div>
}
