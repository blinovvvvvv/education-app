import { Course } from '@/entities/Course'
import searchIcon from '@/shared/assets/search.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { Input } from '@/shared/ui/Input/Input'
import { FC, useCallback, useEffect, useState } from 'react'
import { findCourses } from '../../model/services/findCourses/findCourses'
import styles from './DropdownSearchInput.module.scss'
import { DropdownSearchList } from './DropdownSearchList/DropdownSearchList'

interface DropdownSearchInputProps {
	className?: string
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

export const DropdownSearchInput: FC<DropdownSearchInputProps> = ({
	className,
	value,
	onChange,
	placeholder,
}) => {
	//FIXME: костыль, не лучшее решение
	const [result, setResult] = useState<Course[]>([])
	const [filteredValue, setFilteredValue] = useState(value)
	const debouncedSetFilteredValue = useDebounce(setFilteredValue, 1000)
	const [visible, setVisible] = useState(false)

	const fetchData = useCallback(async () => {
		const data = await findCourses(filteredValue)
		if (data) {
			setResult(data)
			setVisible(true)
		}
	}, [filteredValue])

	useEffect(() => {
		if (filteredValue.length) fetchData()
	}, [fetchData, filteredValue])

	const handleChange = useCallback(
		(value: string) => {
			onChange(value)
			debouncedSetFilteredValue(value)
		},
		[debouncedSetFilteredValue, onChange]
	)

	const onBlur = useCallback(() => {
		setVisible(false)
	}, [])

	return (
		<div className={cn(styles.search, className)}>
			<Input
				placeholder={placeholder}
				icon={searchIcon}
				value={value}
				onChange={handleChange}
				onBlur={onBlur}
			/>
			{result?.length > 0 && visible && <DropdownSearchList items={result} />}
		</div>
	)
}
