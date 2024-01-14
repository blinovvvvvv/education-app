import { LoginButton } from '@/features/auth'
import { cn } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { Dropdown, DropdownContent } from '@/shared/ui/Dropdown/Dropdown'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Menu } from '@/shared/ui/Menu/Menu'
import { MenuItem } from '@/shared/ui/Menu/MenuItem/MenuItem'
import { FC, useCallback, useState } from 'react'
import styles from './Header.module.scss'
import { HeaderCurtain } from './HeaderCurtain/HeaderCurtain'

const dropdownContentFirst: DropdownContent[] = [
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
]

const dropdownContentSecond: DropdownContent[] = [
	{ link: 'webinars', text: 'Все вебинары' },
	{ link: 'playlists', text: 'Плейлисты' },
	{ link: 'schedule', text: 'Расписание' },
]

export const Header: FC = () => {
	const [toggle, setToggle] = useState(false)

	if (toggle) {
		document.body.className = 'overflow-hidden'
	} else {
		document.body.className = ''
	}

	const onToggle = useCallback(() => {
		setToggle(prev => !prev)
	}, [])

	return (
		<div className={styles.wrapper} data-testid='header'>
			<Container>
				<div
					className={cn(styles.header, {
						[styles.active]: toggle,
					})}
				>
					<div className='flex items-center gap-x-32'>
						<Logo />
						<Button
							theme='outline'
							onClick={onToggle}
							className={cn({
								[styles.toggled]: toggle,
							})}
							data-testid='header.btn'
						>
							Все курсы
						</Button>
					</div>
					<div className='flex items-center gap-6'>
						<Menu>
							<MenuItem dropdown>
								<Dropdown
									content={dropdownContentFirst}
									buttonText='О Курсач'
								/>
							</MenuItem>
							<MenuItem dropdown>
								<Dropdown
									content={dropdownContentSecond}
									buttonText='Вебинары'
								/>
							</MenuItem>
							<MenuItem>
								<AppLink to='/media'>Медиа</AppLink>
							</MenuItem>
							<MenuItem>
								<AppLink to='/b2b'>Компаниям</AppLink>
							</MenuItem>
						</Menu>
						<LoginButton className='text-[15px]' />
					</div>
				</div>
				{toggle && (
					<div className={styles.curtain}>
						<HeaderCurtain />
					</div>
				)}
			</Container>
		</div>
	)
}
