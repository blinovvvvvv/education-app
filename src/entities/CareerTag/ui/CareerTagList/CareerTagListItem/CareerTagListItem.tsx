import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { CareerTag } from '../../../model/types/CareerTag.types'
import styles from './CareerTagListItem.module.scss'

interface CareerTagListItemProps {
	className?: string
	item: CareerTag
	outline?: boolean
}

export const CareerTagListItem: FC<CareerTagListItemProps> = memo(
	({ className, item, outline }) => {
		return (
			<Link
				to={item.link}
				className={cn(styles.item, className, {
					[styles.outline]: outline,
				})}
			>
				{item.name}
			</Link>
		)
	}
)
