import { cn } from '@/shared/lib/classNames/classNames'
import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
	className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
	className,
	children,
}) => {
	return <div className={cn(styles.container, className)}>{children}</div>
}
