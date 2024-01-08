import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute: FC<PropsWithChildren<{ adminOnly?: boolean }>> = ({
	adminOnly,
	children,
}) => {
	const user = useAuth()

	if (!user) return <Navigate to='/' replace />

	if (adminOnly && user.isAdmin) return <Navigate state to='/' replace />

	return children
}
