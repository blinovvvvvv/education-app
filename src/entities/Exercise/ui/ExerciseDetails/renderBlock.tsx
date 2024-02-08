import { ExerciseBlock } from '../../model/types/exercise'
import { ExerciseCodeBlock } from '../ExerciseCodeBlock/ExerciseCodeBlock'

export const renderBlock = (block: ExerciseBlock) => {
	switch (block.type) {
		case 'CODE':
			return (
				<ExerciseCodeBlock key={block.id}>{block.content}</ExerciseCodeBlock>
			)
		case 'TEXT':
			return <div key={block.id}>{block.content}</div>
	}
}
