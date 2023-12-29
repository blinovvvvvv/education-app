import { ToggleButton } from '@/features/toggleHeader'
import { cn } from '@/shared/lib/classNames/classNames'
import { Container } from '@/shared/ui/Container/Container'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Menu } from '@/shared/ui/Menu/Menu'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<>
			<div className={styles.wrapper}>
				<div className='max-w-[1280px] mx-auto'>
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
					{/* FIXME: Refactor it to Menu Block component into /features */}
					{toggle && (
						<div className={styles.bottom}>
							<Container>
								<div className='bg-white'>Header bottom</div>
							</Container>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
