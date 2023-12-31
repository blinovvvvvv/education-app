import { cn } from '@/shared/lib/classNames/classNames'
import { FC, PropsWithChildren } from 'react'
import styles from './Card.module.scss'

interface CardProps {
	className?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
	className,
	children,
}) => {
	return <div className={cn(styles.card, className)}>{children}</div>
}
