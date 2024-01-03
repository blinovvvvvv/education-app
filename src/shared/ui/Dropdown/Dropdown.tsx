import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { FC, memo, PropsWithChildren, useMemo } from 'react'
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

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = memo(
	({ buttonText, content }) => {
		const { onMouseEnter, onMouseLeave, isHover } = useHover()

		const dropdownItems = useMemo(
			() =>
				content.map(item => (
					<li key={item.link}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				)),
			[content]
		)

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
					{dropdownItems}
				</ul>
			</div>
		)
	}
)
