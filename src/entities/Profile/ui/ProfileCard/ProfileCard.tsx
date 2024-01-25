import { User } from '@/entities/User'
import { cn } from '@/shared/lib/classNames/classNames'
import { FC, ReactElement, memo } from 'react'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
	className?: string
	icon?: ReactElement
	data: User
}

export const ProfileCard: FC<ProfileCardProps> = memo(
	({ className, icon, data }) => {
		return (
			<div className={cn(styles.card, className)}>
				{icon}
				<div>{data?.login}</div>
			</div>
		)
	}
)
