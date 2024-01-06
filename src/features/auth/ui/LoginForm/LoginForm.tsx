import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	return <div className={cn(className)}>LoginForm</div>
}
