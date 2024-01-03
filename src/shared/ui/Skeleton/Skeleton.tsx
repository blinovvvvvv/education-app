import { cn } from '@/shared/lib/classNames/classNames'
import { CSSProperties, FC, memo } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
	className?: string
	width?: CSSProperties['width']
	height?: CSSProperties['height']
}

export const Skeleton: FC<SkeletonProps> = memo(
	({ className, height, width }) => {
		return (
			<div
				className={cn(styles.skeleton, className)}
				style={{ width, height }}
			/>
		)
	}
)
