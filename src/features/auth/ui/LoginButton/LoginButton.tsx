import { cn } from '@/shared/lib/classNames/classNames'
import { useAuth } from '@/shared/lib/hooks/useAuth/useAuth'
import { Button } from '@/shared/ui/Button/Button'
import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginButtonProps {
	className?: string
}

export const LoginButton: FC<LoginButtonProps> = memo(({ className }) => {
	const user = useAuth()
	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		if (user) {
			navigate('/dashboard')
		} else {
			navigate('/login')
		}
	}, [user, navigate])

	return (
		<Button theme='clear' onClick={onClickHandler} className={cn(className)}>
			Войти
		</Button>
	)
})
