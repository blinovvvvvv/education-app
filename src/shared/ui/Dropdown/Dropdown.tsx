import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styles from './Dropdown.module.scss'

interface DropdownContent {
	link: string
	text: string
}

interface DropdownProps {
	buttonText: string
	content: DropdownContent[]
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	buttonText,
	content,
}) => {
	const { onMouseEnter, onMouseLeave, isHover } = useHover()

	return (
		<div
			className={styles.dropdown}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<button className={styles.button}>{buttonText}</button>

			<ul
				className={styles.content}
				style={{ display: isHover ? 'flex' : 'none' }}
			>
				{content.map(item => (
					<li key={item.link}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
