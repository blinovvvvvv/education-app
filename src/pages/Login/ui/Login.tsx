import { cn } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'

interface LoginProps {
	className?: string
}

const Login: FC<LoginProps> = ({ className }) => {
	return <div className={cn(className)}>Login</div>
}

export default Login
