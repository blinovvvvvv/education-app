import { cn } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Picture } from '@/shared/ui/Picture/Picture'
import { Title } from '@/shared/ui/Title/Title'
import { FC } from 'react'
import styles from './StartScreen.module.scss'

interface StartScreenProps {
	className?: string
	title: string
	imgSrc: string
}

export const StartScreen: FC<StartScreenProps> = ({
	className,
	title,
	imgSrc,
}) => {
	return (
		<Card className={cn(styles.StartScreen, className)}>
			<div className='self-center'>
				<Title size='xl' className='font-bold text-white'>
					{title}
				</Title>
			</div>
			<Picture src={imgSrc} alt={'Start screen image'} />
		</Card>
	)
}
