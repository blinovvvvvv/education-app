import { DropdownSearchInput } from '@/features/dropdownSearchInput'
import { cn } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'
import { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FindProfession.module.scss'

interface FindProfessionProps {
	className?: string
}

export const FindProfession: FC<FindProfessionProps> = ({ className }) => {
	const navigate = useNavigate()
	const [value, setValue] = useState<string>('')

	const onChange = useCallback((value: string) => {
		setValue(value)
	}, [])

	const onClickHandler = useCallback(() => {
		if (value.length > 0) navigate(`/search?s=${value}`)
	}, [navigate, value])

	return (
		<Container className={cn(styles.FindProfession, className)}>
			<DropdownSearchInput
				value={value}
				onChange={onChange}
				className='flex-grow'
				placeholder={'Профессия или навык'}
			/>
			<Button
				onClick={onClickHandler}
				className='font-medium max-w-[200px] flex-grow'
			>
				Найти
			</Button>
		</Container>
	)
}
