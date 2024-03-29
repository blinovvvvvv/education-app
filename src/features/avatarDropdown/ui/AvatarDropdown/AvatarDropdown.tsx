import { ProfileCard } from '@/entities/Profile'
import { useUserActions } from '@/entities/User'
import userIcon from '@/shared/assets/user.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { useOutside } from '@/shared/lib/hooks/useOutside/useOutside'
import { Button } from '@/shared/ui/Button/Button'
import { Divider } from '@/shared/ui/Divider/Divider'
import { List } from '@/shared/ui/List/List'
import { ListItem } from '@/shared/ui/List/ListItem/ListItem'
import { Picture } from '@/shared/ui/Picture/Picture'
import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
	const navigate = useNavigate()
	const { visible, setIsVisible, ref } = useOutside(false)
	const { logout } = useUserActions()
	const user = useAuth()

	const onClick = useCallback(() => {
		setIsVisible(prev => !prev)
	}, [setIsVisible])

	const onLogout = useCallback(() => {
		logout()
		navigate('/')
	}, [logout, navigate])

	return (
		<div
			data-testid='avatar-dropdown'
			ref={ref}
			className={cn(styles.AvatarDropdown, className)}
		>
			<div className={styles.avatar} onClick={onClick}>
				<Picture src={userIcon} alt={'icon'} />
			</div>
			<List
				data-testid='avatar-dropdown.content'
				direction='vertical'
				className={cn('gap-1', styles.content, {
					[styles.open]: visible,
				})}
			>
				<ListItem>
					<ProfileCard
						data={user}
						icon={
							<div className={styles.avatar} onClick={onClick}>
								<Picture src={userIcon} alt={'icon'} />
							</div>
						}
					/>
				</ListItem>
				<ListItem>
					<Button theme='clear' onClick={() => navigate('/courses')}>
						Все курсы и профессии
					</Button>
				</ListItem>
				<ListItem>
					<Button theme='clear' onClick={() => navigate('/profile')}>
						Профиль
					</Button>
				</ListItem>
				<ListItem>
					<Button theme='clear' onClick={() => navigate('/notifications')}>
						Настройка уведомлений
					</Button>
				</ListItem>

				<Divider />

				<ListItem>
					<Button theme='clear' onClick={() => navigate('/contacts')}>
						Контакты
					</Button>
				</ListItem>
				<ListItem>
					<Button onClick={onLogout} theme='clear'>
						Выход
					</Button>
				</ListItem>
			</List>
		</div>
	)
}
