import styles from './Burger.module.scss'
import { useState } from 'react'

const Burger = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div
			className={`${styles.element} ${isActive ? styles.active : ''}`}
			onClick={() => setIsActive(!isActive)}
		>
			<span></span>
			<span></span>
		</div>
	)
}

export { Burger }