import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import styles from './ListItem.module.scss'

interface ListItemProps {
	className?: string
}

export const ListItem: FC<PropsWithChildren<ListItemProps>> = memo(
	({ className, children }) => {
		return <li className={cn(styles.item, className)}>{children}</li>
	}
)
