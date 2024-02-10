import { cn } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC, memo, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

type ButtonTheme = 'default' | 'clear' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	disabled?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ className, theme = 'default', disabled, children, ...otherProps }) => {
		return (
			<button
				className={cn(styles.button, styles[theme], className, {
					[styles.disabled]: disabled,
				})}
				disabled={disabled}
				{...otherProps}
			>
				{children}
			</button>
		)
	}
)
