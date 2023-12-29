import { cn } from '@/shared/lib/classNames/classNames'
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import styles from './ToggleButton.module.scss'

/// FIXME: REFACTOR!!! GOVNO!!!
interface ToggleButtonProps {
	toggleFn: Dispatch<SetStateAction<boolean>>
	toggleStatus: boolean
}

/// FIXME: REFACTOR!!! GOVNO!!!
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
