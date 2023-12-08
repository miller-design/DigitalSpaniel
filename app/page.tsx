import Link from 'next/link'
import styles from './index.module.scss'

const Page = () => {
	return (
		<div className={styles.container}>
			<h1>Boilerplate</h1>
			<Link href="/example">Example Page</Link>
		</div>
	)
}

export default Page