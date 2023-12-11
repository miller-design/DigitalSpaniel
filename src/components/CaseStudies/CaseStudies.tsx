'use client'

import styles from './CaseStudies.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';
import parse from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'

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
	const sliderRef = useRef<any>(null)
	const imgSliderRef = useRef<any>(null)

	const handlePrev = useCallback(() => {
    if (!sliderRef.current && !imgSliderRef.current) {
			return
		}
    sliderRef.current.swiper.slidePrev()
		imgSliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
		if (!sliderRef.current && !imgSliderRef.current) {
			return
		}
    sliderRef.current.swiper.slideNext()
		imgSliderRef.current.swiper.slideNext()
  }, [])

	const chevronRight = () => {
		return (
			<div className={styles.chevron}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		)
	}

	const chevronLeft = () => {
		return (
			<div className={styles.chevron}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		)
	}

	return (
		<section className={styles.container}>
			<div className={styles.top}>
				{title && <h3 className={styles.title}>{parse(title)}</h3>}
				{text && <p className={styles.text}>{ text }</p>}
			</div>
			<div className={styles.bottom}>
				{/* image slider to handle to the images swapping upon navigation */}
				<div className={styles.imgCarousel}>
					{slideData && <Swiper
							ref={imgSliderRef}
							spaceBetween={70}
							loop={true}
							grabCursor={true}
							slidesPerView={'auto'}
							centeredSlides={true}
							speed={1000}
						>
						{slideData.map((slide: Slide, i) => {
							const img = slide.image
							return (
								<SwiperSlide key={i} className={styles.carousleSlideImg}>
									<Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>
								</SwiperSlide>
							)
						})}
					</Swiper>}
				</div>
				{/* carousel to handle the text fade in fade out effect */}
				<div className={styles.textCarousel}>
					{slideData && <Swiper
						ref={sliderRef}
						loop={true}
						effect={'fade'}
						modules={[EffectFade]}
					>
						{slideData.map((slide: Slide, i) => {
							const link = slide.link
							return (
								<SwiperSlide key={i} className={styles.carousleSlideText}>
									<div className={styles.textContainer}>
										<h4 className={styles.slideTitle}>{slide.title}</h4>
										<p className={styles.slideText}>{slide.text}</p>
										<Link href={link.url} target={link.target} className={styles.slidelink}>{link.title}</Link>
									</div>
								</SwiperSlide>
							)
						})}
						<div className={styles.navigationWrapper}>
							<button onClick={handlePrev}>{chevronLeft()}</button>
							<button onClick={handleNext}>{chevronRight()}</button>
						</div>
					</Swiper>}
				</div>
			</div>
		</section>
	)
}

export { CaseStudies }