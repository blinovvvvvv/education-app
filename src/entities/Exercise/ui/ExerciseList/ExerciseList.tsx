import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import { Exercise } from '../../model/types/exercise'
import { ExerciseCard } from '../ExerciseCard/ExerciseCard'

interface ExerciseListProps {
	className?: string
	items: Exercise[]
}

export const ExerciseList: FC<ExerciseListProps> = ({ className, items }) => {
	return (
		<div className={cn(className, 'flex flex-wrap gap-6')}>
			{items.map(exercise => (
				<ExerciseCard
					className='max-w-[250px] flex-grow'
					key={exercise.id}
					exercise={exercise}
				/>
			))}
		</div>
	)
}
