import { cn } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import styles from './DropdownSearchInput.module.scss'

interface DropdownSearchInputProps {
	className?: string
	value: string
	onChange: (value: string) => string
}

//FIXME: доделать компонент
export const DropdownSearchInput: FC<DropdownSearchInputProps> = ({
	className,
	value,
	onChange,
}) => {
	return (
		<div className={cn(styles.search, className)}>
			<Input value={value} onChange={onChange} />
		</div>
	)
}
