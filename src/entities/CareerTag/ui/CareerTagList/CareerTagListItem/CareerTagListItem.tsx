import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { CareerTag } from '../../../model/types/CareerTag.types'
import styles from './CareerTagListItem.module.scss'

interface CareerTagListItemProps {
	className?: string
	item: CareerTag
}

export const CareerTagListItem: FC<CareerTagListItemProps> = ({
	className,
	item,
}) => {
	return (
		<Link to={item.link} className={cn(styles.item, className)}>
			{item.name}
		</Link>
	)
}
