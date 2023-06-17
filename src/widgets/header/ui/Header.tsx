import { ToggleButton } from '@features/header/toggleHeader'
import { Dropdown, Logo, Menu } from '@shared/ui'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: FC = () => {
	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<>
			<div
				className={cn(styles.header, {
					[styles.active]: toggle,
				})}
			>
				<div className='flex items-center gap-x-32'>
					<Logo />
					<ToggleButton toggleFn={setToggle} toggleStatus={toggle}>
						Все курсы
					</ToggleButton>
				</div>
				<Menu
					dropdown={[
						<Dropdown
							content={[{ link: 'page', text: 'Домой' }]}
							buttonText='Dropdown'
						/>,
						<Dropdown
							content={[{ link: 'page', text: 'Домой' }]}
							buttonText='Dropdown'
						/>,
					]}
				>
					<Link to='/media'>Медиа</Link>
					<Link to='/b2b'>Компаниям</Link>
				</Menu>
			</div>
		</>
	)
}
