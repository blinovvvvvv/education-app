import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import styles from './List.module.scss'

export type ListDirection = 'vertical' | 'horizontal'

interface ListProps {
	direction?: ListDirection
	className?: string
	'data-testid'?: string
}

export const List: FC<PropsWithChildren<ListProps>> = memo(
	({
		className,
		direction = 'horizontal',
		'data-testid': dataTestId,
		children,
	}) => {
		return (
			<ul
				data-testid={dataTestId}
				className={cn(styles.list, className, styles[direction])}
			>
				{children}
			</ul>
		)
	}
)
