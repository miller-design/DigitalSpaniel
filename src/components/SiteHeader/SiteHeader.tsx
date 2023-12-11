'use client'

import styles from './SiteHeader.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Burger } from '../Burger/Burger'

type Link = {
	target?: string
	url: string
	title: string
}

type SiteHeaderProps = {
	links: Link[]
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ links }) => {
	const scrollThreshHold = 10
	const [y, setY] = useState(0)
	const [headerInView, setHeaderIn] = useState(true)
	const [headerScaled, setHeaderScaled] = useState(false)

	const handleScroll = useCallback((e: any) => {
			const window = e.currentTarget

			if (window.scrollY > scrollThreshHold && y < window.scrollY && headerInView) {
				setHeaderIn(false)
			} else if (scrollY <= scrollThreshHold && !headerInView || y > window.scrollY && !headerInView) {
				setHeaderIn(true)
			}

			if(window.scrollY > scrollThreshHold && !headerScaled) {
				setHeaderScaled(true)
			} else if(window.scrollY <= scrollThreshHold && headerScaled) {
				setHeaderScaled(false)
			}

			setY(window.scrollY)

	}, [y, headerInView, headerScaled]);

	useEffect(() => {
		setY(window.scrollY)

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [handleScroll])


	const displayLogo = () => {
		return (
			<div className={styles.logowrap}>
				<Image src="/logo.png" alt="site logo" width="420" height="200" />
			</div>
		)
	}

	const linksData = () => {

		if(links.length <= 0) {
			return <></>
		}

		return links.map((link, i) => {
			return <Link key={i} href={link.url} target={link.target}>{link.title}</Link>
		})
	}

	return (
		<header className={`${styles.header} ${headerInView ? styles.headerActive : ''} ${headerScaled ? styles.headerSmall : ''}`}>
				<div className={styles.left}>
					{/* show me the logo  */}
					{displayLogo()}
				</div>
				<div className={styles.right}>
					{/* show me links if they are provided */}
					<nav>
						{links && linksData()}
					</nav>
					<Burger />
				</div>
		</header>
	)
}

export { SiteHeader }