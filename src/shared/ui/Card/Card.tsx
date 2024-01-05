import { cn } from '@/shared/lib/classNames/classNames'
import { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'

interface CardProps {
	className?: string
	hover?: boolean
	link?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
	className,
	children,
	hover,
	link,
}) => {
	const navigate = useNavigate()

	const onClickHandler = () => {
		if (link) navigate(link)
	}

	return (
		<div
			role={link ? 'button' : 'banner'}
			onClick={onClickHandler}
			className={cn(styles.card, className, {
				[styles.hover]: hover,
			})}
		>
			{children}
		</div>
	)
}
