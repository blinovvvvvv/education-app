import { CareerTagList } from '@/entities/CareerTag'
import searchIcon from '@/shared/assets/search.svg'
import { cn } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Container } from '@/shared/ui/Container/Container'
import { Divider } from '@/shared/ui/Divider/Divider'
import { Input } from '@/shared/ui/Input/Input'
import { Picture } from '@/shared/ui/Picture/Picture'
import { Title } from '@/shared/ui/Title/Title'
import { FC } from 'react'
import styles from './HeaderCurtain.module.scss'

interface HeaderCurtainProps {
	className?: string
}

export const HeaderCurtain: FC<HeaderCurtainProps> = ({ className }) => {
	return (
		<div className={cn('bg-white pb-12', className)}>
			<Container>
				<Divider className='mb-12' />
				<div className='flex gap-6'>
					<div className='flex flex-col gap-6 max-w-[50%]'>
						<Input
							className='max-w-[300px] max-h-[50px]'
							icon={searchIcon}
							placeholder='Поиск...'
						/>
						<CareerTagList variant='outline' />
					</div>
					<div>
						<Card link={'/course'} hover className={styles.card}>
							<div className='max-w-[200px]'>
								<Title level={'h3'} size='s'>
									Новогодняя распродажа - скидки до 60%
								</Title>
								Выберите курсы по выгодной цене.
							</div>
							<Picture
								width={200}
								height={140}
								src={
									'https://248006.selcdn.ru/MainSite/coral/resources/announcements/um/126407/55bc1248-eb24-4e46-803f-5fef1ebc69b7.png'
								}
								alt={'sale image'}
							/>
						</Card>
					</div>
				</div>
			</Container>
		</div>
	)
}
