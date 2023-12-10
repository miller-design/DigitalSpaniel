import styles from './HeroHeader.module.scss'
import { LazyImage, LazyImgProps } from '../LazyImage/LazyImage'
import Link from 'next/link'
import parse from 'html-react-parser'

type Link = {
	title: string
	url: string
	target?: string
}
type HeroHeaderProps = {
	title: string
	text?: string
	link?: Link
	tags?: string
	image?: LazyImgProps
}

const HeroHeader: React.FC<HeroHeaderProps> = ({tags, title, text, link, image}) => {

	return (
		<section className={styles.container}>
			<div className={styles.left}>
				{tags && <p className={styles.tags}>{tags}</p>}
				{title && <h1 className={styles.title}>{parse(title)}</h1>}
				{text && <p className={styles.text}>{ text }</p>}
				{link && <Link href={link.url} target={link.target} className={styles.link}>{link.title}</Link>}
			</div>
			<div className={styles.right}>
				{image && <LazyImage {...image} />}
			</div>
		</section>
	)
}

export { HeroHeader }