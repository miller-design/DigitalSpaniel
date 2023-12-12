'use client'

import Link from 'next/link'
import styles from './BurgerMenu.module.scss'
import type { RootState } from '../../../store/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const BurgerMenu = () => {
	const burgerValue = useSelector((state: RootState) => state.burgerMenu.active)

	useEffect(() => {
		if(burgerValue) {
			document.body.classList.add('lock-scroll')
		} else {
			document.body.classList.remove('lock-scroll')
		}
	}, [burgerValue])

	return (
		<div className={`${styles.menu} ${burgerValue ? styles.active : ''}`}>
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