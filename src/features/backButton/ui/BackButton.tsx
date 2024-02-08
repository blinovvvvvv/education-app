import arrowIcon from '@/shared/assets/arrow.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Button } from '@/shared/ui/Button/Button'
import { Picture } from '@/shared/ui/Picture/Picture'
import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.scss'

interface BackButtonProps {
	className?: string
}

export const BackButton: FC<BackButtonProps> = memo(({ className }) => {
	const navigate = useNavigate()
	const courseId = useTypedSelector(state => state.course.data?.id)

	const onClick = useCallback(() => {
		navigate(`/course/${courseId}`)
	}, [courseId, navigate])

	return (
		<Button
			onClick={onClick}
			theme='clear'
			className={cn(styles.BackButton, className)}
		>
			<div className={styles.icon}>
				<Picture width={9} height={17} src={arrowIcon} alt='Arrow' />
			</div>
			<div>Назад</div>
		</Button>
	)
})
