import { AvatarDropdown } from '@/features/avatarDropdown'
import { cn } from '@/shared/lib/classNames/classNames'
import { Container } from '@/shared/ui/Container/Container'
import { Logo } from '@/shared/ui/Logo/Logo'
import { FC, memo } from 'react'
import styles from './DashboardHeader.module.scss'

interface DashboardHeaderProps {
	className?: string
}

export const DashboardHeader: FC<DashboardHeaderProps> = memo(
	({ className }) => {
		return (
			<Container className={cn(styles.header, className, 'min-w-[1600px]')}>
				<Logo />
				<AvatarDropdown />
			</Container>
		)
	}
)
