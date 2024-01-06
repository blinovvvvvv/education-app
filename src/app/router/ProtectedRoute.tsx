import { FC, PropsWithChildren } from 'react'

export const ProtectedRoute: FC<PropsWithChildren<{ adminOnly?: boolean }>> = ({
	adminOnly,
	children,
}) => {
	// FIXME: Сделать приватный роут как для юзера так и для админуса
	// const user = useAuth()
	//
	// if (!user) return <Navigate to='/' replace />

	return children
}
