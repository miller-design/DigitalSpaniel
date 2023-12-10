import styles from './TextAndLinks.module.scss'
import Link from 'next/link'
import parse from 'html-react-parser'

type Link = {
	title: string
	url: string
	target?: string
}

type LinkGroup = {
	title: string
	links: Link[]
}

type TextAndLinksProps = {
	title: string
	text?: string
	link?: Link
	links?: LinkGroup[]
}

const TextAndLinks: React.FC<TextAndLinksProps> = ({title, text, link, links}) => {

	const chevron = () => {
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
	return (
		<section className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.left}>
					{title && <h2 className={styles.title}>{parse(title)}</h2>}
					{text && <p className={styles.text}>{ text }</p>}
					{link && <Link href={link.url} target={link.target} className={styles.link}>{link.title}</Link>}
				</div>
				<div className={styles.right}>
					{links && links.map((link: LinkGroup, i: number) => {
						return (
							<div key={i} className={styles.linksWrapper}>
								<p className={styles.linkTitle}>{link.title}</p>
								<ul className={styles.linkList}>
									{link.links.map((li: Link, i: number) => {
										return (
											<li key={i}>
												<Link href={li.url} target={li.target} className={styles.li}>{li.title} {chevron()}</Link>
											</li>
										)
									})}
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export { TextAndLinks }