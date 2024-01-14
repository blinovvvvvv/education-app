import { CareerTagList } from '@/entities/CareerTag'
import { DropdownSearchInput } from '@/features/dropdownSearchInput'
import { cn } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Container } from '@/shared/ui/Container/Container'
import { Divider } from '@/shared/ui/Divider/Divider'
import { Picture } from '@/shared/ui/Picture/Picture'
import { Title } from '@/shared/ui/Title/Title'
import { FC, useCallback, useState } from 'react'
import styles from './HeaderCurtain.module.scss'

interface HeaderCurtainProps {
	className?: string
}

export const HeaderCurtain: FC<HeaderCurtainProps> = ({ className }) => {
	const [value, setValue] = useState<string>('')

	const onChange = useCallback((value: string) => {
		setValue(value)
	}, [])

	return (
		<div
			className={cn('bg-white pb-12', className)}
			data-testid='header.curtain'
		>
			<Container>
				<Divider className='mb-12' />
				<div className='flex gap-6'>
					<div className='flex flex-col gap-6 max-w-[50%]'>
						<DropdownSearchInput
							value={value}
							onChange={onChange}
							className='max-w-[300px] max-h-[50px]'
							placeholder='Поиск...'
						/>
						<CareerTagList variant='outline' />
					</div>
					<div>
						<Card link={'/course'} hover className={styles.card}>
							<div className='max-w-[200px]'>
								<Title level={'h3'} size='xs'>
									Новогодняя распродажа - скидки до 60%
								</Title>
								Выберите курсы по выгодной цене.
							</div>
							<Picture
								width={200}
								height={140}
								src={
									'https://248006.selcdn.ru/MainSite/coral/resources/announcements/um/136247/8281ec27-70b7-46d6-b7e5-9a014e8b2af7.png'
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
