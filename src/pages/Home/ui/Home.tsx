import { Counter } from '@/entities/Counter/ui/Counter'
import { StartScreen } from '@/widgets/StartScreen'

import { FC } from 'react'

export const Home: FC = () => {
	return (
		<>
			<StartScreen
				title={'С наступающим Новым Годом!'}
				imgSrc={
					'https://cdn.skillbox.pro/wbd-front/skillbox-static/start-screen/start-screen-sm@1x.png?v=201223'
				}
			/>
			<Counter />
		</>
	)
}
