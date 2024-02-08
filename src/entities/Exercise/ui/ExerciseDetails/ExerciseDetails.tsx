import { cn } from '@/shared/lib/classNames/classNames'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Title } from '@/shared/ui/Title/Title'
import { FC, memo } from 'react'
import styles from './ExerciseDetails.module.scss'
import { renderBlock } from './renderBlock'

interface ExerciseProps {
	className?: string
	id: number
}

export const ExerciseDetails: FC<ExerciseProps> = memo(({ className }) => {
	const exerciseData = useTypedSelector(state => state.exercise?.data)

	return (
		<div className={cn(className)}>
			<Title size='s' className='mb-6'>
				{exerciseData?.name}
			</Title>
			<div className={styles.list}>{exerciseData?.body.map(renderBlock)}</div>
		</div>
	)
})
