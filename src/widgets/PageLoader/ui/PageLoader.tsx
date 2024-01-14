import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
	className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
	return (
		<svg className={cn(styles.loader, className)} viewBox='0 0 24 24'>
			<circle className={styles.value} cx='12' cy='12' r='10' />
			<circle className={styles.value} cx='12' cy='12' r='10' />
			<circle className={styles.value} cx='12' cy='12' r='10' />
			<circle className={styles.value} cx='12' cy='12' r='10' />
			<circle className={styles.value} cx='12' cy='12' r='10' />
			<circle className={styles.value} cx='12' cy='12' r='10' />
		</svg>
	)
})
