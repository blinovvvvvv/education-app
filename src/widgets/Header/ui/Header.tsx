import { cn } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Menu } from '@/shared/ui/Menu/Menu'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { HeaderCurtain } from './HeaderCurtain/HeaderCurtain'

export const Header: FC = () => {
	const [toggle, setToggle] = useState(false)
	const navigate = useNavigate()

	if (toggle) {
		document.body.className = 'overflow-hidden'
	} else {
		document.body.className = ''
	}

	const onToggle = () => {
		setToggle(prev => !prev)
	}

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
						<Button
							className='text-[15px]'
							theme='clear'
							onClick={() => navigate('/login')}
						>
							Войти
						</Button>
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
