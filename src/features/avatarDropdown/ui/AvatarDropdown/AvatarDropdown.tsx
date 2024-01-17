import { useUserActions } from '@/entities/User'
import userIcon from '@/shared/assets/user.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useOutside } from '@/shared/lib/hooks/useOutside/useOutside'
import { Button } from '@/shared/ui/Button/Button'
import { Divider } from '@/shared/ui/Divider/Divider'
import { List } from '@/shared/ui/List/List'
import { ListItem } from '@/shared/ui/List/ListItem/ListItem'
import { Picture } from '@/shared/ui/Picture/Picture'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
	const navigate = useNavigate()
	const { visible, setIsVisible, ref } = useOutside(false)
	const { logout } = useUserActions()

	const onClick = () => {
		setIsVisible(prev => !prev)
	}

	return (
		<div ref={ref} className={cn(styles.AvatarDropdown, className)}>
			<div className={styles.avatar} onClick={onClick}>
				<Picture src={userIcon} alt={'icon'} />
			</div>
			<List
				direction='vertical'
				className={cn('gap-1', styles.content, {
					[styles.open]: visible,
				})}
			>
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
					<Button onClick={() => logout()} theme='clear'>
						Выход
					</Button>
				</ListItem>
			</List>
		</div>
	)
}
