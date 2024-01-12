import { cn } from '@/shared/lib/classNames/classNames'
import { FC, PropsWithChildren } from 'react'
import styles from './Menu.module.scss'

interface MenuProps {
	className?: string
}

export const Menu: FC<PropsWithChildren<MenuProps>> = ({
	children,
	className,
}) => {
	return <ul className={cn(styles.menu, className)}>{children}</ul>
}
