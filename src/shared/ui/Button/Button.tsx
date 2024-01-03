import { cn } from '@/shared/lib/classNames/classNames'
import { FC, HTMLAttributes, memo, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

type ButtonTheme = 'default' | 'clear' | 'outline'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ className, theme = 'default', children, ...otherProps }) => {
		return (
			<button
				className={cn(styles.button, styles[theme], className)}
				{...otherProps}
			>
				{children}
			</button>
		)
	}
)
