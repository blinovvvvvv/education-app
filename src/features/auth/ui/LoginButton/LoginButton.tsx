import { useUserActions } from '@/entities/User'
import { cn } from '@/shared/lib/classNames/classNames'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { Button } from '@/shared/ui/Button/Button'
import { FC, memo, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginButtonProps {
	className?: string
}

export const LoginButton: FC<LoginButtonProps> = memo(({ className }) => {
	const user = useAuth()
	const navigate = useNavigate()
	const { logout } = useUserActions()
	console.log(user)

	const buttonText = useMemo(() => (user ? 'Выйти' : 'Войти'), [user])

	const onLogin = useCallback(() => {
		navigate('/login')
	}, [navigate])

	const onLogout = useCallback(() => {
		logout()
	}, [logout])

	const onClickHandler = useCallback(() => {
		if (user) {
			onLogout()
		} else {
			onLogin()
		}
	}, [user, onLogout, onLogin])

	return (
		<Button theme='clear' onClick={onClickHandler} className={cn(className)}>
			{buttonText}
		</Button>
	)
})
