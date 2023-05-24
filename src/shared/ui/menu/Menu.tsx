import { Children, FC, PropsWithChildren } from 'react'
import styles from './Menu.module.scss'
// interface MenuItem {
// 	text: string
// 	link: string
// }

// interface MenuProps {
// 	items: MenuItem[]
// }

export const Menu: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const arrayChildren = Children.toArray(children)

	return (
		<ul className={styles.menu}>
			{arrayChildren.map((item, index) => (
				<li className={styles.item} key={index}>
					{item}
				</li>
			))}
		</ul>
	)
}
