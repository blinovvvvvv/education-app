import arrowIcon from '@/shared/assets/arrow.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { FC, ReactElement, useCallback, useState } from 'react'
import { Picture } from '../Picture/Picture'
import { Title } from '../Title/Title'
import styles from './Accordion.module.scss'

interface AccordionProps {
	className?: string
	title: string
	content: ReactElement
}

export const Accordion: FC<AccordionProps> = ({
	className,
	title,
	content,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const onClick = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	return (
		<div
			data-testid='accordion'
			role='button'
			onClick={onClick}
			className={cn(styles.accordion, className)}
		>
			<div className={styles.top}>
				<Title className='select-none' size='xs' level='h3'>
					{title}
				</Title>
				<Picture
					className={cn(styles.arrow, {
						[styles.arrowOpen]: isOpen,
					})}
					src={arrowIcon}
					alt='arrow'
				/>
			</div>
			<div
				data-testid='accordion.content'
				className={cn(styles.content, {
					[styles.opened]: isOpen,
				})}
			>
				<div className={styles.inner}>{content}</div>
			</div>
		</div>
	)
}
