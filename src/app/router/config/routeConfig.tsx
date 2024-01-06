import { Home } from '@/pages/Home'
import { AppRoutes } from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.HOME]: {
		path: '/',
		element: <Home />,
	},
	[AppRoutes.ABOUT]: {
		path: '/about',
		element: <div>ABOUT</div>,
	},
}
