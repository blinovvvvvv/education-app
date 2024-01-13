import { Course } from '@/entities/Course'
import { cn } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { FC, memo } from 'react'
import styles from './DropdownSearchList.module.scss'

interface DropdownSearchListProps {
	className?: string
	items: Course[]
}

export const DropdownSearchList: FC<DropdownSearchListProps> = memo(
	({ className, items }) => {
		return (
			<ul className={cn(styles.list, className)}>
				{items.map(item => (
					<li className={styles.item} key={item.id}>
						<AppLink to={`course/${item.id}`}>{item.name}</AppLink>
					</li>
				))}
			</ul>
		)
	}
)
