import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import styles from './Divider.module.scss'

interface DividerProps {
	className?: string
}

export const Divider: FC<DividerProps> = memo(({ className }) => {
	return <div className={cn(styles.divider, className)} />
})
