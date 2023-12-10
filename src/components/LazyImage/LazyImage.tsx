/*
  component is using next.js image comp (https://nextjs.org/docs/api-reference/next/image)
  The default way to display an image for a next.js project
  @param image: Object (contains image detail like src and alt text)
  @param sizes: array (eg. [100, 33, 25] = [mobile, tablet, desktop])
  @param priority: boolean (When true, the image will be considered high priority and preload.)
	@param q: number (the number provided will determine the output quality of the image during a build)
	@param intrinisic: boolean (help eliminate content reflow when images load in by creating a placeholder div)

*/

import Image from 'next/image'
import styles from './LazyImage.module.scss'
import { createImageSrcSizes, getImageRatio ,getRatioFallback } from '@/../utils'

type LazyImgProps = {
	image: {
		src: string
		alt: string
	}
	width: number
	height: number
	sizes: number[]
	priority: boolean
	q?: number
	intrinsic?: boolean
}

const LazyImage: React.FC<LazyImgProps> = ({
	image,
	width,
	height,
	sizes,
	priority,
	q = 95,
	intrinsic = true
}) => {

	const imgSizes = createImageSrcSizes(sizes)
	const imgRatio = getImageRatio(width, height)
	const ratioFallback = getRatioFallback(width, height)

	if (intrinsic) {
		return (
			<div
				className={`${styles.container}`}
				style={{
					[`--img-ratio` as string]: imgRatio,
					[`--img-ratio-fallback` as string]: ratioFallback
				}}
			>
				<Image
					src={image?.src}
					alt={image?.alt}
					width={width}
					height={height}
					sizes={imgSizes}
					priority={priority}
					className={styles.img}
					quality={q}
				/>
			</div>
		)
	} else {
		return (
			<Image
				src={image?.src}
				alt={image?.alt}
				width={width}
				height={height}
				sizes={imgSizes}
				priority={priority}
				className={`${styles.img}`}
				quality={q}
			/>
		)
	}
}

export { LazyImage }
export type { LazyImgProps }
