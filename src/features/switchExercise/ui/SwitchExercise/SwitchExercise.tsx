import { fetchExerciseById, useCoursePageActions } from '@/entities/Exercise'
import arrowIcon from '@/shared/assets/arrow.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/Button/Button'
import { Picture } from '@/shared/ui/Picture/Picture'
import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SwitchExercise.module.scss'

type SwitchExerciseDirection = 'left' | 'right'

interface SwitchExerciseProps {
	className?: string
	link: string
	id: number
	direction?: SwitchExerciseDirection
}

export const SwitchExercise: FC<SwitchExerciseProps> = memo(
	({ className, link, direction, id }) => {
		const navigate = useNavigate()
		const dispatch = useAppDispatch()
		const { selectExercise } = useCoursePageActions()

		const onClick = useCallback(() => {
			navigate(link)
			if (id) {
				dispatch(fetchExerciseById(+id))
				selectExercise(+id)
			}
		}, [dispatch, id, link, navigate, selectExercise])

		return (
			<Button
				onClick={onClick}
				theme='clear'
				className={cn(styles.switch, className)}
			>
				<Picture
					width={10}
					height={18}
					className={cn(styles.icon, {
						[styles.right]: direction === 'right',
					})}
					src={arrowIcon}
					alt='arrow'
				/>
			</Button>
		)
	}
)
