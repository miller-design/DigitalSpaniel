import Link from 'next/link'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {

	return (
		<div className={styles.menu}>
			<nav>
				<ul>
					<li><Link href="/">Services</Link></li>
					<li><Link href="/">Work</Link></li>
					<li><Link href="/">About</Link></li>
					<li><Link href="/">Blog</Link></li>
					<li><Link href="/">Contact</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export { BurgerMenu }