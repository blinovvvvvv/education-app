import { FindProfession } from '@/widgets/FindProfession'
import { StartScreen } from '@/widgets/StartScreen'

import { FC } from 'react'

export const Home: FC = () => {
	return (
		<>
			<StartScreen
				className='mb-16'
				title={'С наступающим Новым Годом!'}
				imgSrc={
					'https://cdn.skillbox.pro/wbd-front/skillbox-static/start-screen/start-screen-sm@1x.png?v=201223'
				}
			/>
			<FindProfession />
		</>
	)
}
