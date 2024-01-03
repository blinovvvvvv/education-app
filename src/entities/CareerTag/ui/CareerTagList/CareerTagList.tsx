import { cn } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { CSSProperties, FC } from 'react'
import { useTags } from '../../model/api/tagApi'
import styles from './CareerTagList.module.scss'
import { CareerTagListItem } from './CareerTagListItem/CareerTagListItem'

interface CareerTagListProps {
	className?: string
	maxWidth?: CSSProperties['maxWidth']
}

export const CareerTagList: FC<CareerTagListProps> = ({
	className,
	maxWidth,
}) => {
	const { data, isLoading, isError } = useTags()

	if (isLoading) {
		return <Skeleton width={200} height={40} />
	}

	return (
		<div className={cn(styles.list, className)} style={{ maxWidth }}>
			{isError
				? 'Произошла ошибка('
				: data?.map(tag => <CareerTagListItem item={tag} key={tag.link} />)}
		</div>
	)
}
