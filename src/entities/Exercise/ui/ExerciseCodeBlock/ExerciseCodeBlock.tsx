import { cn } from '@/shared/lib/classNames/classNames'
import { FC, PropsWithChildren, memo } from 'react'
import styles from './ExerciseCodeBlock.module.scss'

interface ExerciseCodeBlockProps {
	className?: string
}

export const ExerciseCodeBlock: FC<PropsWithChildren<ExerciseCodeBlockProps>> =
	memo(({ className, children }) => {
		return (
			<pre className={cn(styles.block, className)}>
				<code>{children}</code>
			</pre>
		)
	})
