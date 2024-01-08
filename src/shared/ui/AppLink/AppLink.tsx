import { cn } from '@/shared/lib/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface AppLinkProps {
	className?: string
	to: string
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = memo(
	({ className, to, children }) => {
		return (
			<Link to={to} className={cn(className)}>
				{children}
			</Link>
		)
	}
)
