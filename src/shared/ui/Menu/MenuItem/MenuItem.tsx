import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import styles from './MenuItem.module.scss'

interface MenuItemProps {
	className?: string
	dropdown?: boolean
}

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = memo(
	({ className, dropdown, children }) => {
		return (
			<li
				className={cn(styles.item, className, {
					[styles.dropdown]: dropdown,
				})}
			>
				{children}
			</li>
		)
	}
)
