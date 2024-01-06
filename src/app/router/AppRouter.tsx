import { AppRoutesProps } from '@/shared/types/router'
import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from './config/routeConfig'
import { ProtectedRoute } from './ProtectedRoute'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		//FIXME: Add page loader
		const element = (
			<Suspense fallback={<div>Loading</div>}>{route.element}</Suspense>
		)

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					route?.isAdmin ? (
						<ProtectedRoute adminOnly={route.isAdmin}>{element}</ProtectedRoute>
					) : (
						element
					)
				}
			/>
		)
	}, [])

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
