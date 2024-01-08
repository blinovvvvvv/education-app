import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'

interface CardProps {
	className?: string
	hover?: boolean
	link?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = memo(
	({ className, children, hover, link }) => {
		const navigate = useNavigate()

		const onClickHandler = useCallback(() => {
			if (link) navigate(link)
		}, [link, navigate])

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
)
