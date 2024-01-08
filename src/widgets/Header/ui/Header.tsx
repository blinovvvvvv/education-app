import { LoginButton } from '@/features/auth'
import { cn } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Button } from '@/shared/ui/Button/Button'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Menu } from '@/shared/ui/Menu/Menu'
import { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { HeaderCurtain } from './HeaderCurtain/HeaderCurtain'

const dropdownContentFirst = [
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

const dropdownContentSecond = [
	{ link: 'webinars', text: 'Все вебинары' },
	{ link: 'playlists', text: 'Плейлисты' },
	{ link: 'schedule', text: 'Расписание' },
]

export const Header: FC = () => {
	const [toggle, setToggle] = useState(false)
	const navigate = useNavigate()

	if (toggle) {
		document.body.className = 'overflow-hidden'
	} else {
		document.body.className = ''
	}

	const onToggle = useCallback(() => {
		setToggle(prev => !prev)
	}, [])

	const onLoginClick = useCallback(() => {
		navigate('/login')
	}, [navigate])

	return (
		<div className={styles.wrapper}>
			<div className='max-w-[1280px] mx-auto'>
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
						>
							Все курсы
						</Button>
					</div>
					<div className='flex items-center gap-6'>
						<Menu
							dropdown={[
								<Dropdown
									content={dropdownContentFirst}
									buttonText='О Курсач'
								/>,
								<Dropdown
									content={dropdownContentSecond}
									buttonText='Вебинары'
								/>,
							]}
						>
							<AppLink to='/media'>Медиа</AppLink>
							<AppLink to='/b2b'>Компаниям</AppLink>
						</Menu>
						<LoginButton className='text-[15px]' />
					</div>
				</div>
				{toggle && (
					<div className={styles.curtain}>
						<HeaderCurtain />
					</div>
				)}
			</div>
		</div>
	)
}
