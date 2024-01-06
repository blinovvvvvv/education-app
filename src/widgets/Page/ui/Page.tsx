import { cn } from '@/shared/lib/classNames/classNames'
// eslint-disable-next-line blinovsku-plugin/layer-imports
import { Header } from '@/widgets/Header'
import { FC, PropsWithChildren } from 'react'

interface PageProps {
	className?: string
	noHeader?: boolean
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
	className,
	noHeader,
	children,
}) => {
	return (
		<div className={cn(className)}>
			{!noHeader && <Header />}
			<main>{children}</main>
		</div>
	)
}
