import { cn } from '@/shared/lib/classNames/classNames'
import { Children, FC, PropsWithChildren, ReactNode } from 'react'
import styles from './Menu.module.scss'

interface MenuProps {
	dropdown?: ReactNode[]
}

export const Menu: FC<PropsWithChildren<MenuProps>> = ({
	children,
	dropdown,
}) => {
	const arrayChildren = Children.toArray(children)

	return (
		<ul className={styles.menu}>
			{dropdown?.map((dropdown, index) => (
				<li className={cn(styles.item, styles.dropdown)} key={index}>
					{dropdown}
				</li>
			))}
			{arrayChildren.map((child, index) => (
				<li className={styles.item} key={index}>
					{child}
				</li>
			))}
		</ul>
	)
}
