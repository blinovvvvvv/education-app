import completeIcon from '@/shared/assets/complete.svg'
import previewIcon from '@/shared/assets/lesson-preview.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { Card } from '@/shared/ui/Card/Card'
import { Picture } from '@/shared/ui/Picture/Picture'
import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Exercise } from '../../model/types/exercise'
import styles from './ExerciseCard.module.scss'

interface ExerciseCardProps {
	className?: string
	exercise: Exercise
}

export const ExerciseCard: FC<ExerciseCardProps> = memo(
	({ className, exercise }) => {
		const navigate = useNavigate()
		const { id } = useAuth()
		const isCompletedByUser = exercise.completedUsers.some(
			user => user.id === id
		)

		const onClick = useCallback(() => {
			navigate(`/exercise/${exercise.id}`)
		}, [exercise.id, navigate])

		return (
			<div onClick={onClick} className={className}>
				<Card className={cn(styles.card)}>
					{isCompletedByUser && (
						<Picture
							className={styles.completed}
							width={30}
							height={30}
							src={completeIcon}
							alt='Completed'
						/>
					)}
					<Picture
						width={100}
						height={100}
						src={previewIcon}
						alt='Lesson Preview'
					/>
				</Card>
				<div className='mt-2'>{exercise.name}</div>
			</div>
		)
	}
)
