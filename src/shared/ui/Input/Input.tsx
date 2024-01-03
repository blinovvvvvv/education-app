import { cn } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, FC, InputHTMLAttributes, memo, useState } from 'react'
import { Picture } from '../Picture/Picture'
import styles from './Input.module.scss'

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
	value?: string
	onChange?: (value: string) => void
	className?: string
	placeholder?: string
	icon?: string
}

export const Input: FC<InputProps> = memo(
	({ className, placeholder, icon, value, onChange, ...otherProps }) => {
		const [focused, setIsFocused] = useState(false)

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value)
		}

		const onFocus = () => setIsFocused(true)
		const onBlur = () => setIsFocused(false)

		return (
			<div
				className={cn(styles.wrapper, className, {
					[styles.focused]: focused,
				})}
			>
				{icon && <Picture src={icon} alt={'searchIcon'} />}
				<input
					onChange={onChangeHandler}
					value={value}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder={placeholder}
					className={styles.input}
					{...otherProps}
				/>
			</div>
		)
	}
)
