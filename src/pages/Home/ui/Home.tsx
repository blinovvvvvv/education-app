import { FindProfession } from '@/widgets/FindProfession'
import { Page } from '@/widgets/Page'

import { StartScreen } from '@/widgets/StartScreen'

import { FC } from 'react'

const Home: FC = () => {
	return (
		<Page>
			<StartScreen
				title={'С наступающим Новым Годом!'}
				imgSrc={
					'https://cdn.skillbox.pro/wbd-front/skillbox-static/start-screen/start-screen-sm@1x.png?v=201223'
				}
			/>
			<FindProfession className='my-16' />
		</Page>
	)
}

export default Home
