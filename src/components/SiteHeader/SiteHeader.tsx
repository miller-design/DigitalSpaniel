'use client'

import styles from './SiteHeader.module.scss'
import Link from 'next/link'

import Image from 'next/image'

type Link = {
	target?: string
	url: string
	title: string
}

type SiteHeaderProps = {
	links: Link[]
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ links }) => {

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
		<header className={styles.header}>
				<div className={styles.left}>
					{/* show me the logo  */}
					{displayLogo()}
				</div>
				<div className={styles.right}>
					{/* show me links if they are provided */}
					<nav>
						{links && linksData()}
					</nav>
				</div>
		</header>
	)
}

export { SiteHeader }