'use client'

/*
  component is using ReactPlayer (https://github.com/CookPete/react-player)
  This is the default way to display a video in the project
  @param src: string (remote url for video source, always try and avoid hosting local vidoe files eg: https://stream.mux.com/ddJzdeAeYLU01a00T9cGBbKPVsf018RcbnBpxXuv01RE4tE.m3u8)
  @param poster: string (post thumbnail url, must provide a width and height value in this string eg: https://image.mux.com/ddJzdeAeYLU01a00T9cGBbKPVsf018RcbnBpxXuv01RE4tE/thumbnail.webp?width=800&height=500&fit_mode=crop&time=2)
*/

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './VideoPlayer.module.scss'
import Image from 'next/image'
import { getSizeValuesFromString } from '../../../utils'

type VideoPlayerProps = {
	src?: string,
	poster?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	src,
	poster
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const posterSize = poster ? getSizeValuesFromString(poster) : null

  useEffect(() => {
    setIsLoaded(true)
  }, [])

	return (
		<>
			<div className={`${styles.playerWrapper} ${isLoaded && src ? styles.loaded : ``}`}>
				<div className={styles.loadingState}>
					{poster && posterSize ? (
						<Image
							src={poster}
							alt={`video player poster image`}
							width={posterSize?.width}
							height={posterSize?.height}
						/>
					) : (
						<p>Loading...</p>
					)}
					{isLoaded && src && (
						<ReactPlayer
							className={styles.reactPlayer}
							url={src}
							width='100%'
							height='100%'
							playing={true}
							controls={false}
							muted={true}
							playsinline={true}
							loop={true}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export { VideoPlayer }
export type { VideoPlayerProps }
