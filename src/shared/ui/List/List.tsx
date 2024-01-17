import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import styles from './List.module.scss'

export type ListDirection = 'vertical' | 'horizontal'

interface ListProps {
	direction?: ListDirection
	className?: string
}

export const List: FC<PropsWithChildren<ListProps>> = memo(
	({ className, direction = 'horizontal', children }) => {
		return (
			<ul className={cn(styles.list, className, styles[direction])}>
				{children}
			</ul>
		)
	}
)
