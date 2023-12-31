import { cn } from '@/shared/lib/classNames/classNames'
import { FC, HTMLAttributes } from 'react'

interface PictureProps extends HTMLAttributes<HTMLImageElement> {
	className?: string
	src: string
	alt: string
}

export const Picture: FC<PictureProps> = ({
	className,
	src,
	alt,
	...otherProps
}) => {
	return (
		<img
			src={src}
			alt={alt}
			loading={'lazy'}
			className={cn(className)}
			{...otherProps}
		/>
	)
}
