import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import { useTags } from '../../model/api/tagApi'
import styles from './CareerTagList.module.scss'

interface CareerTagListProps {
	className?: string
}

export const CareerTagList: FC<CareerTagListProps> = ({ className }) => {
	const { data, isLoading } = useTags()
	return <div className={cn(styles.list, className)}>CareerTagList</div>
}
