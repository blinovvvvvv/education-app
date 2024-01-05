import { ToggleButton } from '@/features/toggleHeader'
import { cn } from '@/shared/lib/classNames/classNames'
import { Container } from '@/shared/ui/Container/Container'
import { Divider } from '@/shared/ui/Divider/Divider'
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
									content={[
										{ link: 'company', text: 'О нас' },
										{ link: 'results', text: 'Результаты' },
										{ link: 'reviews', text: 'Отзывы' },
										{ link: 'contacts', text: 'Контакты' },
										{ link: 'career', text: 'Вакансии' },
										{ link: 'about', text: 'О платформе' },
										{ link: 'career-center', text: 'Центр карьеры' },
										{ link: 'school', text: 'Школа кураторов' },
										{ link: 'sales', text: 'Скидки для друзей' },
										{ link: 'community', text: 'Сообщество Курсач' },
									]}
									buttonText='О Курсач'
								/>,
								<Dropdown
									content={[
										{ link: 'webinars', text: 'Все вебинары' },
										{ link: 'playlists', text: 'Плейлисты' },
										{ link: 'schedule', text: 'Расписание' },
									]}
									buttonText='Вебинары'
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
							<div className='bg-white'>
								<Container>
									<Divider />
									<div className='bg-white'>Header bottom</div>
								</Container>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
