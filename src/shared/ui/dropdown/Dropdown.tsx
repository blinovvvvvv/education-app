import { useHover } from '@/shared/model'
import { FC, PropsWithChildren, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Dropdown.module.scss'

interface IDropdownContent {
	link: string
	text: string
}

interface DropdownProps {
	buttonText: string
	content: IDropdownContent[]
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	buttonText,
	content,
}) => {
	// const arrayChildren = Children.toArray(children)
	const ref = useRef(null)
	const isHover = useHover(ref)

	return (
		<div className={styles.dropdown} ref={ref}>
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
