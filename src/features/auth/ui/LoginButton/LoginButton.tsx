import { cn } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { FC } from 'react'

interface LoginButtonProps {
	className?: string
}

export const LoginButton: FC<LoginButtonProps> = ({ className }) => {
	return (
		<div className={cn(className)}>
			<Button>Войти</Button>
		</div>
	)
}
