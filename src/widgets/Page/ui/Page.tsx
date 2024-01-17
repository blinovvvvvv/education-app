import { cn } from '@/shared/lib/classNames/classNames'
// eslint-disable-next-line blinovsku-plugin/layer-imports
import { Header } from '@/widgets/Header'
import { FC, PropsWithChildren, ReactElement } from 'react'

interface PageProps {
	className?: string
	noHeader?: boolean
	customHeader?: ReactElement
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
	className,
	noHeader,
	customHeader,
	children,
}) => {
	return (
		<div className={cn(className)}>
			{!noHeader && !customHeader && <Header />}
			{customHeader}
			<main>{children}</main>
		</div>
	)
}
