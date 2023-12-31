import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import styles from './Title.module.scss'

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type TitleSize = 's' | 'm' | 'l' | 'xl'

interface TitleProps {
	className?: string
	level?: TitleLevel
	size?: TitleSize
}

export const Title: FC<PropsWithChildren<TitleProps>> = memo(
	({ className, level = 'h1', size = 'm', children }) => {
		const LevelTitle = level

		return (
			<LevelTitle
				className={cn(styles.title, styles[`size_${size}`], className)}
			>
				{children}
			</LevelTitle>
		)
	}
)
