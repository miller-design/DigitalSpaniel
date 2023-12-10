'use client'

import styles from './CaseStudies.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import parse from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'

type Link = {
	title: string
	url: string
	target?: string
}

type Slide = {
	title: string
	text: string
	link: Link
	image: {
		src: string,
		alt: string,
		width: number,
		height: number
	}
}

type CaseStudiesProps = {
	title: string
	text?: string
	slideData?: Slide[]
}

const CaseStudies: React.FC<CaseStudiesProps> = ({title, text, slideData}) => {
	const slideHtml = [];

	return (
		<section className={styles.container}>
			<div className={styles.top}>
				{title && <h3 className={styles.title}>{parse(title)}</h3>}
				{text && <p className={styles.text}>{ text }</p>}
			</div>
			<div className={styles.bottom}>
			{slideData && <Swiper
				spaceBetween={60}
				slidesPerView={'auto'}
				centeredSlides={true}
				loop={true}
				initialSlide={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{slideData.map((slide: Slide, i) => {
					const link = slide.link
					const img = slide.image

					return (
						<SwiperSlide key={i} className={styles.carousleSlide}>
							<div className={styles.imageContainer}>
								<Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>
							</div>
							<div className={styles.textContainer}>
								<h4 className={styles.slideTitle}>{slide.title}</h4>
								<p className={styles.slideText}>{slide.text}</p>
								<Link href={link.url} target={link.target} className={styles.slidelink}>{link.title}</Link>
							</div>
						</SwiperSlide>
					)
				})}

			</Swiper>}
			</div>
		</section>
	)
}

export { CaseStudies }