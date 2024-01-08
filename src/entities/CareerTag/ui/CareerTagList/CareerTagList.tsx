import { cn } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { CSSProperties, FC } from 'react'
import { useTags } from '../../model/api/tagApi'
import styles from './CareerTagList.module.scss'
import { CareerTagListItem } from './CareerTagListItem/CareerTagListItem'

type CareerTagListVariant = 'default' | 'outline'

interface CareerTagListProps {
	className?: string
	variant?: CareerTagListVariant
	maxWidth?: CSSProperties['maxWidth']
}

export const CareerTagList: FC<CareerTagListProps> = ({
	className,
	variant = 'default',
	maxWidth,
}) => {
	const { data, isLoading, isError } = useTags()

	if (isLoading) {
		return (
			<div className={cn(styles.list, className)} style={{ maxWidth }}>
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
				<Skeleton width={190} height={35} />
			</div>
		)
	}

	const isOutline = variant === 'outline'

	return (
		<div className={cn(styles.list, className)} style={{ maxWidth }}>
			{isError
				? 'Произошла ошибка('
				: data?.map(tag => (
						<CareerTagListItem outline={isOutline} item={tag} key={tag.link} />
				  ))}
		</div>
	)
}
