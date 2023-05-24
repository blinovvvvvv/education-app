import cn from 'clsx'
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
	toggleFn: Dispatch<SetStateAction<boolean>>
	toggleStatus: boolean
}

export const ToggleButton: FC<PropsWithChildren<ToggleButtonProps>> = ({
	toggleFn,
	toggleStatus,
	children,
}) => {
	return (
		<button
			className={cn(styles.toggle, {
				[styles.toggled]: toggleStatus,
			})}
			onClick={() => toggleFn(!toggleStatus)}
		>
			{children}
		</button>
	)
}
