import { cn } from '@/shared/lib/classNames/classNames'
import {
	ChangeEvent,
	FC,
	InputHTMLAttributes,
	memo,
	useCallback,
	useState,
} from 'react'
import { Picture } from '../Picture/Picture'
import styles from './Input.module.scss'

interface InputProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'onChange' | 'value' | 'onBlur' | 'onFocus'
	> {
	value?: string
	onChange?: (value: string) => void
	onBlur?: () => void
	onFocus?: () => void
	className?: string
	placeholder?: string
	icon?: string
}

export const Input: FC<InputProps> = memo(
	({
		className,
		placeholder,
		icon,
		value,
		onChange,
		onBlur,
		onFocus,
		...otherProps
	}) => {
		const [focused, setIsFocused] = useState(false)

		const onChangeHandler = useCallback(
			(e: ChangeEvent<HTMLInputElement>) => {
				onChange?.(e.target.value)
			},
			[onChange]
		)

		const onFocusHandler = useCallback(() => {
			setIsFocused(true)
			onFocus?.()
		}, [onFocus])

		const onBlurHandler = useCallback(() => {
			setIsFocused(false)
			onBlur?.()
		}, [onBlur])

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
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
					placeholder={placeholder}
					className={styles.input}
					{...otherProps}
				/>
			</div>
		)
	}
)
