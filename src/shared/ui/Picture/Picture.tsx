import { cn } from '@/shared/lib/classNames/classNames'
import { FC, ImgHTMLAttributes, memo } from 'react'

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string
	src: string
	alt: string
}

export const Picture: FC<PictureProps> = memo(
	({ className, src, alt, ...otherProps }) => {
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
)
