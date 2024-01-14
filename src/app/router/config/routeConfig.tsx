import { Dashboard } from '@/pages/Dashboard'
import { Home } from '@/pages/Home'
import { LoginPage } from '@/pages/Login'
import { NotFoundPage } from '@/pages/NotFound'
import { AppRoutes } from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.HOME]: {
		path: '/',
		element: <Home />,
	},
	[AppRoutes.LOGIN]: {
		path: '/login',
		element: <LoginPage />,
		isAdmin: true,
	},
	[AppRoutes.DASHBOARD]: {
		path: '/dashboard',
		authOnly: true,
		element: <Dashboard />,
	},
	// not found, last
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />,
	},
}
