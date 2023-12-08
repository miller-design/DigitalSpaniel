import Link from 'next/link'
import styles from './page.module.scss'
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer'

const Page = () => {
	return (
		<div className={styles.container}>
			<h1>Example Page</h1>
			<Link href="/">Back Home</Link>
			<VideoPlayer
				src={`https://stream.mux.com/ddJzdeAeYLU01a00T9cGBbKPVsf018RcbnBpxXuv01RE4tE.m3u8`}
				poster={`https://image.mux.com/ddJzdeAeYLU01a00T9cGBbKPVsf018RcbnBpxXuv01RE4tE/thumbnail.webp?width=800&height=500&fit_mode=crop&time=2`}
			/>
		</div>
	)
}

export default Page